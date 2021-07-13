const fetchDomainString = (url: string): string => {
    if (!url) return '';

    let result = url.match(/([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?/g);

    return result === null ? '' : result[0];
};

const fetchUrlString = (url: string): string => {
    if (!url) return '';

    let result = url.match(/([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?(\/.*)?$/g);

    return result === null ? '' : result[0];
};

const isUrlInList = (url: string, list: string[], endWithWildcard: boolean = false) => {
    var result = false;
    list.forEach((str: string) => {
        let regex = new RegExp(`^${str}${endWithWildcard ? '\\w*' : '(\/+|$)'}`, 'g');
        result = result || url.match(regex) ? true : false;
    });
    return result;
};

const isEmpty = (data: Object) => {
    if (data === undefined || data === null) return true;
    return Object.getOwnPropertyNames(data).length === 0;
};

const isSystemDarkMode = (): boolean => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export { fetchDomainString, fetchUrlString, isUrlInList, isEmpty, isSystemDarkMode };
