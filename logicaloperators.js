//&&(and) or(||) operatores

var numone=12;
if(numone%2&&numone%5>=0)
{
    console.log("true");
}
else{
   console.log("false");
}
//or (||)
var num=125
if(num%2||num%5<=0)
    {
        console.log("true")
    }
    else{
        console.log("false")
    }
    //two ormore conditions
    var number=888
    if(number%2==0)
        {
            console.log("divisiable by 2");

        }
        else if (number%3==0)
            {
            console.log("divisable by 3");
        }
        else if(number%5==0)
            {
                console,log("divisable by 5");
            }
            else
            {
                console.log("not divisable by 2 3 5")
            }
  //given number is odd or even          
  var valnum=10
  if(valnum%2==0)
    {
        console.log("even");
    }
    else{
        console.log("odd");
    }

    //age of childern lees thsn or equal to 5 or 8 or 10 or 12
    var age=6
    if(age<=5)
        {
            console.log("infant");
        }
        else if(age>5&&age<12)
            {
                console.log("children");
            }
//loops --- print all the even numbers and odd numbers from 1 to 15


for( let i=2 ; i<=15;i++)
    {
        if(i%2==0)
            {
                console.log(i+"even number");
            }
            else{
                console.log(i+"odd number");
            }
    }

   // function printEvenAndOdd(n) {
     //   for (let i = 1; i <= n; i++) {
       //     if (i % 2 === 0) {
         //       console.log(`Even: ${i}`);
           // } else {
             //   console.log(`Odd: ${i}`);
           // }
        //}
    //}
    //print the given number is prime number or not
    let givennum=17
    if(givennum%2)
        {
            console.log(givennum+"is prime number");
        }
        else{
            console.log(givennum+"is not prime number");
        }

        //print prime number from 1 to100
        var n=100
        for(i=1;i<=n;i++)
            {
                if(n%i==1)
                    {console.log(i+"prime");

                    }
        }
        console.log(i+"not prime");
//