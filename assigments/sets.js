// Sets
// 12.1
// Below is the allKeywords variable, which stores an empty array.
//  Loop over the books array, and fill the allKeywords array with the keywords
//  coming from the keywords property of each book object. The allKeywords array
//  should have just one level (no nested arrays).

// Use whatever loop and methods you want. You can also use the spread syntax.
//  In the end, the allKeywords array should look more or less like this:
//  ['computer science', 'programming', 'algorithms', 'data structures', ...].

const books = [
  (firstBook = {
    title: "FirstBook",
    author: ["FirstAuthor1", "FirstAuthor2", "FirstAuthor3"],
    ISBN: "120121",
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
const allKeywords = [];

for (const item of books) {
  allKeywords.push(...item.keywords);
}

console.log(allKeywords);

// The allKeyword array contains duplicates. Remove them by creating
// a Set out of that array. Assign the newly created set to the
// uniqueKeywords variable.

const uniqueKeywords = new Set(allKeywords);
console.log(uniqueKeywords);

// Add two more keywords to the uniqueKeywords set, for example, 'coding' and 'science'.

uniqueKeywords.add("coding");
uniqueKeywords.add("science");
uniqueKeywords.add("business");
console.log(uniqueKeywords);

// Delete 'business' from the uniqueKeywords set.
uniqueKeywords.delete("business");

console.log(uniqueKeywords);

// Create an array out of the uniqueKeywords set, and assign it to the uniqueKeywordsArr
// variable.
const uniqueKeywordsArr = [...uniqueKeywords];

console.log(uniqueKeywordsArr);

//Delete all items from the uniqueKeywords set.

uniqueKeywords.clear();
console.log(uniqueKeywords);
