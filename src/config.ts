const config = {
    cssFilePath: 'app/app.css',
    storageDomainList: 'domainList',
    storageExcludedUrlList: 'excludedUrlList',
    domainList: [],
    excludedUrlList: [],
    defaultDomainList: ['github.com', 'gist.github.com'],
    defaultExcludedUrlList: ['github.com/marketplace'],
    useSystemPrefersScheme: false,
    uninstallQuestionnaire:
        'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__c9PL4pUNFQ0QVY5UlA0TEtCVk5YNEZaQzQyVlZaTi4u',
} as Config;

interface Config {
    cssFilePath: string;
    storageDomainList: string;
    storageExcludedUrlList: string;
    domainList: string[];
    excludedUrlList: string[];
    defaultDomainList: string[];
    defaultExcludedUrlList: string[];
    useSystemPrefersScheme: boolean;
    uninstallQuestionnaire: string;
}

export { config, Config };
