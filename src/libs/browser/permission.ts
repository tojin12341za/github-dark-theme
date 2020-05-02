// REF: Chrome permission list https://developer.chrome.com/apps/declare_permissions
// REF: Chrome permission API https://developer.chrome.com/apps/permissions
import { browser, Manifest } from "webextension-polyfill-ts";

const set = (origin: string, permission: Manifest.OptionalPermission, callback: (any) => void = undefined) => {
    if (!callback) {
        callback = granted => {
            console.log(`${origin} set ${permission} is ${granted ? 'granted' : 'not granted'}.`);
        };
    }
    browser.permissions.request(
        {
            origins: [origin], // e.g., http://www.google.com/
            permissions: [permission], // e.g., storage
        },
    ).then(callback);
};

const remove = (origin: string, permission: Manifest.OptionalPermission, callback: (any) => void = undefined) => {
    if (!callback) {
        callback = removed => {
            console.log(`${origin} set '${permission}' permission is ${removed ? 'removed' : 'not removed'}.`);
        };
    }
    browser.permissions.remove(
        {
            origins: [origin],
            permissions: [permission],
        }
    ).then(callback);
};

const isSupport = (origin: string, permission: string, callback: (any) => void = undefined) => {
    if (!callback) {
        callback = hasPermission => {
            console.log(`${hasPermission ? 'Yes' : 'Not'}, ${origin} has '${permission}' permission.`);
        };
    }
    browser.permissions.contains(
        {
            origins: [origin],
            permissions: [permission],
        }
    ).then(callback);
};

const print = () => {
    browser.permissions.getAll().then(permissions => console.table(permissions));
};

const permission = {
    set: set,
    remove: remove,
    isSupport: isSupport,
    print: print,
};

export { permission };
