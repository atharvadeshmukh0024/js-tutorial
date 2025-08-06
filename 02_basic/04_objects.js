//const user =new Object() // singelton obj  //op -{}
//console.log(user)

const user1 ={} // non singelton obj
// op {}

user1.id ="1234abc"
user1.name ="Sunny"
user1.isLoggedIn =false

//console.log(user1) //{ id: '1234abc', name: 'Sunny', isLoggedIn: false }

const regularUSer ={
    email: "some@gmail.com",
    fullname :{
        userfullname :{
            firstname:"hitesh",
            lastname:"chudary"
        }

    }
}

// console.log(regularUSer.fullname) //{ userfullname: { firstname: 'hitesh', lastname: 'chudary' } }

// console.log(regularUSer.fullname.userfullname) //{ firstname: 'hitesh', lastname: 'chudary' }

// console.log(regularUSer.fullname?.userfullname.firstname); //hitesh

console.log(regularUSer.fullname?.userfullname.firstname);

//? =It safely accesses deeply nested properties without throwing an error if a property along the chain is undefined or null.

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}

// const obj3 ={obj1,obj2} { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj3 =Object.assign(obj1,obj2) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj3)

const obj4 =Object.assign({},obj1,obj2) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// assign is static method copies enumerable own prioperties from one or more source obj to target obj
console.log(obj4)

const obj5 ={...obj1,...obj2}

console.log(obj5) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
