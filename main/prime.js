var readline=require('readline');
var utility= require('../utility/algoutility');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function prime()
{
    read.question("Enter the minNumber ",function(minNumber){
        read.question("Enter the maxNumber: ",function(maxNumber){
        utility.prime(minNumber,maxNumber)
        read.close();
    });
        
});
}
prime();
