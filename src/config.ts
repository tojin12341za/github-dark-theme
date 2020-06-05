const config = {
    cssFilePath: 'app/app.css',
    storageDomainList: 'domainList',
    storageExcludedUrlList: 'excludedUrlList',
    domainList: [],
    excludedUrlList: [],
    defaultDomainList: ['github.com', 'gist.github.com'],
    defaultExcludedUrlList: ['github.com/marketplace'],
    defaultThemeBasedOn: 'system-preferred',
    useSystemPrefersScheme: false,
    themeBasedOn: 'system-preferred',
    uninstallQuestionnaire:
        'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__c9PL4pUQ0pFOVpUQzdLRERIQlc4RVZSSEZVSDM2OS4u',
} as Config;

interface Config {
    cssFilePath: string;
    storageDomainList: string;
    storageExcludedUrlList: string;
    domainList: string[];
    excludedUrlList: string[];
    defaultDomainList: string[];
    defaultExcludedUrlList: string[];
    defaultThemeBasedOn: 'system-preferred' | 'user-setting';
    useSystemPrefersScheme: boolean;
    themeBasedOn: 'system-preferred' | 'user-setting';
    uninstallQuestionnaire: string;
}

export { config, Config };
