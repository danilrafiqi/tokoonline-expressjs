exports.up = function (knex) {
  return knex.schema.createTable("addresses", function (table) {
    table.increments("id");
    table.string("address").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("addresses");
};
