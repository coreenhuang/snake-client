const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: CH");
  });

  conn.on("data", () => {
    console.log("you ded cuz you idled");
  });

  return conn;
};

module.exports = {connect};

// test code below within connect function

// conn.write("Move: up");

// setTimeout(() => {
//   conn.write("Move: up");
// }, 1000)

// setInterval(() => {
//   conn.write("Move: up");
// }, 1000)