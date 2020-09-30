# Flex Panel Gallery

![Banner](https://github.com/destiny5420/JS-30/blob/develop/05%20-%20Flex%20Panel%20Gallery/banner.png)

這個專案主要是使用 display: `flex`這個來做佈局的教學練習專案

## 關鍵

#### Step1. panels 佈局由垂直改水平

預設的佈局是垂直的，我們要將其改為水平，因此在 css 中找到`.panels`後，我們加上 flex 屬性

```css
display: flex;
```

當預設只有設定 display: flex，沒有設定主軸或交錯軸時，預設方向是 row 為主

#### Step2. panel 佈局

我們也針對所有`.panel`的佈局設置了 flex 屬性

```css
display: flex;
flex-direction: column;
justify-content: center;
flex: 1;
```

其中在此的 flex 是代表在`display: flex`的佈局下，佔的等份是多少，例如此範例中，有很多個.panel 在.panels 底下，如果 flex 為 1，代表所有.panel 都個佔 1 等分

#### Step3. 設定 panel 底下的物件

這邊也使用了`display: flex`來設定 panel 底下物件的佈局

```css
flex: 1 0 auto;
display: flex;
justify-content: center;
align-items: center;
```

這裡的 justify-content 是代表主軸的定位，align-items 則為垂直軸的定位，是很典型物件置中的做法

#### Step4. 在 element 有.panel 且同時有.open 的時候

當點擊任一 block 的時候，會發現其 block 的佔比會變大，是因原先其 flex 從 1 更改為 5

```css
.panel.open {
  flex: 5;
  font-size: 40px;
}
```

#### Step5. 其他

flex 這個佈局較為難以用文字理解，不過網路上有其他更詳細的文章，甚至有大神製作出青蛙佈局的遊戲，讓你能夠更熟悉 flex 的操作

[CSS Flex 屬性一點也不難](https://wcc723.github.io/css/2017/07/21/css-flex/)

[Flex froggy](https://flexboxfroggy.com/)
