var fs=require('fs');
var readline=require('readline')
var util=require('../utility/algoutility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var data =fs.readFileSync('input.txt');
data=data.toString().toLowerCase().split(',');

function binaryFileSys()
{
    read.question("Enter the Element to be Searched from the text file: ",function(Element){
        util.binaryFileSys(data,Element);
        read.close();
    })
}
binaryFileSys();