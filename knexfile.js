// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "knexjs_test",
      user: "postgres",
      password: "docker",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
  },
};
