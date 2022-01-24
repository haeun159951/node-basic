console.log("logging");
console.clear();

//log level

console.log("log"); // development
console.log("info"); // infomation
console.log("warning"); // warning
console.log("error"); // error, user, system

// assert

console.log(2 === 3, "not same!");
console.log(2 === 2, "same!");

// print object
const student = { name: "haeun", age: 25, company: { name: "ac" } };
console.log(student);
console.table(student);
console.dir(student);
console.dir(student, { showHidde: true, color: false, depth: 0 }); // 중첩된 오브젝을 어디까지 보여줄 수 있는지

// measuring time
console.time("for loop");
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop");

//counting
function a() {
  console.count("a function");
}

a();
a();

//trace

function f1() {
  f2();
}

function f2() {
  f3();
}

function f3() {
  console.log("f3");
  console.trace();
}

f1();
