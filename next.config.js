require("dotenv").config();

module.exports = {
  i18n: {
    locales: ["kk", "ru"],
    defaultLocale: "kk",
  },
  env: {
    NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN:
      process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
  },
};
