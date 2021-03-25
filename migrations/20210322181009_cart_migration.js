
exports.up = function(knex) {
    return knex.schema.createTable("carts", function(table){
        table.increments('id');
        table.integer('user_id').notNullable();
        table.foreign('user_id').references('users.id')
        table.integer('product_id').notNullable();
        table.foreign('product_id').references('products.id')
        table.integer('quantity').notNullable();
    })
};
  
exports.down = function(knex) {
  return knex.schema.dropTable("carts")
};
