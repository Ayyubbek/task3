const http = require("http");
const url = require("url");

function gcd(a, b) {
  return b === 0n ? a : gcd(b, a % b);
}

function lcm(a, b) {
  if (a === 0n) return b;  
  if (b === 0n) return a;
  return (a * b) / gcd(a, b);
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (pathname === "/akhmadovayyubbek0131_gmail_com") {
    try {
      const x = BigInt(query.x);
      const y = BigInt(query.y);

      if (x < 0n || y < 0n) {
        res.end("0"); 
      } else {
        res.end(lcm(x, y).toString());
      }
    } catch (e) {
      res.end("0");
    }
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
