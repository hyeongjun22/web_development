const readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

  // 생성한 rl 변수를 사용하는 법
  rl.on("line", (line) => { 
     console.log(line);
      rl.close(); 
  });

