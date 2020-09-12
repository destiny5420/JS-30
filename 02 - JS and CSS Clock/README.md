# JS and CSS Clock

![Banner](https://github.com/destiny5420/JS-30/blob/develop/02%20-%20JS%20and%20CSS%20Clock/banner.png)

這個專案的練習，主要是獲取現在時間的「時、分、秒」，並搭配 CSS 的 rotate 功能做旋轉，達到時鐘各個針轉動的效果。

## 關鍵

#### Step1. 獲取秒、分、時的 target

> document.querySelector();

使用`querySelector()`或許對應的 target

#### Step2. 建立 setData function

1. 使用`new Date`獲取目前的時間，並搭配`getSeconds`、`getMinutes()`、`getHours()`獲得秒、分、時的資訊
2. 將`seconds`除 60，因為一分鐘有六十秒
3. 是因為一圈是 360 度，因此乘上 360 後，計算目前秒針應該要到的角度是多少
4. 在網頁中 0deg 是水平線，但在時鐘表現上，0 秒應該是垂直的方向, 所以加上 90 來修正表現
5. 使用`style.transform`來設定 target 的旋轉角度，並且記得在角度的數字後，須加上`deg`

#### Step3. 製作定時器

使用`setInterval(setData, 1000);`讓每 1000ms 觸發一次`setData()`，達到不斷更新時間的效果

#### Step4. 設定 CSS

1. 此時應該會發現三個指針都會轉動了，但是似乎 Pivot 錯誤，原因是`transform-origin`預設值是 50% 50%，因此我們需要改為`transform-origin: 100%;`，讓 Pivot 貼齊最右方
2. 我們在此將秒針設定為紅色，以方便辨識 `.second-hand { background: red; }`
3. `transition`為動畫轉場時，可以設定參數讓表演更佳的平順，此處的`All`代表所有屬性將獲得過渡效果，`0.05s`則代表過渡的表演時間總長
4. 通常秒針都會有「過頭回彈」的效果，在這邊使用了`transition-timing-function: cubic-bezier()`來達成此效果，並且可以搭配 Google Chrome 的 DevTool 來做即時性的可視化調整

參閱: [W3C-transform-origin](https://www.w3schools.com/cssref/css3_pr_transform-origin.asp)、[W3C-transition-property](https://www.w3schools.com/cssref/css3_pr_transition-property.asp)
