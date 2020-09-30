# Array Cardio Day 1

![Banner](https://github.com/destiny5420/JS-30/blob/develop/04%20-%20Array%20Cardio%20Day%201/banner.png)

這個專案主要是練習 Array 的應用，包括`filter`、`map`、`sort`、`reduce`

## 關鍵

#### Filter

Array.filter() 會傳入一個判斷 callback，會返判斷後為 true 的新陣列

```javascript
const fifteen = inventors.filter(
  inventor => inventor.year >= 1500 && inventor.year < 1600
);
console.table(fifteen);
```

參閱: [MDN-Filter](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

#### Map

Array.map() 會傳入一個 callback，而每個元素會 invoke 函式後載返回其結果值

```javascript
const fullName = inventors.map(inventor => {
  return `${inventor.first} ${inventor.last}`;
});
console.table(fullName);
```

這裡是將所有元素的 first 與 last 做一個組合後，返回其結果

參閱: [MDN-Map](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

#### Sort

Array.sort() 會傳入一個 callback 為以下形式，其中 a 為前一個值，b 為後一個值，若是 a 想排在 b 後面，則回傳大於 0 的值，若 a 想排在 b 前面，則回傳小於 0 的值

```javascript
const ordered = inventors.sort((a, b) => {
  return a.year > b.year ? 1 : -1;
});
console.table(ordered);
```

此範例是將 year 從小排到大的排序

參閱: [MDN-Sort](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

#### Reduce

Array.reduce() 常用於累加數值，第一個參數需要傳入一個 callback, callback 的第一個 argument 是總累加的值，第二個 argument 則是該次輪到的元素，Array.reduce() 第二個參數則需要傳入 initValue

```javascript
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck'
];

const transportation = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(transportation);
```

此範例是要將出現過的項目做數量計算

參閱: [MDN-Reduce](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
