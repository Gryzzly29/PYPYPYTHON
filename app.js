// VARIABLES    

let nombre = 'Erick';
nombre = 'Adrian';

// function  Media(a, b) {
//     let resultado_uno;
//     resultado_uno = (a + b) / 2;
//     return resultado_uno;
// }   

// let miMedia = Media(10,20);

// console.log('La media es ' + miMedia);


let Media2 = (a, b) => {
    let resultado;
    resultado = (a + b) / 2;
    return resultado;
}   

console.log('La media es '+ Media2(10,5));

//  CONDICIONALES

if(2 > 3) {
    console.log("2 es mayor que 3");
} else if (5 > 7) {
    console.log("5 es mayor que 7");
}  else {
    console.log('No se cumplio ninguna condicion');
}





//BUCLE 

// for (let index = 0; index <= 10; index++) {
//     console.log(index);
// }

// let puntos = 0
// while(puntos <= 10) {
//     puntos++
//     console.log(puntos);
// }

//FUNCIONES

function saludo() {
    setTimeout(() => {
        console.log('preparando saludo ...')
    }, 1000)
    setTimeout(() => {
        console.log('Hola Erick...')
    }, 2000)
    setTimeout(() => {
        console.log('preparando Despedida ...')
    }, 3000)
    setTimeout(() => {
        console.log('Adios Erick...')
    }, 4000)
   
}

saludo();

let paises = ['Colombia', 'Mexico', 'Brasil', 'El salvador', ''];

for (let index= 0; index < paises.length; index++) {
    console.log(paises[index]);
}
