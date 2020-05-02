import { config } from './config';
import { isEmpty, fetchDomainString, fetchUrlString, isUrlInList, runtime } from './libs';
import { browser } from "webextension-polyfill-ts";

const initGithubDarkTheme = () => {
    browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        browser.storage.sync.get([config.storageDomainList, config.storageExcludedUrlList]).then(data => {
            if (!tab) return;
            if (!tab.url) return;
            if (isUrlInList(fetchUrlString(tab.url), data.excludedUrlList)) return;
            console.log(`Current URL: ${tab.url}`);
            console.log('Domain List:');
            console.table(data.domainList);
            console.log('Excluded URL List:');
            console.table(data.excludedUrlList);
            if (isUrlInList(fetchDomainString(tab.url), data.domainList)) {
                browser.tabs.insertCSS(tab.id, {
                    file: config.cssFilePath,
                    runAt: 'document_start',
                });
            }
        });
    });
};

(function () {
    runtime.setUninstallURL(config.uninstallQuestionnaire);
    browser.storage.sync
        .get([config.storageDomainList, config.storageExcludedUrlList])
        .then(data => {
            if (!isEmpty(data.domainList) && !isEmpty(data.excludedUrlList)) return data;

            data = {
                domainList: config.defaultDomainList,
                excludedUrlList: config.defaultExcludedUrlList
            }
            browser.storage.sync.set(data);

            return data;
        })
        .then(initGithubDarkTheme);
})();
