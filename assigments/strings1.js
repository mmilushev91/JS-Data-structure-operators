// Working with Strings - Part 1
// 15.1
// Take the ISBN property of the first book from the books array,
// and log to the console characters at index 6, 4, 9 and 8. Use bracket
// notation to access individual characters.

const books = [
  (firstBook = {
    title: "FirstBook",
    author: ["FirstAuthor1", "FirstAuthor2", "FirstAuthor3"],
    ISBN: "1201211212112",
    keywords: ["Keyword1", "Keyword2", "Keyword2"],
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
    keywords: ["Keyword4", "Keyword5", "Keyword6"],
    language: "bulgarian",
  }),
  (ThirdBook = {
    title: "ThirdBook",
    author: "ThirdAuthor",
    ISBN: "120123",
    keywords: ["Keyword4", "Keyword8", "Keyword9"],
    language: "bulgarian",
    pages: 455,
  }),
  (FourthBook = {
    title: "FourthBook",
    author: "FourthAuthor",
    ISBN: "120124",
    keywords: ["Keyword10", "Keyword10", "Keyword12"],
    language: "bulgarian",
    pages: 555,
  }),
];

console.log(
  books[0].ISBN["6"],
  books[0].ISBN["4"],
  books[0].ISBN["9"],
  books[0].ISBN["8"]
);

// 15.2
// Below is the quote variable that stores a string. Find the index of the word 'chess',
// and log it to the console.

const quote =
  "A computer once beat me at chess, but it was no match for me at kick boxing";

console.log(quote.indexOf("chess"));

// 15.3
// Extract the word "boxing" from the same quote string, and log it to the console.

console.log(quote.lastIndexOf(" "));
console.log(quote.slice(quote.lastIndexOf(" ") + 1));

// 15.4
// Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)".
// Create a function called isContributor that takes an author's name as an argument,
//  and returns either true (if he's a contributor) of false (if he's not a contributor).
// The string "(Contributor)"
// is always the last part of the author's name string.

const isContributor = function (author) {
  if (author.slice(author.lastIndexOf(" ") + 1) === "(Contributor)")
    return true;

  return false;
};

console.log(isContributor("Julie Sussman"));
