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

// Logical Assignments Operators

// Some of the book objects from the books array are missing the edition property. Loop over the
// books array, and assign this property with a number 1
// (if it doesn't already exist). Use logical assignment operators.

for (let book of books) {
  // book.edition = book.edition || 1;
  book.edition ||= 1;
}
console.log(books);

// Some of the book objects from the books array have the highlighted property,
// which by default is set to true. Iterate over the books array, and if the thirdParty.goodreads.rating property
//  is less than 4.2, reassign it with false.

for (let book of books) {
  // book.highlighted = false && !(thirdParty.goodreads.rating < 4.2);
  book.highlighted &&= !(thirdParty.goodreads.rating < 4.2);
