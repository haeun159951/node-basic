const process = require("process");

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => {
  console.log("set time out");
}, 0);
process.nextTick(() => {
  console.log("nextTick");
});

for (let i = 0; i < 100; i++) {
  console.log("for loop");
}

// 현재 블럭 안에 있는 코드가 다 실행되고 나서 비동기적으로 나중에 실행되길 원할때 (즉, 태스크 큐에 넣고 다음줄로 바로 넘어가길 원할때) 쓸 수 있는 방법이 setTimeout과 nextTink이 있어요. 차이점은

// setTimeout(() => { }, 0) 이건 태스크 큐 제일 끝으로 넣어주는 반면

// nextTick은 큐 제일 앞으로 넣어줘서, 가능한 제일 빨리 실행될 수 있도록 해주죠
