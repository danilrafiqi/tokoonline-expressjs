
exports.up = function(knex) {
    return knex.schema.createTable("addresses", function(table){
        table.increments('id');
        table.string('address').notNullable();
        table.integer('user_id').notNullable();
        table.foreign('user_id').references('users.id')
    })
};
  
exports.down = function(knex) {
  return knex.schema.dropTable("addresses")
};
