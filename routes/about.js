const router = require('koa-router')()

router.get('/about', async (ctx, next) => {
  await ctx.render('about.pug', {
    title: 'Welcome to Falcom'
  })
})

module.exports = router
