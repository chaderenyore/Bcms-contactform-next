const { createBcmsMostConfig } = require("@becomes/cms-most");

module.exports = createBcmsMostConfig({
  cms: {
    origin: process.env.BCMS_API_ORIGIN || "https://becomes-starter-projects.yourbcms.com",
    key: {
      id: process.env.BCMS_API_KEY || "622b70b377a890368d3602d4",
      secret:
        process.env.BCMS_API_SECRET ||
        "46c7de04efc90eb0196608548b8f0157a2edda12c982ef2469b4ed60a6582d94",
    },
  },
  server: {
    port: 3001,
  },
  media: {
    output: "public",
  },
  enableClientCache: true,
});
