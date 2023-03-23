const http = require("http");
const fs = require("fs");
const networkIp = require("../utils/networkIp");

const hostname = networkIp;
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  fs.createReadStream("index.html").pipe(res);
})


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
});