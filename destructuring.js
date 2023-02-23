/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays

let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2]; does not use destructuring
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects

let jobs = {
    mike: 'designer',
    jill: 'developer',
    alicia: 'accountant',
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets

let languages = ['english', 'french', 'spanish', 'german', 'japanese'];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);
// below we skip the first two languages in the array by puttin commas in the place of the list items we want to skip
let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: 'english',
    secondLanguage: 'french',
    thirdLanguage: 'german',
    fourthLanguage: 'japanese',
}
let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax

let fruits = ['apple', 'orange', 'banana', 'peach', 'cherry'];
let [favorite, secondFavourite, ...others] = fruits;
console.log(favorite, secondFavourite, ...others);
console.log(favorite);
console.log(secondFavourite);
console.log(...others);

let favoriteFoods = {
    brian: 'pizza',
    anna: 'pasta',
    sarah: 'vegetarian',
    andrea: 'steak',
};
let {brian, anna, ...rest} = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);
