const getPort = require("get-port"),
  nomadcoin = require("./nomadcoin/src/server.ts");

getPort().then(port => {
  const server = nomadcoin.default.app.listen(port, () => {
    console.log(`running blockcahin node on: http://localhost:${port}`);
  });

  nomadcoin.default.startP2PServer(server);
  global.sharePort = port;
});
