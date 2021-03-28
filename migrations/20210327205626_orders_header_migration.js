
exports.up = function(knex) {
    return knex.schema.createTable("orders_header", function(table){
        table.increments('id');
        table.integer('total').notNullable();
    })
};
  
exports.down = function(knex) {
  return knex.schema.dropTable("orders_header")
};
