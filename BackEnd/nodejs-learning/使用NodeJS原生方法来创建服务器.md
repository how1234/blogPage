

# 使用NodeJS原生方法来创建服务器

## 如何创建Server

http里面的`createServer()`方法可以用来创建服务器

```
const http = require('http')	
const server = http.createServer( (req,res) => {})

server.listen(3000) //监听3000端口

```

访问request的属性

```
req.method //访问方法，常用值有GET,POST
req.headers['content-type'] //访问content-type
req.url //得到请求的整个url
```

### 综合实例

```javascript
const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  //获取访问方法
  const method = req.method;

  //获取访问路由
  const url = req.url;

  const path = url.split("?")[0];

  const queries = querystring.parse(url.split("?")[1]);
  //使用了querystring之后呢就会返回一个Object
  //比如传入参数为name=12345&b=345

  console.log(queries.name); //12345
  console.log(queries.b); //345

  //设置返回格式为json
  //setHeader()可以用来设置返回首部
  res.setHeader("Content-type", "application/json");

  //返回数据
  //{"method":"GET","url":"/?name=12345&b=345","path":"/","queries":{"name":"12345","b":"345"}}
  const resData = {
    method,
    url,
    path,
    queries
  };

  if (method === "GET") {
    //返回的是个json格式的字符串。
    res.end(JSON.stringify(resData));
  } else if (method === "POST") {
    let postData = "";

    //监听数据传输开始
    //数据以chunk方式传输。
    req.on("data", chunk => {
      postData += chunk.toString();
    });

    req.on("end", () => {
      resData.postData = postData;
      res.end(JSON.stringify(resData));
    });
  }
});

server.listen(8000, () => {
  console.log("server is running on 8000");
});

```

`cross-env`包可以传入环境变量。
使用`cross-dev NODE_ENV=dev node app.js`来启动服务器时，可以通过`process.env.NODE_ENV`来得到'dev'这个值。



## 设置路由

服务器需要根据请求的URL和Path属性，进行相应的业务逻辑并且返回数据；

路由的业务逻辑

```
//user.js
const handleUserRouter = (req,res) => {
  const method = req.method
  const path = req.path
  
  if(method === 'GET' && path === '/api/user/login'){
    return {
      msg:"You can create a user"
    }
  }
}
module.exports = handleUserRouter
```

主路由(app.js)

```
//app.js
//定义serverHandler，对于req和res的处理

const handleBlogRouter = require("./src/router/blog");
const handleUserRouter = require("./src/router/user");

const serverHandler = (req, res) => {
  //设置返回格式
  res.setHeader("Content-type", "application/json");

  //重新计算赋值req的path属性
  const url = req.url;
  req.path = url.split("?")[0];
  
  //处理user路由
  const userData = handleUserRouter(req, res);

  if (userData) {
    res.end(JSON.stringify(userData));
    return;
  }

  //如果全部未命中，返回404

  res.writeHead(404, { "Content-type": "text/plain" });
  res.write("404 not found");
  res.end();
};

module.exports = serverHandler;
```

最上层的服务器连接逻辑。

```
//整个项目的入口文件
//服务器连接逻辑

const http = require("http");
const serverHandler = require("../app.js");
const PORT = 8000 || process.env.PORT;

const server = http.createServer(serverHandler);

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

```



