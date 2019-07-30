const getPort = require("get-port"),
  nomadcoin = require("./nomadcoin/src/server.ts");



getPort().then(port => {
  const server = nomadcoin.app.listen(port, () => {
    console.log(`running blockcahin node on: http://localhost:${port}`);
  });
  nomadcoin.startP2PServer(server);
  global.sharePort = port;
});