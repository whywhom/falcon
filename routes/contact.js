const router = require('koa-router')()

router.get('/contact', async (ctx, next) => {
  await ctx.render('contact.pug', {
    title: 'Welcome to Falcom'
  })
})

module.exports = router
