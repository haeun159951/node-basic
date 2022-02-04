console.log("code1");
console.log("timeout 0");
setTimeout(() => {
  console.log("set Timeout 0");
}, 0);

console.log("code2");
setImmediate(() => {
  console.log("set immdeiate");
}); // timeout 과 굉장히 비슷해서..

console.log("code3");
process.nextTick(() => {
  console.log("process.nextTick");
}); // 우선 순위가 가장 높음
