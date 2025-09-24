const http = require("http");
const url = require("url");

function gcd(a, b) {
  return b === 0n ? a : gcd(b, a % b);
}

function lcm(a, b) {
  if (a === 0n && b === 0n) return 0n;   // LCM(0,0) = 0
  if (a === 0n) return b;                // LCM(0,n) = n
  if (b === 0n) return a;                // LCM(n,0) = n
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
        res.end("NaN");
      } else {
        res.end(lcm(x, y).toString());
      }
    } catch {
      res.end("NaN");
    }
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
