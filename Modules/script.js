const names = require("./Modules/names"); //import module
const data = require("./Modules/data");

//from mind-grenade---->id = 10 is printed at top cuz display() from mind-grenade
require("./Modules/mind-grenade"); //this kind of import leads to direct execution cuz its called in the file

//from module names
console.log(names);
console.log(names.jake);
console.log(typeof names);
names.sayHello("sarah");

//from module data
console.log(data);
console.log(data.movies);
console.log(`OS=${data.pc["os"]}`);