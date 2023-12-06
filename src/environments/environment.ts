// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  config: {
    PORT: "4401",
    APP_URL: "http://localhost:6001",
    API_URL: "http://localhost:4502/api/",
    PORTAL_URL: "http://portal.local.missio.io/portal/",
    PORTAL_MAIN: "http://portal.local.missio.io/",
    EVENTS_HOST: "http://events.local.missio.io/",
    FUNDRAISING_HOST: "https://fundraise.teachitpro.com/",
    CID: 314,
    versionCheckURL: "http://localhost:4431",
    APIKEY:
      "25442A472D4B6150645367566B59703373357638792F423F4528482B4D6251655468576D5A7134743777397A24432646294A404E635266556A586E3272357538",
    MANUFACTURER_GROUP_ID: 122,
    IS_STORE: false,
    MARKETPLACE: false,
    TAX_EMEMPT: false,
    FINANCING: false,
    EMAIL_CONFIRMATION: false,
    ASK_COMPANY_NAME: false,
    ASK_ADDRESS: false,
    ASK_PHONE: false,
    ASK_CATEGORIES_ON_SIGNUP: true,
    PRODUCT_CATEGORIES_TABLE: "tbl_product_categories",
    VIDEO_CATEGORIES_TABLE: "tbl_missiotv_categories",
    PHONE_NUMBER_MASK: true,
    GOOGLE_PLACES_SEARCH_API: true,
    DEFAULT_COUNTRY: "US",
    AWSBUCKETURL: "https://missio.s3.us-west-2.amazonaws.com/",
    TIP_CATEGORY: "99",
    RESOURCES_CATEGORY: "93",
    EVENTS_SEMINARS_CATEGORY: "92",
    CATEGORIES_DONT_FETCH: "93,99",
    PAID_SIGNUP: true,
    CURRENCY: "USD",
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.