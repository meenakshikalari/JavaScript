//sample promise program


// let promise =new Promise((resolve , reject)=>
//     {
//    setTimeout(function()
//    { 
//     resolve("meenakshi")
// },4000)

// });
// let promisetwo= new Promise((resolve , reject)=>
// {
//     setTimeout(function(){
//         reject("22")
//     },4000)
// });

// promisetwo.then((resp)=>{
//     console.log(resp)
// },
// (err)=>{
//     console.log(err)
// })
// promise.then((resp)=>{
//     console.log(resp)
// },
// (err)=>{
//     console.log(err)
// })




//prints my name  4 times interval of 10 seconds
 

  var count=0;
var usertimer = setInterval(function()
{
    console.log("meenakshi!");
    count++;
    if(count==4){
        clearInterval(usertimer)
    }
},4000)


//PRINTS TIMER 10 to 0 after 20 secondstimer
for(var i=10;i>=0;i--)
{
    print(i);

}
function print(i){
    setTimeout(function(){
        console.log(i)
    },20000);
}



//taking 3 promisese

let pone = new Promise((resolve,reject)=>
{
    setTimeout(function()
       { 
        resolve("meenakshi")
    },1000)
});
let ptwo=new Promise((resolve,reject)=>
{
    setTimeout(function()
    {
    resolve("1777")},9000)
});
let pthree = new Promise((resolve , reject)=>
{
    setTimeout(function()
    {
    reject("kadapa")
    },10000)
});
pthree.then((resp)=>
{
    console.log(resp)
},
(err)=>
    {
        console.log(err)
    })
    ptwo.then((resp)=>
        {
            console.log(resp)
        },
        (err)=>{
            console.log(err)
        
        })
 pone.then((resp)=>
        {
            console.log(resp)
        },
        (err)=>{
            console.log(err)
        })





//to print ur name id address
// let promiseOne = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("name")
//     },2000)
// })

// let promiseTwo = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject("28");
//     },4000)  
// })

// let promiseThree = new Promise((resolve, reject)=>{
    
// })

// promiseOne.then((data)=>{
//     console.log(data)
// })

// promiseTwo.then((data)=>{
//     console.log(data)
// }, (err)=>{
//     console.log(err)
// })