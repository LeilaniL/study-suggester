- Switched to Semantic's Grid components instead of custom CSS: Already using library for icons and other styles, makes sense to save time. CSS and other code getting unwieldy -- created copy of App.js to focus on layout/skeleton instead of state, conditional rendering, etc.

- Creating get-random function: Firestore IDs are not auto-incremented or predictable. But we need to be able to generate a random number and use that number to specify a document to retrieve. Will need to take into account what's in the database -- so it doesn't get an index-out-of-range exception. But for billing reasons, we want to limit the size of our data requests: i.e. we can't just request the whole db and then take the count of those entries.

One option: Store count of database in separate collection, and any write-methods will update that count, but the read-ones won't need to.

Reference: https://fireship.io/snippets/firestore-increment-document-id-value/