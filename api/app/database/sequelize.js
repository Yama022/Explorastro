/* eslint-disable no-console */
const log = require('log-beautify');
const { Sequelize } = require('sequelize');

try {
  const sequelize = new Sequelize(process.env.DATABASE_URL, {
    define: {
      underscored: true,
    },
    logging:  process.env.NODE_ENV === 'production' ? false : console.log,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
      acquire: 30000,
    },
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });

  log.success('Connected to PostgresQL');

  module.exports = sequelize;
}
catch (error) {
  console.error(error);
  log.error('Sequelize Connection Error', error);
}
