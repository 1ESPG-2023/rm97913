// for (let index = 0; index < liElement.length; index++) {
//     console.log(liElement[index].textContent)
    
// }
// console.log(liElement)


//Declaração arrays
// let nr1 = [1, 2, 3, 4, 5];
// let nr2 = [6, 7, 8, 9, 10];
//Espalhar o array com SPREAD [ ... ]
// let nr3 = [...nr1, ...nr2]

// console.log(`Array-1 ${nr1}`);
// console.log(`Array-2 ${nr2}`);
// console.log(`Array-3 ${nr3}`);

//Listando um array! Técnica Especial
// nr3.forEach((itemDoArray)=>{
//     console.log(`Array-3 sendo listado ${nr3}`);
// })


//Listando array com MAP
// nr3.map((numero, key)=>{
//     console.log(`${(key+1)} - Itens do array - ${numero}`);
    
// })


//Convertendo HTML Collection em Array de forma indireta
// const liElementHtml = document.getElementsByTagName("li");
// const liElementArray = [...liElementHtml]

// liElementArray.map((item, key)=>{
//     if(item.textContent == "Item-39"){
//     console.log(`${key+1} - ${item.textContent = "LOCALIZADO"}`)
//     }
// })


// function soma(p1, p2, p3){
//     nr1 = p1;
//     nr2 = p2;

//     return (parseInt(nr1) + parseInt(nr2) + parseInt(p3))
//     // console.log(`Resultado: ${parseInt(nr1) + parseInt(nr2) + parseInt(parametro)}`)
//     // console.log(`Este é o parâmetro que foi passado: ${parametro}`)
// }




// //ARROW FUNCTION
// const mudaCor = ()=>{

//     //FUNÇÂO SET TIME-OUT
//     setTimeout(alert("EXECUTOU"), 5000)

// }

// mudaCor();

function mudaCor(){

    let r = "";
    let g = "";
    let b = "";
    //random = gera numeros aleatórios entre 0 e 1
    //ceil, floor e round que arredondam o número para cima, para baixo ou aleatoriamente

    //Determinando para a váriavel r um valor entre 0 e 255
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    const cabecalho = document.querySelector(".cabecalho");
    const central = document.querySelector(".central")

    // cabecalho.setAttribute("style", `background-color:rgb(${r},${g},${b})`);
    central.setAttribute("style", `background-color:rgb(${r},${g},${b})`);

    tmp = setTimeout(mudaCor, 500);

}

mudaCor();


//FUNÇÃO ALTERA BANNER

function alteraBanner(){
    
    const img1 = document.querySelector(".l-e > img")
    const img2 = document.querySelector(".l-d > img")
    
    
    let nr = Math.ceil(Math.random() *3);
    let caminho = `./img/banner-lateral-${nr}.png`;
    img1.src = caminho;
    

    nr = Math.ceil(Math.random() *3);
    caminho = `./img/banner-lateral-${nr}.png`;
    img2.src = caminho;

    setTimeout(alteraBanner, 500);


}

alteraBanner();