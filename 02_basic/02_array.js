const marvel_heros =["thor","ironman","spiderman"]

const dc_heros =["superman","batman","flash"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros)  //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]

// console.log(marvel_heros[3][1]) //batman

 //const allhero =marvel_heros.concat(marvel_heros) //[ 'thor', 'ironman', 'spiderman', 'thor', 'ironman', 'spiderman' ]

//console.log(allhero)

const all_new_heros =[...marvel_heros,...dc_heros]

console.log(all_new_heros) //[ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

const another_arr =[1,2,3,[4,5,6],7,[6,7,[3,4]]]

const real_another_array = another_arr.flat(Infinity)

console.log(real_another_array)



console.log(Array.isArray("Hitesh")) //false
console.log(Array.from("Hitesh")) //[ 'H', 'i', 't', 'e', 's', 'h' ]

console.log(Array.from({name:"Hitesh"})) //[]

let score1 =100
let score2 =200
let score3 =400
// convert this to array
console.log(Array.of(score1,score2,score3)) //[ 100, 200, 400 ]