const BLOG = {
  title: "Krishna Damaraju",
  author: "Krishna Damaraju",
  email: "i@craigary.net",
  link: "",
  description: "Experiences, Mistakes & Learnings",
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  appearance: "auto", // ['light', 'dark', 'auto'],
  primaryColor: "#cb734d",
  primaryLight: "#d0815f",
  lightBackground: "#fff", // use hex value, don't forget '#' e.g #fffefc
  darkBackground: "#0a0908", // use hex value, don't forget '#'
  path: "",
  since: 2021, // If leave this empty, current year will be used.
  postsPerPage: 20,
  sortByDate: true,
  showAbout: true,
  showArchive: true,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateURL: "https://og-image-craigary.vercel.app", // The link to generate OG image, don't end with a slash
  socialLink: "https://twitter.com/craigaryhart",
  seo: {
    keywords: ["Blog", "Website", "Notion"],
    googleSiteVerification: "", // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  analytics: {
    provider: "", // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: "", // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: "", // e.g https://ackee.craigary.net , don't end with a slash
      domainId: "", // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: "", // e.g: G-XXXXXXXXXX
    },
  },
  github: {
    repoLink: "https://github.com/SarathSantoshDamaraju/portfilio-site-2022/",
    issueLink:
      "https://github.com/SarathSantoshDamaraju/portfilio-site-2022/issues/new?assignees=craigary&labels=bug&template=bug_report.md&title=",
  },
  oldVersion: "https://bit.ly/3x7pKQG",
  socials: [
    {
      link: "https://bit.ly/38SXaKO",
      name: "HashNode",
    },
    {
      link: "http://bit.ly/2wPe5Xx",
      name: "Medium",
    },
    {
      link: "http://bit.ly/2Cqd4v2",
      name: "Dev.to",
    },
    {
      link: "http://bit.ly/2MUfVBl",
      name: "Linkedin",
    },
    {
      link: "http://bit.ly/37Q6tVf",
      name: "Product Hunt",
    },
    {
      link: "https://twitter.com/krishnadamaraju",
      name: "Twitter",
    },
    {
      link: "http://bit.ly/2wJgNhc",
      name: "Github",
    },
    {
      link: "http://bit.ly/2NiENlJ",
      name: "npm",
    },
    {
      link: "http://bit.ly/2oM9XEd",
      name: "SO",
    },
  ],
  comment: {
    // support provider: gitalk, utterances, cusdis
    provider: "", // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: "", // The repository of store comments
      owner: "",
      admin: [],
      clientID: "",
      clientSecret: "",
      distractionFreeMode: false,
    },
    utterancesConfig: {
      repo: "",
    },
    cusdisConfig: {
      appId: "", // data-app-id
      host: "https://cusdis.com", // data-host, change this if you're using self-hosted version
      scriptSrc: "https://cusdis.com/js/cusdis.es.js", // change this if you're using self-hosted version
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
};
// export default BLOG
module.exports = BLOG;
