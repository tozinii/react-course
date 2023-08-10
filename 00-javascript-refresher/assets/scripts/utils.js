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


//Objects
const user = {
    name: 'Iker',
    age: '27',
    greet(userName) {
        console.log('Hi, ' + userName + ' you are ' + this.age + ' years old!!');
    }
};

console.log(user);
console.log(user.name);
user.greet(user.name);

//Define object via class
class User {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    
    greet(userName) {
        console.log('Hi, ' + userName + ' you are ' + this.age + ' years old!!');
    }

}
const user1 = new User('Imanol', 35);
console.log(user1);

//Arrays

const hobbies = ["golf", "football", "mountain bike"];
console.log(hobbies[0]);
hobbies.push("padel");
console.log(hobbies[3]);

console.log(hobbies.findIndex((item) => item === "padel"));
console.log(hobbies.map((item) => item + '!'));
console.log(hobbies.map((item) => ({text: item})));

//Desctructuring arrays an objects
//Arrays
const [firstName, lastName] = ['Iker', 'Apaolaza'];
console.log(firstName);
console.log(lastName);

//Objects
//name is referenced to alias 'rName' and same with age
const {name: rName, age: rAge} = {
    name: 'Ricardo',
    age: 27
};
console.log(rName);
console.log(rAge);

//Spread operator
const hobbies1 = ['hobbie1', 'hobbie2'];
const hobbies2 = ['hobbie3'];
const hobbies3 = ['hobbie4', 'hobbie5'];
const userAdmin = {
    name: 'Ricardo',
    age: 27
};

//The three dots merge all items of the arrays given into one array
const mergedHobbies =  [...hobbies1, ...hobbies2, ...hobbies3];
console.log(mergedHobbies);

//Same in objects
const extendedUser = {
    isAdmin: true,
    ...userAdmin
};
console.log(extendedUser);

//Functions as values
setTimeout(() => {
    console.log('logging this after 3 seconds');
}, 3000);

function setTimeoutAction(){
    console.log('Timeout action');
}

//To pass a created function as parameter, do it without the '()', 
//otherwise, it will execute the code inside it and pass the return object as parameter
setTimeout(setTimeoutAction, 6000);

//Creating a function that receives a function parameter and execute it
function greeter(greetFn){
    greetFn();
}
greeter(() => console.log('greeter function'));