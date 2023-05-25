module.exports = {
  development: {
    client: "pg",
    connection: {
      user: "postgres",
      password: "test",
      database: "genshin_teams",
    },
  },
  migration: {
    tableName: "knex_migrations",
    directory: "./db/migrations",
  },
};
