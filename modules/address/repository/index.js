const table = "addresses";
module.exports = (knex) => {
  module.getAllAddressByUserId = (userId) => {
    return knex.select().where("user_id", userId).table(table);
  };
  module.getAddressById = (id) => {
    return knex.select().where("id", id).first().table(table);
  };
  module.createAddress = (body) => {
    return knex.table(table).insert(body);
  };
  module.updateAddressById = (id, body) => {
    return knex.table(table).where("id", id).update(body);
  };
  module.deleteAddressById = (id) => {
    return knex.table(table).where("id", id).del();
  };
  return module;
};
