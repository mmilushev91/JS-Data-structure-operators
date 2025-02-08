//Logical assigment operators

//OR assigment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assigment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND assigment operator
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner = rest1.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

//Use any data type, return any data type, short-circuiting

//short-circuiting:

// console.log('--------OR---------');
// return the first truthy value
// if both value are falsy, it will return the last

// console.log(3 || 'Jonas');
// console.log('' || 'jonas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || null || 0);
// console.log(undefined || 0 || '' || 'hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('--------AND---------');

//return first falsy value or last value if no falsy
// console.log(0 && 'jonas');
// console.log('Hello' && 23 && null && 'jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// restaurant.numGuest = 0;
// const guests = restaurant.numGuest || 10;
// console.log(guests);

//Nulish: null and undefined (NOT 0 or "")
// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);
