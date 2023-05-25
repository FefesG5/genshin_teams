module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
  },
  migration: {
    //tableName: "knex_migrations",
    directory: "./backend/db/migrations",
  },
  seeds: {
    directory: "./backend/db/seeds",
  },
};
