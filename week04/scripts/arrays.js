// Base Array
let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

// 1. filter() - Names starting with 'B'
let namesB = names.filter((name) => name.startsWith('B'));
console.log("Names starting with B:", namesB);

// 2. map() - Length of each name
let namesLength = names.map((name) => name.length);
console.log("Name lengths:", namesLength);

// 3. reduce() - Average name length
let averageLength = names.reduce((total, name) => total + name.length, 0) / names.length;
console.log("Average name length:", averageLength);