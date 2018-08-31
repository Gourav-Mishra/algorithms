var readline=require('readline');
var utility= require('../utility/algoutility');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function anagram()
{
    read.question("Enter the 1 st string :",function(string1){
        read.question("Enter the 2 nd string :",function(string2){
        utility.anagram(string1,string2)
        read.close();
    });
        
});
}
anagram();
