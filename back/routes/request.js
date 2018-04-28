const router = require('koa-router')()

router.prefix('/do')

router.get('/welcome', function (ctx, next) {
  console.log(ctx)
  ctx.body = ctx
})

module.exports = router
