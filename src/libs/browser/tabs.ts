import { browser } from "webextension-polyfill-ts";

const getCurrentTab = () => {
    return browser.tabs.query({
        active: true,
        currentWindow: true,
    }).then(tabs => tabs[0]);
};

const addTab = (domain: string) => {
    browser.tabs.create({ active: true, url: `http://${domain}` });
};

const tabs = {
    getCurrentTab: getCurrentTab,
    addTab: addTab
};

export { tabs };
