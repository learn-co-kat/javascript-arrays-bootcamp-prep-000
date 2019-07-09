var grilledCheeseIngredients = ['bread','mild cheese','sharp cheese','butter','tomato','garlic']
 
var tomatoSauceIngredients = ['tomato','garlic','olive oil','basil','oregano']

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

chocolateBars.push("mars");

['snickers', ...chocolateBars] 

function addElementToBeginningOfArray(array,element) {
  [...array, element];
  array = [...array, element];
  return (array);
}

addElementToBeginningOfArray([1], 'foo');

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

destructivelyAddElementToBeginningOfArray([1], 'foo');

function addElementToEndOfArray(array,element){
  [element, ...array];
  array = [element, ...array];
  return array;
}

addElementToEndOfArray([1], 'foo');

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

destructivelyAddElementToEndOfArray([1], 'foo');

function accessElementInArray(array, index) {
  return(array[2]);
}

accessElementInArray([1, 2, 3], 2);

function destructivelyRemoveElementFromBeginningOfArray (array){
  array.shift();
  return array;
}

destructivelyRemoveElementFromBeginningOfArray([1,2,3]);

function removeElementFromBeginningOfArray(array){
  array.slice(1);
}

removeElementFromBeginningOfArray([1,2,3]);

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
}

destructivelyRemoveElementFromEndOfArray([1,2,3]);

function removeElementFromEndOfArray(array){
  array.slice(0, array.length - 1);
}

removeElementFromEndOfArray([1,2,3]);







