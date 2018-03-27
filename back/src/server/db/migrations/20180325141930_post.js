
exports.up = function(knex, Promise) {
  return knex.schema.table('post', async (table) => {
    await table.dropTimestamps()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  
};
