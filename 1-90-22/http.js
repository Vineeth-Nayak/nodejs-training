const http = require("http");
const port = process.env.PORT | 5000;

const server = http.createServer((req, res) => {
  res.write("Surprise mogos");
  res.end();
});

server.listen(port, () => console.log(`listening on port ${port}`));
