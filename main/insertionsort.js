var readline=require('readline');
var utility= require('../utility/algoutility');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
var arr=[];
function insertionSort()
{
    read.question("enter size",function(size){
    
        arrayIn(size);
    })
}
arrayIn =function(size){
    if( size==0){
        utility.insertionSort(arr)
        console.log("The sorted array: "+arr)
    }
    else{
        read.question("enter a value: ",(value)=>{
            arr.push(value);
            arrayIn(--size);
        })
    }
};
insertionSort();