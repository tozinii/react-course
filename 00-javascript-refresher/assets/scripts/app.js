import * as utils from "./utils.js";
//import UTILS_FILE_LOADED from "./utils.js";
console.log('Loaded app.js file.');
console.log('Loaded imported variable ' + utils.UTILS_FILE_LOADED);
console.log('Loaded imported variable ' + utils.utilsRandomText);

console.log(utils.createGreetting('Iker'));
console.log(utils.createGreetting('Imanol', 35));