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


// Rest Pattern and Parameters
// 1
// Destructure the keywords property (array) of the first book from the books array into
//  variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest
//  of the keywords should be assigned to the rest variable (it should be an array).

const [mainKeyword, ...rest] = books[0].keywords;

console.log(mainKeyword);
console.log(rest);

// 2.
// Destructure the second book from the books array into a variable called bookPublisher.
// The bookPublisher variable should be assigned with the value of the publisher property of
// the book object. Assign the rest of the properties to the restOfTheBook variable.

const { publisher: bookPublisher = "Publisher", ...restOfTheBook } = books[1];

console.log(bookPublisher, restOfTheBook);

// 3.
// Write a function called printBookAuthorsCount that has two parameters
// called title and authors. The authors parameter should accept any number of arguments.
// This function should log to the console a string
// formatted like that: "The book "${title}" has ${authors.length} authors".

const printBookAuthorsCount = function (title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
};

printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne");
