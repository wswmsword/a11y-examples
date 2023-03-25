const http = require("http");
const fs = require("fs");
const networkIp = require("./networkIp");

const hostname = networkIp;
const port = 3000;

module.exports = (path = "index.html") => {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    fs.createReadStream(path).pipe(res);
  })


  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
  });
}