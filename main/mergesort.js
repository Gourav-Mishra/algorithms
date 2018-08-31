var readline=require('readline');
var utility= require('../utility/algoutility');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
var arr=[];
function mergesort()
{
    read.question("enter size: ",function(size){
    
        arrayIn(size);
    })
}
arrayIn =function(size){
    if( size==0){
        utility.mergesort(arr)
        console.log(arr)
    }
    else{
        read.question("enter a value: ",(value)=>{
            arr.push(value);
            arrayIn(--size);
        })
    }
};
mergesort();