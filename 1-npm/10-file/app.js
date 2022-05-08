const fs = require("fs");

//3가지 방식
//rename(...., callback(error, data))
//try {renameSync(....)} catch(e)
//promises.rename().then().catch(0)

try {
  fs.renameSync("./text.txt", "./text-new.txt");
} catch (error) {
  console.log("hello");
}

fs.rename("./text-new.txt", "./text.txt", (error) => {
  console.log(error);
});

console.log("hello");

fs.promises
  .rename("./text2.txt", "./text-new2.txt")
  .then(() => console.log("Done"))
  .catch(console.log.error);
