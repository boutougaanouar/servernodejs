const fs = require("fs");
const htpp = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.readFile("./views/about.html", (err, data) => {
        if (err) throw err;
        res.write(data);
        return res.end();
      });
      break;
    case "/contact":
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.readFile("./views/contact.html", (err, data) => {
        if (err) throw err;
        res.write(data);
        return res.end();
      });
      break;
    case "menu":
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile("./views/menu.html", (err, data) => {
          if (err) throw err;
          res.write(data);
          return res.end();
        });
    default:
        res.write("404 page not found");
        return res.end();
  }
});

server.listen(3000);
