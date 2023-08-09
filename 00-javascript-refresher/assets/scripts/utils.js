//export default "default exported text";
export const UTILS_FILE_LOADED = 'utils.js file loaded';
export let utilsRandomText = 'Random text';

//Default value and optional parameter
export function createGreetting(name, age = 27){
    return 'Hi ' + name + ' age = ' + age;
}