const handlerBlogRouter = (req, res) => {
  const method = req.method;
  const path = req.path

  //GET方法的路由
  if (method === "GET") {
    //获取列表
    if (path === "/api/blog/list") {
      return {
        msg: "get Blog List"
      };
    }
    //获取博客详情
    if (path === "/api/blog/detail") {
      return {
        msg: "get BLog detail"
      };
    }
  } else if (method === "POST") {
    if (path === "/api/blog/create") {
      return {
        msg: "create Blog"
      };
    }
  }
};

module.exports = handlerBlogRouter