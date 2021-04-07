- Switched to Semantic's Grid components instead of custom CSS: Already using library for icons and other styles, makes sense to save time. CSS and other code getting unwieldy -- created copy of App.js to focus on layout/skeleton instead of state, conditional rendering, etc.

- Creating get-random function: Firestore IDs are not auto-incremented or predictable. But we need to be able to generate a random number and use that number to specify a document to retrieve. Will need to take into account what's in the database -- so it doesn't get an index-out-of-range exception. But for billing reasons, we want to limit the size of our data requests: i.e. we can't just request the whole db and then take the count of those entries.

One option: Store count of database in separate collection, and any write-methods will update that count, but the read-ones won't need to.

Reference: https://fireship.io/snippets/firestore-increment-document-id-value/

Other ideas: Query by name, returning the first match(or a random index?) for a randomly chosen letter. Pros: Reduces size of data called from Firestore (only matches for a name). Cons: Pushes more responsibility onto front-end, no guarantee every letter or most letters will be included in data set of names

Firestore has increment/decrement feature now: https://firebase.googleblog.com/2019/03/increment-server-side-cloud-firestore.html (save count)
Examples: https://fireship.io/snippets/firestore-increment-tips/ 

TODO: read up on BATCHES vs. TRANSACTIONS in Firestore (transactions include reads)

TODO: Assigning sequential IDs for getting random one returned: these need to be unique to a user. Don't want to return someone else's entry! Or try to access an out-of-range ID because count isn't restricted to just your own documents. Maybe separate collection per user?

WHAT: using `set` instead of `add` lets you specify ID 

TODO: Should the totalCount be a property of the Firebase class that's retrieved/set upon instantiation? Maybe half the methods would need that value currently (post, getRandom)

How do we keep the totalNumber tied to the countIDs? Set listener?
(Related: For delete, should we have 'soft delete'--keeping the IDs and count the same?)

Status: 
✓ getDetail()/GET{id} is working
  ? but sends 3 API calls -- POST, GET, POST 
✓ getAll()/GET is working
✓ getAll()/POST is working!
- will add 'UD' to the 'CR' later: i.e. marking one done/editing
✓ posting with set ID and incremented count is working finally!
✓ get random suggestion works! (TODO refactor and add error/null handling)