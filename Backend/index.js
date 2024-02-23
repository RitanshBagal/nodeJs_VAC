/*
const,let,var
const -> can't change
let/var x = 3

difference is bw their scope
*/
// let x= 3;

// x = 4;
// console.log(x)

// const a = 10;
// if(a>5){
//     console.log("Greater");
// }
// else{
//     console.log("Smaller");
// }

// const a = 4;
// for(let i =0;i<5;i++){
//     console.log(i);
// }


// Traditional way
// function add (a,b){
//     return a+b;
// }
// add(5,4);

// Modern way
// let add = (a,b)=>{
//     return a+b;
// }

// console.log(add(4,4));

/*Non Blocking and Blocking programming languages
/ python -> blocking, js-> non-blocking
ex:
Task A //2ms
Task B //2ms
HEAVY Task C //20ms
Task D //2ms

PYTHON EXECUTION: A->B->C->D
JS EXECUTION: A->B->D->C
*/

// console.log("Frist line")
// setTimeout(() => {
//     console.log("Second line")
// }, 1000);
// console.log("Third line")


//3 states of process execution-> pending, reslolve, reject
async function main(){
    console.log("first line")
    async function secondTask (){
        return new Promise (function(resolve,reject){
            setTimeout(function() {
                console.log("second line");
                resolve();
            }, 1000);
        })  
        await secondTask();
    }
    await secondTask();
    console.log("third line")

}
main();

// what are event loops