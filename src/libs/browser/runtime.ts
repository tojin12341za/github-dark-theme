import { browser } from "webextension-polyfill-ts";

const setUninstallURL = (url: string) => {
    browser.runtime.setUninstallURL(url).then(() => {
        console.log('We are sorry to see you go! :(');
    });
};

const runtime = {
    setUninstallURL: setUninstallURL,
};

export { runtime };
