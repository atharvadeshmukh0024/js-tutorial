// singelton

// object literals
const mySym =Symbol("key1")
const JsUser ={
    name:"Hitesh",
    "full_name":"atharva Deshmukh",
    email :"a@gmail.com",
    age:20,
    [mySym]:"mykey1",
    location:"jaipur",
    isLoggedIn: false ,
    lastloginDays :["Monday","Saturday"]
}

// console.log(JsUser.name) //Hitesh

// console.log(JsUser["name"]) //Hitesh
// console.log(JsUser["full_name"])  //atharva Deshmukh // this can only be called by this method not the . method

// console.log(JsUser[mySym]) //mykey1  // this can only be called by this method not the . method

// step to declare Symbol

// 1.const mySym =Symbol("key1")
// 2.[mySym]:"mykey1",
// 3.console.log(JsUser[mySym])

JsUser.email ="a1@gmail.com"

//Object.freeze(JsUser)

// {
//   name: 'Hitesh',
//   full_name: 'atharva Deshmukh',
//   email: 'a1@gmail.com',
//   age: 20,
//   location: 'jaipur',
//   isLoggedIn: false,
//   lastloginDays: [ 'Monday', 'Saturday' ],
//   [Symbol(key1)]: 'mykey1'
// }
// JsUser.email ="a1@gmail.com"
// console.log(JsUser)

JsUser.greeting =function(){
    console.log("Hello Js User");

}

// console.log(JsUser.greeting); //undefined
console.log(JsUser.greeting());  //Hello Js User

JsUser.greetingOne =function(){
    console.log(`Hello Js User,${this.name}');

}

console.log(JsUser.greetingOne());
