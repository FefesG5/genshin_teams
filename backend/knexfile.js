module.exports = {
  development: {
    client: "pg",
    connection: {
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
      password: process.env.DB_PASSWORD,
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL, // Use the online database URL provided by the environment variable
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
};
