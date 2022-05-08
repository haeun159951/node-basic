const fs = require("fs").promises;

// read a file  - buffer
fs.readFile("./text.txt", "utf8")
  .then((data) => console.log(data))
  .catch(console.error);

// write a file

fs.writeFile("./file.txt", "Hello Dream coder!") //
  .catch(console.error);

fs.appendFile("./file.txt", "Yo")
  .then(() => {
    fs.copyFile("./file.txt", "./file2.txt").catch(console.error);
  }) //
  .catch(console.error);

// make a folder
fs.mkdir("sub-folder").catch(console.error);

fs.readdir("./") //
  .then(console.log)
  .catch(console.error);
