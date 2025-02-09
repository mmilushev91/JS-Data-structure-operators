const books = [
  (firstBook = {
    title: "FirstBook",
    author: ["FirstAuthor1", "FirstAuthor2", "FirstAuthor3"],
    ISBN: "120121",
    keywords: ["Keyword1", "Keyword2", "Keyword3"],
    language: "bulgarian",
    publisher: "Publisher",
    thirdParty: {
      goodreads: {
        rating: 3, // <-- HERE
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
    pages: 355,
  }),
  (secondBook = {
    title: "SecondBook",
    author: ["SecondAuthor1", "SecondAuthor2", "SecondAuthor3"],
    ISBN: "120122",
    keywords: "Keywords",
    language: "bulgarian",
  }),
  (ThirdBook = {
    title: "ThirdBook",
    author: "ThirdAuthor",
    ISBN: "120123",
    keywords: "Keywords",
    language: "bulgarian",
    pages: 455,
  }),
  (FourthBook = {
    title: "FourthBook",
    author: "FourthAuthor",
    ISBN: "120124",
    keywords: "Keywords",
    language: "bulgarian",
    pages: 555,
  }),
];

// Looping Objects: Object Keys, Values and Entries
// 11.1
// Below is the entries variable that stores an empty array. Use the for-of loop
//  together with the Object.keys() method to loop over the thirdParty.goodreads
//  property (array) of the first book object from the books array. For each key, push
//   a new array that contains that key to the entries array.

/ 11.2 The Object.values() method returns an array, which means you can call the Array's
// entries() method on it, for example, Object.entries(books[0].thirdParty.goodreads).entries().
// The Array's entries() method returns [index, value] arrays for each element in the array.

// Use the for-of loop together with the Object.values() method and Array's entries() method
//  to loop over thirdParty.goodreads property of the first book from the books array.

// Push each value to the appropriate inner array in the entries array (use index from entries()).

for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries[index].push(value);
}

console.log(entries);

// 11.3
// Use the Object.entries() method on the thirdParty.goodreads property of the first book from the books array.
// Assign the returned value to the variable called entries2.

const entries2 = Object.entries(books[0].thirdParty.goodreads);
console.log(entries2);

// 11.4
// Log the entries and entries2 variables to the console, and compare them. They should look the same.
console.log(entries, entries2);
