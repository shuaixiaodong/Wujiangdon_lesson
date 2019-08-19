const Koa = require('koa');
const app = new Koa();

app.use(async(ctx) => {
  //当请求时GET请求时，显示表单让用户填写
  if(ctx.url === '/' && ctx.method === 'GET') {
    let html = `
      <h1>Koa2 request post demo</h1>
      <form method="POST"  action="/">
          <p>userName</p>
          <input name="userName" /> <br/>
          <p>age</p>
          <input name="age" /> <br/>
          <p>webSite</p>
          <input name='webSite' /><br/>
          <button type="submit">submit</button>
      </form>
    `;
    ctx.body = html;
    //当请求时POST请求时
  } else if(ctx.url === '/' && ctx.method === 'POST') {
    let postData = await(parsePostData(ctx));
    ctx.body = postData;
  } else {
    //其它请求显示404页面
    ctx.body = `<h1>404！</h1>`
  }
})

function parsePostData(ctx) {
  return new Promise((resolve,reject) => {
    try {
      let postdata = '';
      ctx.req.on('data',(data) => {
        postdata += data;
      })
      ctx.req.addListener('end',function() {
        let postData = parseQueryStr(postdata);
        resolve(postData);
      })
    } catch (error) {
      reject(error);
    }
  })
}

function parseQueryStr(queryStr){
  let queryData = {};
  let queryStrList = queryStr.split('&');
  for(let [index,queryStr] of queryStrList.entries()) {
    let itemList = queryStr.split('=');
    queryData[itemList[0]] = decodeURIComponent(itemList[1]);
  }
  return queryData;
}

app.listen(3000,() => {
  console.log('server is running at port 3000!')
})