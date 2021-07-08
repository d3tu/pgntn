```javascript
const Pagination = require("pgntn");
const array = ["p", "g", "n", "t", "n"];
const size = 2;
const pagination = new Pagination(array, size);
pagination.next; // ["n", "t"]
pagination.next; // ["n"]
pagination.back; // ["n", "t"]
```