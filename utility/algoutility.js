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

    primepalindrome: function(maxNumber)
    {
        console.log("Prime numbers which are pallindrome in range  0  to " + maxNumber + " are: ")
        for(var x=1;x<maxNumber;x++ )
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
    binaryint:function(arr,value)
    {
        arr=arr.sort(arr);
        console.log("Sorted Array"+arr);
        var first=0,last=(arr.length-1);
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
            console.log("Element not Present");
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
                var f=(Math.floor(temp+(9/5))+32);
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

    }





}