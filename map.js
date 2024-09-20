var arrayData = [{ 
    name: "nishant",
    age: 29,
    gender: "male",
    role: "instructor",
    address : "Bangalore"
},
{
    name: "aditya",
    age: 22,
    gender: "male",
    role: "student"
},
{
    name: "kirti",
    age: 21,
    gender: "female",
    role: "student"
}];

for ( var i=0; i<=arrayData.length ; i++){
    console.log(i) //index
    console.log(arrayData[i]) //data
};
var testsData = arrayData.map((data, index)=>{
    if( data.role == "instructor"){
         data.address = "Bangalore";
         return data;
    }
    return data;
   

})


var studentData = arrayData.filter((data, index)=>{
    if( data.role == "student"){
         return data;
    }
})

var instructorData = arrayData.filter((data, index)=>{
    if( data.role == "instructor"){
         return data;
    }
})

console.log(instructorData)
console.log(studentData)


// arrayData.map((data, index)=>{
//    // console.log(data.name + data.gender + data.role) ;
    
//     <tr>
//         <td>{data.name}</td>
//         <td>{data.gender}</td>

//         <td>{data.role}</td>
// </tr>
// })

