const router = require('koa-router')()
const nodemailer = require("nodemailer");

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Welcome to Falcom'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

// 增加响应表单请求的路由
router.post('/sendMsg',async(ctx, next)=>{
  let {email, message} = ctx.request.body
  if( email != null && message != null ){
      await sendEmail(email, message)
  }
})

async function sendEmail(email, message) {
  if( email != null && message != null ){

    let transporter = nodemailer.createTransport({
      // host: 'smtp.ethereal.email',
      service: '163', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
      port: 465, // SMTP 端口
      secureConnection: true, // 使用了 SSL
      auth: {
        user: 'whywhom@163.com',
        // 这里密码不是qq密码，是你设置的smtp授权码
        pass: 'UOQLNMOXQPDSNJZA',
      }
    });
    
    let mailOptions = {
      from: email, // sender address
      to: 'whywhom@163.com, ellen@falcon-technology.cn', // list of receivers
      subject: 'Hello', // Subject line
      // 发送text或者html格式
      text: message // plain text body
      // html: '<b>Hello world?</b>' // html body
    };
    
    // send mail with defined transport object
    let info = transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        ctx.response.body = {
          code: 200,
          message: error
        }
        return console.log(error);
      }
      ctx.response.body = {
        code: 200,
        message: 'Mail sent successfully!'
      }
      return console.log('Message sent: %s', info.messageId);
    });
    // ctx.redirect('/datainit');
  }else{
    ctx.body = {
      code: 500,
      message: 'Something went wrong!'
    }
    console.log('Something went wrong!')
  }
}

module.exports = router
