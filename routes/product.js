const router = require('koa-router')()

router.get('/product', async (ctx, next) => {
  let id = parseInt(ctx.request.query.id) 
  console.log('product id: %s', ctx.request.query.id);
  //- id=1 portfolio-tent.html
  //- id=2 portfolio-sleeping-bag.html
  //- id=3 portfolio-camping-lantern.html
  if(id == 1){
    await ctx.render('portfolio-tent.pug', {
      title: 'Welcome to Falcom'
    })
  } else if(id == 2){
    await ctx.render('portfolio-sleeping-bag.pug', {
      title: 'Welcome to Falcom'
    })
  } else if(id == 3){
    await ctx.render('portfolio-camping-lantern.pug', {
      title: 'Welcome to Falcom'
    })
  } else {
    ctx.body = {
      code: 500,
      message: 'Something went wrong!'
    }
    console.log('Something went wrong!')
  }
})

module.exports = router
