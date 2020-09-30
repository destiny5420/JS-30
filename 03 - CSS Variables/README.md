# CSS Variables

![Banner](https://github.com/destiny5420/JS-30/blob/develop/03%20-%20CSS%20Variables/banner.png)

這個專案主要是練習使用 js 賦予值給 css 的變數，透過 html 裡的元件可以控制 css 的素質，達到動態調整 css 參數的效果

## 關鍵

#### Step1. 在所有 input 上都加上了 name 屬性，且增加 data-\*的屬性

這邊使用 name 屬性是後續用來辨識 css 內部屬性的名稱，並搭配 data-sizing 的方式，賦予數值的後綴（單位）

參閱: [MDN-Data-\*](https://developer.mozilla.org/zh-TW/docs/Web/HTML/Global_attributes/data-*)

#### Step2. 首先使用 querySelectAll 獲取所有在.controls 下的 input 標籤

> document.querySelectorAll();

並且搭配 forEach 給予每個 input 監聽`change`與`mousemove`兩個行為

參閱: [MDN-Mousemove](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event)、[MDN-Change](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)

#### Step3. 創建 handlerUpdate 函式

1. 在 handlerUpdate 中，我們使用了`this.dataset`的方式來獲取`sizing`的值，並且使用`or(||)`的方式，由左到右回傳先等於 true 的值
2. 也可以使用 getAttribute({attributeName})來獲取指定的值，Ex:`this.getAttribute('data-sizing')`
3. 在 suffix 取得 sizing 的值後，在使用`style.setProperty(propertyName, value)`的方式在 css 內賦值

參閱: [MDN-CSSStyleDeclaration.setProperty](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty)

#### Step4. 設定 CSS

1. 在 css 中我們在:root 的底下，賦予了變數，並且使用`var(propertyName)`的方式獲取 propertyValue

參閱: [W3C-Root](https://www.w3schools.com/cssref/sel_root.asp)、[W3C-Var](https://www.w3schools.com/css/css3_variables.asp)
