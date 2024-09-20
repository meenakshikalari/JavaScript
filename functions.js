// print name 
function printName()
{
    console.log("this is meenkashi")
}
console.log("we have the data")
console.log("sir were teaching the javascript")
printName()
//
//print add two number and substract the number

function add(numone,numtwo)
{
    console.log(numone+numtwo)
     return numone+numtwo;
}
function substract(addednumbers)
{
console.log(50-addednumbers)
}
var result=add(13,25);
substract(result);
var result=add(24,12);
substract(result);

//to calculate simple interest on a particular principal amount ,rate with one year
function calculateSimpleInterest(principal,rate,time)
{
    return(principal*rate*time)/100;
}
//call the function
var principalamount=40000;
var rate=5;//5%
var time=1;
var si=calculateSimpleInterest(principalamount,rate,time);
console.log("simpleinterst:"+si);

//two function the first function returns the first name and second function returns the second nameaantd then third function print the both name same

function getfirstname()
{return "meenakshi"}
function getlastname()
{return "kalari"}
function fullname()
{
 var fistname=getfirstname()
    var lastname=getlastname()
    return fistname+""+lastname;
}
console.log(fullname());


// login and sign in page by using fuctions

var userdata=[]

function registerusers(uname,passworddata,emailid){
    var userdetails={
        username:uname,
        password:passworddata,
        email:emailid
    }
    userdata.push(userdetails);
}
function loginauth(uname,passworddata){
    var userauth=false;
    for(var i=0;i<userdata.length;i++){
        if(userdata[i].username==uname&&userdata[i].password==passworddata){
            userauth=true;
            console.log("user is authenticated")
            break;
        }
    }
    if(userauth==false){
        console.log("user not defined")
    }
}
registerusers("nishath","nishanth","mail@gmail.com")
registerusers("meenkashi","meena","meenakshi@gmail.com")
registerusers("sonu","test","mail@gmail.com")

loginauth("meenakshi","meenu")
loginauth("nishath","nishanth")