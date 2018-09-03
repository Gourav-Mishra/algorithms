var readline=require('readline');
var utility= require('../utility/algoutility');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function dayofweek()
{
    read.question("Enter the day : ",function(day){
        read.question("Enter the month : ",function(month){
            read.question("Enter the year :",function(year){
                var a=parseInt(day);
                var b=parseInt(month);
                var c=parseInt(year)
            utility.dayofweek(a,b,c);
            read.close();
            });       
    });
        
});
}
dayofweek();
