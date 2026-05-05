const numbers = [1, 2, 3, 4 , 5, 6];
const numbersUniq = [1,1,1,1,1,1,2,1,1,1];

//Haga una función que elimine el primer elemento del arreglo.
const deleteFirstElement = (array) => array.shift();
deleteFirstElement(numbers);
console.log(numbers);

//Haga una función que solo reciba arreglos con más de 5 elementos y luego elimine los últimos 3.
// En caso de recibir un arreglo de menos de 5 elementos, mostrar en pantalla un mensaje de error.
function deleteLastTreeElements(array)
{
    if (array.length > 5)
    {
        array.splice(-3);
        return array;
    }
    else
    {
        console.log("El arreglo no tiene más de 5 elementos");
        return;
    }
}
console.log(deleteLastTreeElements(numbers));

//Haga una función que reciba un arreglo y un número. Tenemos que sumarle dicho número a cada elemento del arreglo y
// devolver el arreglo modificado.
const sumANumerInArray = (array, number) => array.map(element => element + number);
console.log(sumANumerInArray(numbers, 1));

//Haga una función que reciba un número y devuelva un arreglo que tenga el tamaño del número recibido.
const createArrayWithNumbers = (number) => Array.from({length: number}, (_, i) => i + 1);
console.log(createArrayWithNumbers(10));

//Hay un arreglo con varios números donde todos son iguales excepto uno.
// Haga una función que encuentre qué número es el distinto.
function searchDifferentElement(array)
{
    return array.find(num => array.indexOf(num) === array.lastIndexOf(num));
}
console.log(searchDifferentElement(numbersUniq));

//Dado un arreglo de números enteros, encuentre y devuelva el valor de la menor suma posible entre ellos.
function minSum(array)
{
    const sorted = array.toSorted();
    return sorted[0] + sorted[1];
}
console.log(minSum([7,4,2,3]));

//Dado un arreglo de números enteros, encuentre el mayor producto posible entre dos números adyacentes y
// devuelva el valor de dicho producto.
function maxAdjacentElementsProduct (array)
{
    let maxElement = array [0] * array [1];
    for (let i = 0; i < array.length - 1; i++)
    {
        const element = array[i] * array[i + 1];
        if (element > maxElement)
        {
            maxElement = element;
        }
    }
    return maxElement;
}
console.log(maxAdjacentElementsProduct([9, 5, 10, 2, 24, -1]));

//Tenemos un grupo de ovejas amenazadas por un lobo y necesitamos saber a cuál se está por comer.
//Consideramos que tenemos a las ovejas y al lobo en un arreglo y que en ese mismo consideramos al último elemento como el primero.
//Consideración: El lobo solo puede comer a la oveja que tiene a su derecha.
function warnTheSheep(array) {
    const reversedArray = array.reverse();
    const wolfPosition = reversedArray.indexOf("wolf");

    if (wolfPosition === 0) {
        return "No sigas comiendo ovejas!";
    } else {
        return `Hey! Oveja numero ${wolfPosition}! El lobo esta cerca!`;
    }
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf"]));
console.log(warnTheSheep(["sheep", "wolf" , "sheep", "sheep", "sheep"]));
