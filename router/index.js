const Router = require('koa-router');

const router = new Router();

router.get('/index', async ctx => {
    ctx.body = `ie8 project run in koa2`;
});

module.exports = router;