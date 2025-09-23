const http = require("http");
const url = require("url");


function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (pathname === "/akhmadovayyubbek0131_gmail_com") {
    const x = parseInt(query.x);
    const y = parseInt(query.y);

    res.setHeader("Content-Type", "text/plain");

    if (Number.isNaN(x) || Number.isNaN(y) || x <= 0 || y <= 0) {
      res.end("NaN");
    } else {
      res.end(lcm(x, y).toString());
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Not found");
  }
});


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
