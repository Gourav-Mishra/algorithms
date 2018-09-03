/******************************************************************************
 *  Execution       :   1. default node         
 *                      
 *  Purpose         :  LEARNING Algorithms programs
 * 
 *  @description    
 * 
 *  @file           : utility.js
 *  @overview       : 
 *  @module         : utility
 *  @author         : BridgeLabz <GOURAV MISHRA>
 *  @version        : 1.0
 *  @since          : 20-08-2018
 *
 ******************************************************************************/

module.exports={
    anagram:function(string1,string2)
    {
        var arr1=[],arr2=[];
        str1=string1.toUpperCase().split('');
        str2=string2.toUpperCase().split('');
        arr1=str1.sort();
        console.log(arr1)
        arr2=str2.sort();
        console.log(arr2);
        for(var i=0,j=0;i<arr1.length,j<arr2.length;i++,j++)
        {
            //for(var j=0;j<arr2.length;j++)
            
                if(arr1[i]==arr2[j])
                {
                    console.log("yes the 2 strings are ANAGRAMS.")
                    break;
                }
                else
                {
                    console.log("sorry the two strings are `NOT`  ANAGRAMS");
                    break;
                    
                }
            
        }


    },
prime: function(minNumber,maxNumber)
    {
        if(minNumber>0 && maxNumber<1000)
        {
        var a=[];
        console.log("The prime number between "+minNumber+" and "+maxNumber+" are :")
        for(var i=minNumber;i<=maxNumber;i++)
        {
            currentNumber=i;
            var count=0;
            for(var j=1;j<=currentNumber;j++)
            {
                if(currentNumber%j==0)
                {
                    count++;
                }
            }
            if(count==2)
            {
                
                a.push(currentNumber)
            
                
            }

        }
        console.log(a)
    }
    else{
        console.log("plz Enter numbers between 0 and 1000")
    }
    },


    primeannagram:function(minNumber,maxNumber )
    {
        var arr=[];
        
        for(var i=minNumber;i<=maxNumber;i++)
        {
            currentNumber=i;
            var count=0;
            for(var j=1;j<=currentNumber;j++)
            {
                if(currentNumber%j==0)
                {
                    count++;
                }
            }
            if(count==2)
            {
                arr.push(currentNumber)   
            }
        }
        var arr1=[];
        console.log("The Prime Numbers which are Anagram between "+minNumber+" and "+maxNumber+" are : ");

        for(var i=0;i<arr.length-1;i++)
        {
            for(var j=i+1;j<arr.length;j++ )
            {
                var s1=''+parseInt(arr[i]);
                var s2=''+parseInt(arr[j]);
                if((((s1.split('')).sort()).join())===(((s2.split('')).sort()).join())){

                    console.log(s1 +" and "+ s2 );
                   // arr1.push(parseInt(s1));
                }
            }
        }

    },

    primepalindrome: function(minNumber,maxNumber)
    {
        console.log("Prime numbers which are pallindrome in range  0  to " + maxNumber + " are: ")
        for(var x=minNumber;x<maxNumber;x++ )
        {
        var n=x;
        var a=n;
        var m=0;
        while(n>0)
        {
            m=(Math.floor(m*10)+(n%10));
            n=(Math.floor(n/10));
        }
        
        if(a==m)
        {
                var currentNumber=m;
                var count=0;
                for(var j=1;j<=currentNumber;j++)
                {
                    if(currentNumber%j==0)
                    {
                        count++;
                    }
                }
                if(count==2)
                {
        
                  console.log(currentNumber);
                    
                }
        
            }
        }
        
        
    },

   getCurrentTime: function()
   {
    var a=new Date();
    var n=a.getTime();
    return n;
    

    },

    getElapsedTime: function(startTime,stopTime)
    {
        var e=(stopTime-startTime)/1000;

        return e;
    },

    binaryint:function(arr,value)
    {
        arr=arr.sort(arr);
        console.log("Sorted Array: "+arr);
        var first=0;
        last=(arr.length-1);
        var middle=Math.floor((last+first)/2);
        while(arr[middle]!=value && first<last)
        {
            
            if(value< arr[middle])
            {
                last=middle-1;

            }
            else if(value>arr[middle])
            {
                first=middle+1;
            }
           middle=(Math.floor(first+last)/2);

        }
        if(arr[middle]!=value)
        {
            console.log("Element not Present ");
        }else{
            console.log("the number found at "+ middle+ " index value");
        }

    },
    
    binarystring:function(arr,string)
    {
        if((string>'a'&& string<='z')||(string>='A' && string<='Z'))
        {
        arr=arr.sort(arr);
        console.log("Sorted Array : "+arr);
        var first=0,last=(arr.length-1);
        var middle=Math.floor((last+first)/2);
        while(arr[middle]!=string && first<last)
        {
            
            if(string< arr[middle])
            {
                last=middle-1;

            }
            else if(string>arr[middle])
            {
                first=middle+1;
            }
           middle=(Math.floor(first+last)/2);

        }
        if(arr[middle]!=string)
        {
            console.log("Element not Present");
        }else{
            console.log("The string found at '"+ middle+ "' index value!!");
        }

    }
},
insertionSort:function(arr)
{
    for(var i=1;i<arr.length;i++)
    {
        var key=arr[i];
        var j=i-1;
        while(j>-1 && arr[j]>key)
        {
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key;
    }
},

bubblesort: function(arr)
    {
        for(var i=0; i<arr.length-1; i++)
        {
            for(var j=0; j<arr.length-1-i; j++)
            {
                if(arr[j]>arr[j+1])
                {
                    var temp=parseInt(arr[j]);
                    arr[j]=parseInt(arr[j+1]);
                    arr[j+1]=temp;
                }
            }
        }
    },

    mergesort: function(arr)
    {
        if(arr.length==1)
        {
            return;
        }
        var mid=Math.floor((arr.length)/2);
        var arr1=[];
        arr1.length=mid;
        var arr2=[];
        arr2.length=arr.length-mid;
        var i;
        for(i=0; i<arr1.length; i++)
        {
            arr1[i]=arr[i];
        }
        for(var j=0; j<arr2.length; j++, i++)
        {
            arr2[j]=arr[i];
        }
        this.mergesort(arr1);
        this.mergesort(arr2);
        merger(arr1,arr2,arr);
        function merger(a,b,c)
        {
            var i=0,j=0,k=0;
            while(i<a.length && j<b.length)
            {
                if(a[i]<b[j])
                {
                    c[k++]=a[i++];
                }
                else{
                    c[k++]=b[j++];
                }
            }
            while(i<a.length)
            {
                c[k++]=a[i++];
            }
            while(j<b.length)
            {
                c[k++]=b[j++];
            }
        }
    },

    binaryFileSys: function(arr,value)
    {
        arr=arr.sort();
        console.log("Sorted array: ");
        console.log(arr);
        var first  = 0,
        last   = arr.length - 1,
        middle = Math.floor((last + first)/2);

        while(arr[middle]!= value && first < last)
        {
            if (value < arr[middle])
            {
                last = middle - 1;
            } 
            else if (value > arr[middle])
            {
                first = middle + 1;
            }
            middle = Math.floor((last + first)/2);
        }
        if(arr[middle]!=value)
        {
            console.log("Element not found!!!");
        }else{
            console.log("Element searched found at "+middle+ "th position");
        }
    },
    temperature: function(read,n)
    {   
        switch(n)
        {
            case '1': 
            read.question("Enter Temperature in celcius: ", (temp)=>{
                var f=(Math.floor(temp*(9/5))+32);
                console.log(temp+" Celcius in Ferenhite is :"+f);
                read.close();

             })
             break;
             case '2':
             read.question("Enter Temperature in Ferhenite :", (temp)=>{
                var c=(Math.floor((temp-32)*(5/9)))
                console.log(temp+" Ferenhite in Celcius is :"+c)
                read.close();
             })
        }

    },
    dayofweek:function(day,month,year)
    {
        var x,y,m,d;
        
        y=((year-((14-month)/12)));
        x=(y+(y/4)-(y/100)+(y/400));
        m=(month+(12*((14-month)/12))-2);
        d=Math.floor(((day+x+((31*m)/12))%7));
        console.log(d);
        switch(d)
        {
            case 0 :console.log("The day on "+day+"/"+month+"/"+year+" was :- sunday");
            break;
            case 1 :console.log("The day on "+day+"/"+month+"/"+year+" was :- Monday");
            break;
            case 2 :console.log("The day on "+day+"/"+month+"/"+year+" was :- Tuesday");
            break;
            case 3 :console.log("The day on "+day+"/"+month+"/"+year+" was :- Wednesday");
            break;
            case 4 :console.log("The day on "+day+"/"+month+"/"+year+" was :- Thursday");
            break;
            case 5:console.log("The day on "+day+"/"+month+"/"+year+" was :-  Friday");
            break;
            case 6 :console.log("The day on "+day+"/"+month+"/"+year+" was :- Saturday");
            break;
            
        
        }
    },
    monthlypayment: function(principleamount,year,rate)
    {
        var payment,n,r,x;
        n=12*year;
        r=rate/(12*100);
        x=1+r;
      
        payment=((principleamount*r)/(1-(Math.pow(x,(-n)))))
        console.log(payment);

    },


    decimaltobinary:function(number)
    {
        var r;
        var x="";
        while(number>0)
        {
                r=Math.floor(number%2);
                x=r+x;
                number=Math.floor(number/2)
        }
            console.log("The Binary Representation of "+number+" is : "+x)
    },
    vendingmachine: function(amount)
    {
        var amount,count=0;
        a=1;
        switch(a)
        {
       case 1:  if(amount/1000>=1)
        {
            n= Math.floor(amount/1000);
            console.log("The number of $ 1000 notes: "+n)
            amount=amount-(n*1000);
            count+=n;
           

        }
       case 2: if(amount/500>=1)
        {
          var p= Math.floor (amount/500);
            console.log("The Number of $ 500 notes : "+p)
            amount=amount-(p*500);
            count+=p;


        }
        case 3: if(amount/100>=1)
        {
            var q=Math.floor(amount/100);
            console.log("The number of $ 100 notes : "+q)
            amount=amount-(q*100);
            count+=q;
           
        
        }
        case 4:if(amount/50>=1)
        {
            var r=Math.floor(amount/50);
            console.log("The number of $ 50 Notes are : "+r)
            amount=amount-(r*50);
            count+=r;

        }
        case 5: if(amount/10>=1)
        {
            var s=Math.floor(amount/10);
            console.log("The number of $ 10 Notes are : "+s)
            amount=amount-(s*10);
            count+=s;


        }
        case 6: if (amount/5>=1)
        {
            var t=Math.floor(amount/5);
            console.log("The number of $ 5 Notes are : "+t)
            amount=amount-(t*5)
            count+=t;


        }
        case 7: if (amount/2>=1)
        {
            var u=Math.floor(amount/2)
            console.log("The Number of $ 2 notes  are : "+u)
            amount=amount-(u*2)
            count+=u;

        }
        case 8: if(amount/1>=1)
        {
            var v=Math.floor(amount/1)
            console.log("The number of $1 notes are : "+ v)
            count+=v;

        }
        
    }
            count=parseInt(count);
           console.log("The Minimum No. of notes to  Return the change by Machine is : "+count);
    },


    binary: function(read,number)
    {
        var a, sum=0;
        var arr=[], arr1=[],arr2=[];
        var bin=[];
        while(number>0)
        {
            a=((number%2));
            arr.unshift(a);
            number=(Math.floor(number/2));
        }
        var t=(Number(arr.length));
        for(var i=0; i<(8-t); i++)
        {
            arr.unshift(0);
        }
        str=arr.toString();
        arr1=[];
        arr1=str.split(',');
        
        var m=parseInt(Math.floor(arr1.length/2));
        var mid1=[], mid2=[];
        mid1.length=m;
        mid2.length=parseInt(arr1.length-m);
        for(var i=0; i<m; i++)
        {
            mid1.push(arr1[i]);
        }
        for(var j=m; j<arr1.length; j++)
        {
            mid2.push(arr1[j]);
        }
        str1=mid1.join('');
        str2=mid2.join('');
        var mid3=[], mid4=[];
        mid3.push(str1);
        console.log("Nibble 1: "+mid3);
        mid4.push(str2);
        console.log("Nibble 2: "+mid4);
        for(var c=0,d=0; c<mid3.length, d<mid4.length; c++, d++)
        {
            var temp=mid3[c];
            mid3[c]=mid4[d];
            mid4[d]=temp;
        }
        var string=mid3+mid4;
        console.log("Binary formed after swapping the nibbles= "+ string);
        array1=string.split('');
        
        
            var count=0;
            for(var i=array1.length-1; i>=0; i--)
            {
                sum=sum+(array1[i]*(Math.pow(2,(count))));
                count++;
            }
            console.log("Decimal Equivalent after swapping the nibbles= "+sum);
            this.isPower(sum);
            read.close();
    },


    power: function(val)
    {
        var a=1;
        for(var i=0; i<val; i++)
        {
            a=a*2;
        }
        return a;
    },

    isPower: function(val)
    {
        var temp=val;
        var count=0;
        if(val%2==0)
        {
            while(val%2==0)
            {
                count++;
                val/=2;
            }
            if(val==1)
            {
                console.log('\nit is a power of 2: 2^ '+count+"= "+temp);
            }
            else{
                console.log("Not a power of 2");
            }
        }else{
            console.log("it is not a power of 2");
        }
    },

    squareroot: function(c)
    {
        var t=c;
        const epsilon=1e-15;
        while(Math.abs(t-(c/t))>(epsilon*t))
        {
                t=((c/t)+t)/2; 
        }
       // var w=Math.floor(t);
        console.log("The Square root of "+c+" is:  "+t)

    },
    findNumber: function(readlinesync,value)
    {
        var arr=[], arr1=[];
        for(var i=0; i<value; i++)
        {
            arr.push(i);
        }
        var first=0, last=arr.length-1;
        while(first <=last)
        {
            var middle= Math.floor((first+last)/2);
            value=readlinesync.question(`\n\nis ${arr[middle]} is the element? \n if yes, press 1, else press 0: `);
            if(value=='0')
            {
                arr1.push(arr[middle]);
                var val2=readlinesync.question(`\n\n if your value >${arr[middle]} \n if yes press 1, else press 0: `);
                if(val2=='1')
                {
                    first=middle+1;
                }else{
                    last=middle-1;
                }
            }else if(value=='1'){
                console.log("Number is Found ");
                process.exit();
            }
        }
    }
}