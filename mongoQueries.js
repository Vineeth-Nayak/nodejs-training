// ! insert many document
db.books.insertMany([
  {
    title: "Hello Sarr",
    author: "heludilla",
    pages: 230,
    rating: 10,
    genres: ["sci-fi", "dystopian"],
  },
  {
    title: "Hello Sarr 1",
    author: "heludilla 1",
    pages: 1000,
    rating: 5,
    genres: ["fantasy"],
  },
]);

// ! insert one document
db.books.insertOne({
  title: "Hello Sarr",
  author: "heludilla",
  pages: 230,
  rating: 10,
  genres: ["sci-fi", "dystopian"],
});

// *------------------------------------------------------
// ! find all documents
db.books.find(); // return only 1st 20 in mongoShell

// ! find all documents that match the filter
db.books.find({ author: "heludilla" });
// or
db.books.find({ author: "heludilla", rating: 10 });

// ! find all documents that match the filter and send only specific field
db.books.find({ author: "heludilla" }, { title: 1, author: 1 });

// *------------------------------------------------------
// ? COMPLEX QUERIES
// ! find using or ("or" takes array of filters)
db.books.find({ $or: [{ author: "heludilla" }, { rating: 2 }] });

// ! find  rating greater than 8 or less than 10
db.books.find({ $or: [{ rating: { $gt: 8 } }, { rating: { $lt: 10 } }] });

// !find array element containing specified element
db.books.find({ genres: "fantasy" });

// !find array element containing "exactly" the specified element
db.books.find({ genres: ["fantasy"] });
db.books.find({ genres: ["fantasy", "sci-fi"] });

// *------------------------------------------------------
// ? DELETING DOCUMENTS
// ! delete by id
db.books.deleteOne({ _id: ObjectId("asdasdadasdsadasd") });

// ! delete many by some criteria
db.books.deleteMany({ author: "heludilla" });

// *------------------------------------------------------
// ? UPDATE DOCUMENTS
// ! update single document
db.books.updateOne(
  { _id: ObjectId("asdasdasd") },
  { $set: { rating: 8, pages: 120 } }
);

// ! update many document
db.books.updateMany(
  { author: "Terry cruse" },
  { $set: { author: "Terri manga" } }
);

// ! increment by 1 both rating and reduce pages by 1
db.books.updateOne(
  { _id: ObjectId("asdasdasd") },
  { $inc: { rating: 1, pages: -1 } }
);
