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
