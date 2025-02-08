// Looping Arrays: The for-of Loop

// Use the for-of loop to loop over the books array and sum the pages of all books.
// Use the pageSum variable below, and the pages property of the book objects.

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

const sum = 355 + 455 + 555 + 100;

let pageSum = 0;

for (const book of books) {
  pageSum += book.pages || 100;
}

console.log(sum === pageSum);

// Below is the allAuthors variable which stores an empty array. Use the for-of loop to fill allAuthors
//  with the authors of each book from the books array.

// Remember that each book object has the author property, which can be a string (if there is only a single author)
// or an array (if there are multiple authors). You may need to use the typeof operator. You can also use multiple
// loops if needed. The allAuthors array should have just one level (no nested arrays).

const allAuthors = [];
for (const book of books) {
  if (typeof book.author === "string") {
    allAuthors.push(book.author);
  } else {
    for (const author of book.author) allAuthors.push(author);
  }
}

console.log(allAuthors);

// Use the for-of loop together with Array's entries() method to log each author from allAuthors
//  to the console together with its index. Make the index start from 1, instead of 0

for (const item of allAuthors.entries()) {
  const [number, author] = item;

  console.log(`${number + 1}: ${author}`);
}
