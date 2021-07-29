module.exports = {
  development: {
    database: {
      host: "localhost",
      port: 3306,
      name: "nodeAndMySQL",
      dialect: "mysql",
      user: "root",
      password: "((Root1.5@))",
    },
  },
  production: {
    database: {
      host: process.env.DB_HOST,
      host: process.env.DB_PORT,
    },
  },
};
