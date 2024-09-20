const constants=[1,2 ,3, 5,6 ,7 ,8, 9,12,34,62,74];
function shufflearray(array)
{
    for(let i=array.length-1;i>0;i--)
{
    const j=Math.floor(Math.random()*(i+1));
    [array[i],array[j]]=[array[j],array[i]];
}
}
shufflearray(constants);
console.log("unsorted constants:",constants);
