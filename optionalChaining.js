
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//Optional chaining
//Old way

if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

//error if property doesn't exits
// console.log(restaurant.openingHours.mon.open);

//returns undefined if property doesn't exits
console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(`Day ${day}: `, restaurant.openingHours[day]?.open ?? 'Closed');
}

//Methods

console.log(restaurant.order?.(0, 1) ?? 'Method does not exists');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exists');

//Array

const users = [{ name: 'Marian', email: 'marian@gmail.com' }];

console.log(users[0]?.name ?? 'User Array Empty');

const emptyArray = [];

console.log(emptyArray?.[0] ?? 'Empty array');
