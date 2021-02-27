const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}
const myEventEmitter = new Sales();

myEventEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEventEmitter.on("newSale", () => {
  console.log("Customer name: Vladis");
});

myEventEmitter.on("newSale", (stock) => {
  console.log(`The are now ${stock} items left in stock`);
});

myEventEmitter.emit("newSale", 9);

////////////////////////////////////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request recieved!");
  console.log(req.url);
  res.end("Request recieved!");
});

server.on("request", (req, res) => {
  console.log("Another request!");
});

server.on("close", (req, res) => {
  console.log("Server closed!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests");
});
