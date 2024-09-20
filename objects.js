//oobjects giveing values

let item={
    name:"phone",
    price:25000,
    quantity:1,
    categories:['electronics','phones'],
}
console.log(item)
console.log(item.categories[0])
console.log(item.price)
console.log(item.name)

  
//ssquare bracketnotation using objects
console.log(item["price"])
item["returnable"]="false"

let key="price"
item[key]=27500
item.key=28000//doesnot work
console.log(item)

item={
    name:"phone",
    quantity:1,
    price:30000,
    buy:function()
    {
        console.log("item added to the cart")
    },
    addTolist(){
        console.log("item added to the list")

    }
}
console.log(item.name)
console.log(item.price)
item.buy()
item.addTolist()
item.buy()
item.addTolist()
item.buy()
item.addTolist()
item.buy()
item.addTolist()



