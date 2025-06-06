//UNION
// const conjuntoUno = new Set([1,2,3,4,5]);
// const conjuntoDno = new Set([4,5,6,7,8]);

// const spread = (param) => console.log(param);
// const array = [1,2,3,4,5];
// spread(array);


const reducirArray = (arrayAreducir) => {
    const arraySum = arrayAreducir.reduce((accumulator, currentValue) => accumulator + currentValue)
    console.log(arraySum)
}

reducirArray([1,2,3,4,5])
