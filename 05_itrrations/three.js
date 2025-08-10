//for of = are array specific loop      
//  ["","",""]
// obj in array = [{}{}{}]

const arr =[1,2,3,4,5]

// for (const element of object) {
    
// } object here state that - kis cheez par lagana hai

// for (const num of arr) {
//     console.log(num);
    
// }

// const greeting ="Hello World!"
// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`)
    
// }

// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is  
// Each char is W
// Each char is o
// Each char is r
// Each char is l
// Each char is d
// Each char is !

//Maps
// the map object holds two-value pairs and remembers the orignal insertion order of the keys
//no duplicate values
const map =new Map()
map.set('IN',"India")
map.set('USA',"unites State of America")
map.set('Fr',"France")

console.log(map);

// Map(3) {
//   'IN' => 'India',
//   'USA' => 'unites State of America',
//   'Fr' => 'France'
// }

// for (const key of map) {
//     console.log(key)
    
// }

// [ 'IN', 'India' ]
// [ 'USA', 'unites State of America' ]
// [ 'Fr', 'France' ]

// for (const [key,value] of map) {
//     console.log(key,value)
    
// }

// IN India
// USA unites State of America
// Fr France

const myobj ={
    'game1':"NFS",
    'game2':"spiderman"
}

// for (const [key,value] of myobj) {
//     console.log(key,value)
    
// }

//Error: myobj is not iterable
