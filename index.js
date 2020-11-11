const { server } = require("./server");

const port = process.env.PORT || 1337;

server.listen(port, () => {
  console.log(`audio-expert server listening on: http://localhost:${port}`);
});
