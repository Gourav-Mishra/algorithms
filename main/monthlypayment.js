var readline=require('readline');
var utility= require('../utility/algoutility');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function monthlypayment()
{
    read.question("Enter the Principle amount : ",function(principleamount){
        read.question("Enter the year : ",function(year){
            read.question("Enter the rate of interest :",function(rate){
                // var a=parseInt(principleamount);
                // var b=parseInt(year);
                // var c=parseInt(rate)
            utility.monthlypayment(principleamount,year,rate);
            read.close();
            });       
    });
        
});
}
monthlypayment();
