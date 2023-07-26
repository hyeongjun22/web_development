const row = 30;
const column = 30;
var arr = new Array(row);
for (var i=0;i<column;i++){
    arr[i]=new Array(30);
}

const date=new Date();
const minute1=date.getMinutes();

let minute2=minute1;
let num=0;
while(minute2-minute1<5){
    num++;
    var readline = require("readline");

    var input1 = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    
    if(num%2==1){
        console.log("검은돌 차례");  
    }
    else{
        console.log("흰돌 차례");
    }
    var a=Number(input1[0]);
    var b=Number(input1[1]);     
    input1.on("line", (line) => { 
        console.log(line);
        var input2 = line.split(",");

        a=Number(input1[0]);
        b=Number(input1[1]); 
        console.log(a);
        input1.close(); 
     });
    

    /*if(num%2==1){
        arr[a][b]=1; 
    }
    else{
        arr[a][b]=0;
    }*/
    
    console.log(arr);


}










