var readline=require('readline');
var utility= require('../utility/algoutility');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function primeannagram()
{
    read.question("Enter the minNumber ",function(minNumber){
        read.question("Enter the maxNumber: ",function(maxNumber){
        utility.primeannagram(minNumber,maxNumber)
        read.close();
    });
        
});
}
primeannagram();
