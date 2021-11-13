const router = require('koa-router')()
const userService = require('../utils/db');

router.prefix('/users')

router.get('/', async(ctx, next)=> {
  ctx.response.body = userService.findAllUser();
})

router.get('/login', function (ctx, next){
  ctx.body = 
  `
  <h1>this is a users response!</h1>
    <form action="/users/register" method="post">
      <input name="name" type="text" placeholder="请输入用户名：falcon"/> 
      <br/>
      <input name="password" type="text" placeholder="请输入密码：123456"/>
      <br/> 
      <button>GoGoGo</button>
    </form>
  `
})


// 增加响应表单请求的路由
router.post('/register',async(ctx, next)=>{
  let {name, password} = ctx.request.body
  if( name == 'falcon' && password == 'qazwsxedc123' ){
    // ctx.response.body = `Hello， ${name}！` 
    ctx.redirect('/datainit');
  }else{
    ctx.response.body = '账号信息错误'
  }
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
