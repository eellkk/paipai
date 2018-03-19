const knex = require('../connection');

function getAllPosts() {
  return knex('post')
  .select('*');
}

function getSinglePost(id) {
  return knex('post')
  .select('*')
  .where({ id: parseInt(id) });
}

function addPost(post) {
  console.log(post)
  return knex('post')
  .insert(post)
  .returning('*');
}

function updatePost(id, post) {
  return knex('post')
  .update(post)
  .where({ id: parseInt(id) })
  .returning('*');
}

function deletePost(id) {
  return knex('post')
  .del()
  .where({ id: parseInt(id) })
  .returning('*');
}

module.exports = {
  getAllPosts,
  getSinglePost,
  addPost,
  updatePost,
  deletePost
};