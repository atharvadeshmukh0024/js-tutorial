// function sayMyname(){
//     console.log("atharva")
// }

//sayMyname() //atharva

// function addNo(num1,num2){
//     console.log(num1+num2);
// }

// addNo(3,4) //7
// addNo(3,'4') //34
// addNo(3,"a") //3a

// const result =addNo(3,8) //11
// console.log(result) //undefined

// function addNo(num1,num2){
//     let result =num1 +num2
//     return result

// }
// const result =addNo(11,15)
// console.log(result) //26

// function addNo(num1,num2){
//     let result =num1 +num2
//     console.log("atharva")
//     return result

// }
// const result =addNo(11,15)
// console.log(result) //atharva
// //26

// function addNo(num1,num2){
//     let result =num1 +num2
//     return result
//     console.log("atharva") //will not print as it is after the return print statement
    

// }
// const result =addNo(11,15)
// console.log(result) //26


//**********ways to take argument **********

function loginUserName(username){
    if(username == undefined){
        console.log("enter a user name");
        return
    }
    return `${username}  just logged in`
}

//console.log(loginUserName('atharva')) //atharva  just logged in

//console.log(loginUserName()) // if not passed argument then gives 'undefined'
//undefined  just logged in



// REST opreator  ... name

function calcultePrice(v1,v2,...num1){
    return num1
}
//console.log(calcultePrice(10,20,30)) //[ 10, 20, 30 ]  // it returns more than one value when passed togeteher

// console.log(calcultePrice(10,20,40,30)) //[ 40, 30 ]

const user ={
    username :"Atharva",
    price:100

}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user) //Username is Atharva and price is 100

//we can directly pass buy folowing way

handleObject({
    username :'Sunyy',
    price:9999
})

//Username is Sunyy and price is 9999
const myArray =[1,2,3,4]

function returnSeconValue(getArray){
    return getArray[1]
}

console.log(returnSeconValue(myArray)) //2


