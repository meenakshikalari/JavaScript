//settimeout function
// **by using in terminal node dom.js we have type for everything nad for any file


setTimeout(function(){
    console.log("meenakshi")
},2000)


// set interval
var count=0;
var usertimer = setInterval(function()
{
    console.log("hey your payment is pending !!");
    count++;
    if(count==4){
        clearInterval(usertimer)
    }
},4000)

//hoisting
function bank(interestrate){
    return function(principal){
        console.log(interestrate*principal)


    }
}
var vipcus=new bank(7)
var normal=new bank(10)
vipcus(10000)
normal(100000)

// excutes the data with time limit 
setTimeout(function App(){
                console.log("frontend..!")},3000
            )
                    setTimeout(()=>{
                console.log("fullstack developer in frontend..!")
            },4000)
           //calling a function without time limt
            function app1()
            {
                console.log("frontend..!")
    
            }
            app1();

            
    