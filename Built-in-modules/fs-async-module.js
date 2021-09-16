const { readFile, writeFile } = require("fs");

console.log("start");

readFile("../content/file.txt", "utf-8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("reading...:",result);
});

//writing to a file from 2 files
readFile("../content/file.txt", "utf-8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  const first = result;
  readFile("../content/second.txt", "utf-8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    const second = result;

    writeFile(
      "../content/result.txt",
      `result of two files is:${first} ${second}`,
      { flag: "a" },
      (error, result) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log("done writing");
      }
    );
  });
});

console.log("end");
