
exports.up = function(knex, Promise) {
  return knex.schema.table('post', (table) => {
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  
};
