export const countries = [
    {
        "code": "1",
        "name": "United States",
        "flag": "us",
        "COUNTRY_CODE": "US",
        "mask": "####-####",
        "emoji": "🇺🇸"
    },
    {
        "code": "44",
        "name": "United Kingdom",
        "flag": "gb",
        "COUNTRY_CODE": "GB",
        "mask": "#### ####",
        "emoji": "🇬🇧"
    },
    {
        "code": "49",
        "name": "Germany",
        "flag": "de",
        "COUNTRY_CODE": "DE",
        "mask": "(0) #### ####",
        "emoji": "🇩🇪"
    },
    {
        "code": "33",
        "name": "France",
        "flag": "fr",
        "COUNTRY_CODE": "FR",
        "mask": "# ## ## ## ##",
        "emoji": "🇫🇷"
    },
    {
        "code": "81",
        "name": "Japan",
        "flag": "jp",
        "COUNTRY_CODE": "JP",
        "mask": "## #### ####",
        "emoji": "🇯🇵"
    },
    {
        "code": "55",
        "name": "Brazil",
        "flag": "br",
        "COUNTRY_CODE": "BR",
        "mask": "(##) #####-####",
        "emoji": "🇧🇷"
    },
    {
        "code": "86",
        "name": "China",
        "flag": "cn",
        "COUNTRY_CODE": "CN",
        "mask": "####-####",
        "emoji": "🇨🇳"
    },
    {
        "code": "7",
        "name": "Russia",
        "flag": "ru",
        "COUNTRY_CODE": "RU",
        "mask": "(####) ###-##-##",
        "emoji": "🇷🇺"
    },
    {
        "code": "91",
        "name": "India",
        "flag": "in",
        "COUNTRY_CODE": "IN",
        "mask": "####-#######",
        "emoji": "🇮🇳"
    },
    {
        "code": "39",
        "name": "Italy",
        "flag": "it",
        "COUNTRY_CODE": "IT",
        "mask": "#### ######",
        "emoji": "🇮🇹"
    },
    {
        "code": "34",
        "name": "Spain",
        "flag": "es",
        "COUNTRY_CODE": "ES",
        "mask": "#### ######",
        "emoji": "🇪🇸"
    },
    {
        "code": "61",
        "name": "Australia",
        "flag": "au",
        "COUNTRY_CODE": "AU",
        "mask": "#### ### ###",
        "emoji": "🇦🇺"
    },
    {
        "code": "52",
        "name": "Mexico",
        "flag": "mx",
        "COUNTRY_CODE": "MX",
        "mask": "## #### ####",
        "emoji": "🇲🇽"
    },
    {
        "code": "82",
        "name": "South Korea",
        "flag": "kr",
        "COUNTRY_CODE": "KR",
        "mask": "#### ####",
        "emoji": "🇰🇷"
    },
    {
        "code": "31",
        "name": "Netherlands",
        "flag": "nl",
        "COUNTRY_CODE": "NL",
        "mask": "(##) #######",
        "emoji": "🇳🇱"
    },
    {
        "code": "46",
        "name": "Sweden",
        "flag": "se",
        "COUNTRY_CODE": "SE",
        "mask": "##-### ### ###",
        "emoji": "🇸🇪"
    },
    {
        "code": "41",
        "name": "Switzerland",
        "flag": "ch",
        "COUNTRY_CODE": "CH",
        "mask": "## ### ## ##",
        "emoji": "🇨🇭"
    },
    {
        "code": "90",
        "name": "Turkey",
        "flag": "tr",
        "COUNTRY_CODE": "TR",
        "mask": "(###) ### ####",
        "emoji": "🇹🇷"
    },
    {
        "code": "43",
        "name": "Austria",
        "flag": "at",
        "COUNTRY_CODE": "AT",
        "mask": "#### ### ###",
        "emoji": "🇦🇹"
    },
    {
        "code": "32",
        "name": "Belgium",
        "flag": "be",
        "COUNTRY_CODE": "BE",
        "mask": "#### ### ###",
        "emoji": "🇧🇪"
    },
    {
        "code": "345",
        "name": "Cayman Islands",
        "flag": "ky",
        "COUNTRY_CODE": "KY",
        "mask": "###-####",
        "emoji": "🇰🇾"
    }
];

export default countries.map(country => {
    return {
        code: country.code,
        name: country.name,
        flag: country.flag,
        COUNTRY_CODE: country.COUNTRY_CODE,
        mask: country.mask,
        emoji: country.emoji
    }
});
