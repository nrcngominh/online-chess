const app = require("./app.js")();
const server = require("http").Server(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("Client connected!");
});

server.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port", server.address().port);
});
