// -------- 1----------

// const hola = ()=>{
//     console.log('Hello World')
// }
// hola()

// ---------- 2---------------

// const cuadradoNum = (x) =>{
//     return x**2
// }

// console.log(cuadradoNum(5))

// -------------3 ---------------

// const func = (nom)=>{
//     console.log(`Hi, ${nom}!`)
// }

// func('Millard')

// ------------4 ---------------------

// const func = (a,b) => {
//     return a*b
// }

// console.log(func(10,20))

// ------------5-----------------

// const func = (c) =>{
//     const f = (c*9/5) + 32
//     return f
// }

// console.log(func(30))

// ----------6------------------

// const func = (string) => {
//     let count = 0
//     for (i = 0; i < string.length; i++) {
//         if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u'){
//             count += 1
//         }
//     }
//     return `La palabra "${string} tiene ${count} vocales`
// }

// console.log(func('Millardaaa'))

// --------------7-----------------

// const func = (min,max) => {
//     return Math.floor(Math.random() * (max - min +1) + min);
// }

// console.log(func(0,10))

// ---------------8------------------

const func = (x) => {
    let array = []
    for(i = 0; i < x.length; i++){
        if ( x[i]%2 === 0){
            array.push(x[i])
        }
    }
    return array
}

console.log(func([1,2,3,4,5,6,7,8,9,10]))

// ---------------9-----------------
