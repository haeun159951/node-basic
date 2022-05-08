const fs = require("fs");
// ㅍㅏ이프는 여러가지를 묶어서 사용 가능
const readStream = fs.createReadStream("./file.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./file4.txt");
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on("finish", () => {
  console.log("done!");
});

const http = require("http");
const server = http.createServer((req, res) => {
  fs.readFile("file.txt", (err, data) => {
    res.end(data);
  });
});

server.listen(3000);
