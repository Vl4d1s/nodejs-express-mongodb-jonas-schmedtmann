const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1 *not good for production* once the all data is available
  // then we sendnig the data to the client
  // fs.readFile("test-file.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });
  // Solution 2 *reading chunk by chunk*
  // streaming the data to the client
  // the problem with this king of sulutions
  // is that we read the content of the file
  // much faster than we sendnig it to the client (back pressure)
  // const readable = fs.createReadStream("test-file.txt");
  // readable.on("data", (chunk) => {
  //   // res isa writeable stream.
  //   res.write(chunk);
  // });
  // readable.on("end", () => {
  //   res.end();
  // });
  // readable.on("err", (err) => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end("File not found");
  // });

  // Solution 3 using pipe operator
  const readable = fs.createReadStream("test-file.txt");
  // solvs the problem of the back pressure
  readable.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening...");
});
