
exports.up = function(knex) {
  return knex.schema.createTable("coupons", function(table){
      table.increments('id');
      table.string("code", 100).unique().notNullable();
      table.string('description', 255);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("coupons")
};
