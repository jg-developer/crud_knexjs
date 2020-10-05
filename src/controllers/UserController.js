const knex = require("../database/index");

module.exports = {
  async index(req, res) {
    const results = await knex("users");

    return res.json(results);
  },
  async create(req, res, next) {
    try {
      const { username } = req.body;

      if (!username) {
        const error = new Error("Send username");
        error.status = 500;
        next(error);
      }

      await knex("users").insert({ username });

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const { username } = req.body;
      const { id } = req.params;

      if (!username) {
        const error = new Error("Send username");
        error.status = 500;
        next(error);
      }

      if (!id) {
        const error = new Error("Send id");
        error.status = 500;
        next(error);
      }

      await knex("users").update({ username }).where({ id });

      return res.send();
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params;

      if (!id) {
        const error = new Error("Send id");
        error.status = 500;
        next(error);
      }

      await knex("users").where({ id }).del();

      return res.send();
    } catch (error) {
      next(error);
    }
  },
};
