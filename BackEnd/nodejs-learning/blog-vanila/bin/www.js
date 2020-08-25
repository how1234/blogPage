//服务器连接逻辑

const http = require("http");
const serverHandler = require("../app.js");
const PORT = 8000 || process.env.PORT;

const server = http.createServer(serverHandler);

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
