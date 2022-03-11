const {
  createBcmsMostServerRoutes,
  createBcmsMostServerRoute,
} = require('@becomes/cms-most');

module.exports = createBcmsMostServerRoutes({
  '/home': createBcmsMostServerRoute({
    method: 'get',
    handler: async ({ bcms }) => {
      return await bcms.content.entry.findOne('home', async (item) => {
        return item;
      });
    },
  }),
});
