//local,not intended to share
const viraj = "viraj";

//intended to share
const john = "john";
const jake = "jake";

function sayHello(name) {
  console.log(`Hey,` + name);
}

module.exports = { john, jake, sayHello }; //export module
