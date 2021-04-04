const table = "categories";
module.exports = (knex) => {
  module.getAllCategories = () => {
    return knex.select().table(table);
  };
  module.getCategoriesById = (id) => {
    return knex.select().where("id", id).first().table(table);
  };
  module.createCategories = (body) => {
    return knex.table(table).insert(body);
  };
  module.updateCategories = (id, body) => {
    return knex.table(table).where("id", id).update(body);
  };
  module.deleteCategories = (id, body) => {
    return knex.table(table).where("id", id).del();
  };
  return module;
};
