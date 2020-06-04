var http = require("http");
var fs = require("fs");
var path = require("path");
var mime = require("mime");


var cache = {};


//所求文件不存在时，返回404错误
function send404(response) {
  response.writeHead(404, { "Content-Type": "text/plain" });
  response.write("Error 404");
  response.end();
}
//发送文件
function sendFile(response, filePath, fileContents) {
  response.writeHead(200, {
    "Content-Type": mime.lookup(path.basename(filePath))
  });
  response.end(fileContents);
}

//利用缓存，我们先检查文件是否在缓存中，如果在缓存中，我们直接发送缓存文件，如果文件不存在，再调用文件模块读取。
function serveStatic(response, cache, absPath) {
  if (cache[absPath]) {
    sendFile(response, absPath, cache[absPath]);
  } else {
    fs.exists(absPath, function(exists) {
      //检查文件是否存在
      if (exists) {
        fs.readFile(absPath, function(err, data) {
          if (err) {
            send404(response);
          } else {
            cache[absPath] = data;
            sendFile(response, absPath, data);
          }
        });
      } else {
        //不存在
        send404(response);
      }
    });
  }
}

var server = http.createServer(function(request,response){
    var filePath = false
    if(request.url === '/'){ //返回默认文件
        filePath = 'public/index.html'
    }else{
        filePath = 'public' + request.url //返回指定文件
    }
    var absPath = './' + filePath
    serveStatic(response,cache,absPath)
})


var chatServer = require('./lib/chat_server')
chatServer.listen(server)

server.listen(3000,function(){
    console.log("Server is running on 3000")
})
