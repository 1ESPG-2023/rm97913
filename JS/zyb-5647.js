const liElement = document.getElementsByTagName("li");

// for (let index = 0; index < liElement.length; index++) {
//     console.log(liElement[index].textContent)
    
// }
// console.log(liElement)

let nr1 = [1, 2, 3, 4, 5];
let nr2 = [6, 7, 8, 9, 10];
let nr3 = [nr1, nr2]

console.log(`Array-1 ${nr1}`);
console.log(`Array-2 ${nr2}`);
console.log(`Array-3 ${nr3}`);

//Listando um array! Técnica Especial
nr3.forEach((itemDoArray)=>{
    console.log(`Array-3 sendo listado ${nr3}`);
})
