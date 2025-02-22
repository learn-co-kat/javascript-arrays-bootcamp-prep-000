var grilledCheeseIngredients = ['bread','mild cheese','sharp cheese','butter','tomato','garlic'];
 
var tomatoSauceIngredients = ['tomato','garlic','olive oil','basil','oregano'];

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

chocolateBars.push("mars");

['snickers', ...chocolateBars];

function addElementToBeginningOfArray(array,element) {
  [element, ...array];
  array = [element, ...array];
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array,element){
  [...array, element];
  array = [...array, element];
  return array
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array
}

function accessElementInArray(array, index) {
  return(array[2])
}

function destructivelyRemoveElementFromBeginningOfArray (array){
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(array){
  array.slice(1);
  array = array.slice(1);
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array
}

function removeElementFromEndOfArray(array){
  array.slice(0, array.length - 1);
  array = array.slice(0, array.length - 1);
  return array
}