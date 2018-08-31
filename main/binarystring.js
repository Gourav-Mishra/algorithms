var readline=require('readline');
var utility= require('../utility/algoutility');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
var arr=[];
function binarystring()
{
    read.question("enter size",function(size){
    
        arrayIn(size);
    })
}
arrayIn =function(size){
    if( size==0){
        read.question("enter string to be searched " ,function(num){
            utility.binarystring(arr,num);
        });
    }
    else{
        read.question("enter a value: ",(value)=>{
            arr.push(value);
            arrayIn(--size);
        })
    }
};
binarystring();