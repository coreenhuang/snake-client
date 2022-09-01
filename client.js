const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: CH");

    // conn.write("Move: up");

    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 1000)
  
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 1000)

  });

  conn.on("data", () => {
    console.log("you ded cuz you idled");
  });

  return conn;
};

module.exports = {connect};