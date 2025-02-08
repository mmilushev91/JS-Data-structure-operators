//FOR of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  const [postion, dish] = item;
  console.log(`${postion + 1}: ${dish}`);
}
