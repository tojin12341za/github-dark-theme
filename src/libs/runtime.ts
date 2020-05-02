// REF: Decoupling Chrome instance by https://github.com/mozilla/webextension-polyfill

const setUninstallURL = (url: string) => {
    chrome.runtime.setUninstallURL(url, () => {
        console.log('We are sorry to see you go! :(');
    });
};

const runtime = {
    setUninstallURL: setUninstallURL,
};

export { runtime };
