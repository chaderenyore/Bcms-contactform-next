const { createBcmsMostConfig } = require('@becomes/cms-most');

module.exports = createBcmsMostConfig({
  cms: {
    origin:
      process.env.BCMS_API_ORIGIN ||
      'https://becomes-starter-projects.yourbcms.com',
    key: {
      id: process.env.BCMS_API_KEY || '629dcd4dbcf5017354af6fe8',
      secret:
        process.env.BCMS_API_SECRET ||
        '7a3c5899f211c2d988770f7561330ed8b0a4b2b5481acc2855bb720729367896',
    },
  },
  media: {
    output: 'public',
    download: false,
  },
  enableClientCache: true,
});
