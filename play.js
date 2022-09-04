const net = require("net");

// const {connect} = require("./client");

const {setupInput} = require('./input');

console.log("Connecting ...");

// connect();

setupInput();

// both connect lines above commented out as it works fine without them
// when connect lines are not commented out, there are two snakes that appear in the server