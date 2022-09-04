const net = require("net");
const {connect} = require('./client');
let conn = connect();

const handleUserInput = function (data) {
  if (data === 'w') {
    conn.write('Move: up');
  } else if (data === 's') {
    conn.write('Move: down');
  } else if (data === 'a') {
    conn.write('Move: left');
  } else if (data === 'd') {
    conn.write('Move: right');
  } else if (data === '\u0003') {
    process.exit();
  }
};

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

console.log("Connecting ...");

setupInput();