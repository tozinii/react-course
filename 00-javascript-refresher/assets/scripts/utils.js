//export default "default exported text";
export const UTILS_FILE_LOADED = 'utils.js file loaded';
export let utilsRandomText = 'Random text';

//Default value and optional parameter
export function createGreetting(name, age = 27){
    return 'Hi ' + name + ' age = ' + age;
}

//Arrow functions(anonymous functions)
export default function () {
    console.log('this is an anonymous function')
};

() => {
    console.log('This is too an anonymous function')
}

//This is an arrow function with parameters
(name, age) => {
    return name + age;
}

//same function
function multiplyNumbers(number1, number2){
    return number1 * number2;
}
const arrowFuncMultiplyNumbers = (number1, number2) => number1 * number2;