const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  define: {
    underscored: true,
  },
  // logging: false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    acquire: 30000
  },
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
});

module.exports = sequelize;
