module.exports = {
  swaggerDefinition: {
    info: {
      description: 'Official documentation of the ExplorAstro API for my love Front-End Developers',
      title: 'ExplorAstro-API',
      version: '1.8.2-beta',
    },
    host: 'explorastro-api.herokuapp.com',
    basePath: '/',
    produces: [
      'application/json',
    ],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: '',
      },
    },
  },
  basedir: __dirname,
  files: ['../routers/*.js', '../controllers/*.js'],
};
