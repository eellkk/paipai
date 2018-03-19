const Router = require('koa-router');
const queries = require('../src/server/db/queries/post');

const router = new Router();
const BASE_URL = `/api/v1/post`;

router.get(BASE_URL, async (ctx) => {
  try {
    const posts = await queries.getAllPosts();
    ctx.body = {
      status: 'success',
      data: posts
    };
  } catch (err) {
    console.log(err)
  }
})

router.get(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const post = await queries.getSinglePost(ctx.params.id);
    ctx.body = {
      status: 'success',
      data: post
    };
  } catch (err) {
    console.log(err)
  }
})

router.post(`${BASE_URL}`, async (ctx) => {
  try {
    console.log(ctx)
    const post = await queries.addPost(ctx.request.body);
    if (post.length) {
      ctx.status = 201;
      ctx.body = {
        status: 'success',
        data: post
      };
    } else {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: 'Something went wrong.'
      };
    }
  } catch (err) {
    console.log(err)
  }
})

router.put(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const post = await queries.updatePost(ctx.params.id, ctx.request.body);
    if (post.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: post
      };
    } else {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: 'Something went wrong.'
      };
    }
  } catch (err) {
    console.log(err)
  }
})

router.delete(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const post = await queries.deletePost(ctx.params.id);
    if (post.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: post
      };
    } else {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: 'Something went wrong.'
      };
    }
  } catch (err) {
    console.log(err)
  }
})

module.exports = router;
