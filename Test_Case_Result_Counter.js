let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

let passCounter=0;
let failCounter=0;
let skipCounter=0;

for(let i=0;i<testResults.length;i++){
    if(testResults[i]==="pass") passCounter++;
     if(testResults[i]==="fail") failCounter++;
     if(testResults[i]==="skip") skipCounter++;
}

console.log("Total Tests:"+passCounter+" "+"passed");
console.log(skipCounter+" "+"skipped");
console.log(failCounter+" "+"failed");