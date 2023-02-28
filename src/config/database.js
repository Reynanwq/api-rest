// configuracao da base de dados: usuario, snha, host

module.exports = {
  dialect: 'mysql',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    timesstamps: true,
    underscored: true,
    underscoreALL: true,
    createAt: 'created_at',
    updateAt: 'update_at',
  },
  dialectOptions: {
    timezone: 'America/Bahia',
  },
  timezone: 'America/Bahia',
};
