var readline=require('readline');
var util=require('../algorithm_utility/algo_utility.js');
var readlinesync=require('readline-sync');
var value=process.argv[2];
console.log('\n\n Think of a number between 0 and '+value);
console.log('\n follow the instructions');
util.findNumber(readlinesync,value);
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
var arr=[];
function bubblesort()
{
    read.question("enter size: ",function(size){
        start=utility.getCurrentTime();
        arrayIn(size);
    })
}
arrayIn =function(size){
    if( size==0){
        utility.bubblesort(arr);
        console.log(arr);
        stop=utility.getCurrentTime();
        result=utility.getElapsedTime(start,stop);
        console.log("elapsed time: "+result+ "seconds");
    }
    else{
        read.question("enter a value: ",(value)=>{
            arr.push(value);
            arrayIn(--size);
        })
    }
};
bubblesort();