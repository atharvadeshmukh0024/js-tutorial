
//array.reduce  has two things in it current value and accumlator  
// current value is anything we pass  
//accumlator contain the value like if we by initalValue as 0 it is in accumlator asnd as it get updated it get stored in accum....

const myNums =[1,2,3]

// const myTotal =myNums.reduce(function (acc,currval){
//     console.log(`acc:${acc} and currval :${currval}`);
// //     acc:0 and currval :1
// // acc:1 and currval :2
// // acc:3 and currval :3
    
//     return acc +currval
// },0) // 0 is acc value inital 

// console.log(myTotal) //6

// const  myTotal =myNums.reduce((acc,curr) => acc +curr ,0)

// console.log(myTotal)  //6  - another way doing same thing 

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

 const pay =shoppingCart.reduce((acc,item) => acc + item.price ,0)

//  console.log(pay) //22996