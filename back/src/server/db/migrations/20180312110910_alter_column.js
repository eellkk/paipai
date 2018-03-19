
exports.up = function(knex, Promise) {
  return knex.schema.table('post', (table) => {
    table.timestamps();
    table.dropColumn('created');
    table.dropColumn('content');
    table.text('body');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('post', (table) => {
    table.dropTimestamps();
    table.dropColumn('content');
    table.string('created');
    table.string('content');
  })
};
