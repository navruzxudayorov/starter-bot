const {Router}=require('@grammyjs/router');
const router = new Router((ctx) => ctx.session.step);

const step1=router.route('start');
step1.command('start',async(ctx)=>{
    ctx.reply('salom')
    ctx.session.step='step2'
});




module.exports=router