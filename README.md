# JavaScript Coding Katas with Unit Tests

## Kata: Filter API Data

Implement the `filterApiData` function in `filter-api-data.js` with the following requirements in mind.

- The first parameter `apiData` will be an array that includes objects
- The objects can have different keys
- The second parameter `mandatoryKeys` is a array that includes all keys that an object (from the `apiData` array) should have to pass the filter test
- Return an array with only the objects that include all keys from the `mandatoryKeys` array

### Filter Api Data Examples

```js
const data = [{ id: 1, price: 100 }, { price: 50 }];

const filteredData = filterApiData(data, ["id"]);

console.log(filteredData); // [{id: 1, price: 100}]
```

```js
const data = [
  { id: 1, price: 100 },
  { id: 2, title: "" },
  { id: 3, price: 50 },
];

const filteredData = filterApiData(data, ["id", "price"]);

console.log(filteredData); // [{ id: 1, price: 100 }, { id:3, price: 50}]
```



## Extract Class Name

TODO

### Extract Class Name Example

```js
console.log(extractClassName("Live-Session Class 2022 September")); // "2022-09"

console.log(extractClassName("Live-Session Class 2022 März")); // "2022-03"

console.log(extractClassName("Live-Session Class 2022 Maerz")); // "2022-03"

console.log(extractClassName("Live-Session 2022 April")); // null

console.log(extractClassName("Live-Session Class 2 X")); // null

console.log(extractClassName("Live-Session Class 2022 Y")); // null

console.log(extractClassName("Live-Session Class 22 April")); // null
```
