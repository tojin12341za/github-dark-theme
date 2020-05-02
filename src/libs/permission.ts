// REF: Decoupling Chrome instance by https://github.com/mozilla/webextension-polyfill
// REF: Chrome permission list https://developer.chrome.com/apps/declare_permissions
// REF: Chrome permission API https://developer.chrome.com/apps/permissions

const set = (origin: string, permission: string = '', cb: Function = undefined) => {
    if (!cb) {
        cb = granted => {
            console.log(`${origin} set ${permission} is ${granted ? 'granted' : 'not granted'}.`);
        };
    }
    chrome.permissions.request(
        {
            origins: [origin], // e.g., http://www.google.com/
            permissions: [permission], // e.g., storage
        },
        cb()
    );
};

const remove = (origin: string, permission: string, cb: Function = undefined) => {
    if (!cb) {
        cb = removed => {
            console.log(`${origin} set '${permission}' permission is ${removed ? 'removed' : 'not removed'}.`);
        };
    }
    chrome.permissions.remove(
        {
            origins: [origin],
            permissions: [permission],
        },
        cb()
    );
};

const isSupport = (origin: string, permission: string, cb: Function = undefined) => {
    if (!cb) {
        cb = hasPermission => {
            console.log(`${hasPermission ? 'Yes' : 'Not'}, ${origin} has '${permission}' permission.`);
        };
    }
    chrome.permissions.contains(
        {
            origins: [origin],
            permissions: [permission],
        },
        cb()
    );
};

const print = () => {
    chrome.permissions.getAll(permissions => console.table(permissions));
};

const permission = {
    set: set,
    remove: remove,
    isSupport: isSupport,
    print: print,
};

export { permission };
