//定义serverHandler，对于req和res的处理

const handleBlogRouter = require("./src/router/blog");
const handleUserRouter = require("./src/router/user");

const serverHandler = (req, res) => {
  //设置返回格式
  res.setHeader("Content-type", "application/json");

  //重新计算赋值req的path属性
  const url = req.url;
  req.path = url.split("?")[0];

  //处理blog 路由

  const blogData = handleBlogRouter(req, res);

  if (blogData) {
    res.end(JSON.stringify(blogData));
    return;
  }

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

//env: process.env.NODE_ENV
