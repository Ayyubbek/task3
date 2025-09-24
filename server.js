const http = require("http");
const url = require("url");

function gcd(a, b) {
  return b === 0n ? a : gcd(b, a % b);
}

function lcm(a, b) {
  if (a === 0n && b === 0n) return NaN;
  if (a === 0n) return b;
  if (b === 0n) return a;
  return (a * b) / gcd(a, b);
}

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  if (pathname === "/akhmadovayyubbek0131_gmail_com") {
    try {
      if (!("x" in query) || !("y" in query)) {
        res.end("NaN");
        return;
      }

      const x = BigInt(query.x);
      const y = BigInt(query.y);

      if (x < 0n || y < 0n) {
        res.end("NaN");
      } else {
        const result = lcm(x, y);
        res.end(isNaN(result) ? "NaN" : result.toString());
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
  console.log(`Server running on port ${PORT}`);
});
