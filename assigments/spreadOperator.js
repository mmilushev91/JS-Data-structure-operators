// The Spread Operator
// 1
// Each book object has the author property, which stores an array of strings
// (author names) if there are multiple authors, or a single string (author name) if there is just one author.

// Declare an array called bookAuthors, and fill it with authors of the first two books from the books array.
// The bookAuthors array should have just one level (no nested arrays).

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
        rating: 4.41, // <-- HERE
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
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

const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

// 2.
// Write a function called spellWord that accepts a single string as an argument.
// This function should log to the console each letter of the argument separated by a space.

const spellWord = function (string) {
  console.log(...string);
};

spellWord("JavaScript");
