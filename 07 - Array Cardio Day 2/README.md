# Array Cardio Day 2

![Banner](https://github.com/destiny5420/JS-30/blob/develop/07%20-%20Array%20Cardio%20Day%202/banner.png)

這個專案主要是練習 `Array` 的應用，包括`some`、`every`、`find`、`findIndex`、`slice`

## 關鍵

#### Step1. Array.some()

我們會給`some()`方法一個函式，會測試陣列中是否`至少有一個`元素，通過此函式的測試，通過回傳`true`，否則`false`

> 詳細可參考 : [Array.some()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

#### Step2. Array.every()

我們會給`every()`方法一個函式，會測試陣列中是否`每個`元素，通過此函式的測試，皆通過回傳`true`，否則`false`

> 詳細可參考 : [Array.every()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

#### Step3. Array.find()

我們會給`find()`方法一個函式，遍歷每個元素，回傳`第一個匹配`的元素，如果沒有則返回`undefined`

> 詳細可參考 : [Array.find()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

#### Step4. Array.findIndex()

我們會給`findIndex()`方法一個函式，遍歷每個元素，回傳`第一個匹配`元素的 index，如果沒有則返回`-1`

> 詳細可參考 : [Array.findIndex()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

#### Step5. Array.slice()

`slice()`會回傳一個新陣列物件，原陣列的`begin`至`end`(不含`end`)部分進行淺拷貝，不會修改原陣列

在此部分使用了`spared`也就是`...`符號來進行陣列展開，並透過`slice()`組合陣列
`...comments.slice(0, index)`將會從 0 開始拷貝到 index，此處的 index 為 1，因此拷貝 index 為 0 的元素
`...comments.slice(index + 1)`為`index+1`開始拷貝到陣列的最後
因此中間的陣列只跳過了 index(1)的元素，其餘都被拷貝至 newComments 這個新 array 了

> 詳細可參考 : [Array.slice()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
