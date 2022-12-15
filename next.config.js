// @ts-check
// const { i18n } = require("./next-i18next.config.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    localeDetection: false,
    locales: ["en", "bg", "rs"],
    defaultLocale: "en",
    http: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
