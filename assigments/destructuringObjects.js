"using strict";

const books = [
  (firstBook = {
    title: "FirstBook",
    author: "FirstAuthor",
    ISBN: "120121",
    keywords: "Keywords",
    language: "bulgarian",
    thirdParty: {
      goodreads: {
        rating: 4.41, // <-- HERE
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
  }),
  (SecondBook = {
    title: "SecondBook",
    author: "SecondAuthor",
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
  }),
  (FourthBook = {
    title: "FourthBook",
    author: "FourthAuthor",
    ISBN: "120124",
    keywords: "Keywords",
    language: "bulgarian",
  }),
  (FifthBook = {
    title: "FifthBook",
    author: "FifthAuthor",
    ISBN: "120125",
    keywords: "Keywords",
    language: "bulgarian",
  }),
  (SixthBook = {
    title: "SixthBook",
    author: "SixthAuthor",
    ISBN: "120126",
    keywords: "Keywords",
    language: "bulgarian",
  }),
  (SeventhBook = {
    title: "SeventhBook",
    author: "SeventhAuthor",
    ISBN: "120127",
    keywords: "Keywords",
    language: "bulgarian",
  }),
];

const { title, author, ISBN } = books[0];

console.log(title, author, ISBN);

// 2. Each book object has the keywords property. Destructure the first book object from the books
//  array into a variable called tags. The tags variable should be assigned with the value of the
// keywords property.

const { keywords: tags } = books[0];

console.log(tags);

//3. The seventh book from the books array is missing the programmingLanguage property.
// Destructure the seventh book object (books[6]) into variables called language and programmingLanguage.
//  Assign the programmingLanguage variable with a default value of 'unknown'.

const { language, programmingLanguage = "unknown" } = books[6];

console.log(language, programmingLanguage);

// 4. Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the
// title and author properties
// of the first book object from the books array.

let bookTitle = "unknown";
let bookAuthor = "unknown";

({ title: bookTitle, author: bookAuthor } = books[0]);

console.log(bookTitle, bookAuthor);

// 5. Destructure the first book object from the books array into a variable called bookRating.
// In the result of your destructuring, the bookRating variable should be assigned with the value
// of the book[0].thirdParty.goodreads.rating property.

// Please do most of the work on the left side of the assignment operator: const ... = books[0];

// {
//   title: 'Algorithms',
//   ...
//   thirdParty: {
//     goodreads: {
//       rating: 4.41,              // <-- HERE
//       ratingsCount: 1733,
//       reviewsCount: 63,
//       fiveStarRatingCount: 976,
//       oneStarRatingCount: 13
//     }
//   }
// },

// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];

// console.log(bookRating);

// 6. Write a function called printBookInfo that has three parameters called title, author and year.
// This function should work for a single object passed as an argument, and it should log to the
// console information about the book in this format: "${title} by ${author}, ${year}".

// If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.

const printBookInfo = function ({ title, author, year = 0 }) {
  console.log(`${title} by ${author}, ${year}`);
};

printBookInfo(books[0]);
