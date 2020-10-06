# Type Ahead

![Banner](https://github.com/destiny5420/JS-30/blob/develop/06%20-%20Type%20Ahead/banner.png)

這個專案用了`fetch()`來獲取網路上的`json`檔案，並搭配`正規表達式`來做資料的分類

## 關鍵

#### Step1. fetch

在 fetch 的 Response 物件中的 body 屬性提供了一個 ReadableStream 的實體(即為第一個 then)，這個階段無法直接讀取資料內容，必須使用對應的`方法`才能獲得對應格式的資料

- arrayBuffer()
- blob()
- formData()
- json()
- text()

因我們要獲取 json 檔案，所以在此使用的是`json()`，然後會將轉換的檔案，給在第二個 then 的 argument 中，也就是`.then(data => ...)`的 `data`，然後使用 ES6 的解構`...`將所有獲得的值，依序丟進`cities`裡面

> 詳細可參考 : [ES6 陣列方法](https://wcc723.github.io/javascript/2017/12/26/javascript-array/)

#### Step2. RegExp 正規表達式

這裡使用`findMatches()`搭配`正規表達式`，將`cities`內所有的資料與`input value`做比對，如 city 或 state 符合，就取出該筆資料。

首先正規表達式的規則不少，所以直接看 [MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/RegExp) 的資料會更加詳細

#### Step3. 黃色標記文字

```javascript
const cityName = data.city.replace(
  regex,
  `<span class="hl">${this.value}</span>`
);
```

從第 50 行 `const matchArray = findMatches(this.value, cities);`，`matchArray` 已經拿到了匹配的資料了，使用`array.map`的方式，遍歷每項 data，使用的是`string.replace()`搭配`正規表達式`，將符合的字段改成想要的字段，因此可以將 city 或 state 中符合的字段，標記成黃色

並且使用`.join()`將所有資料串起

> 詳細可參考 : [String.replace()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

#### Step4. 數字的千分位、百萬分位符號

`numberWithCommas(value)`將傳入的 argument 轉成 string 後，也使用 replace 來取代

> 詳細可參考 : [正規表達式](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
