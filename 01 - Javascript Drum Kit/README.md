# Drum kit

#### 摘要

這個專案的練習，主要是針對「按下鍵盤按鈕後後，觸發對應音效」為主要功能，並且增加一個效果來做為使用者的 Feedback。

#### 關鍵

###### Step1. 建立 keydown listener

> window.addEventListener('keydown', playFunction);

這裡使用 addEventListener 來監聽「按鍵按下 keydown」的事件發生，當使用者按下按鍵後，觸發「palyFunction」

###### Step2. 建立 playFcuntion

1. 我們使用`document.querySelector`抓取相對應`keyCode`的標籤
2. 檢查是否有抓到物件 `if (!audio) return;`
3. 將物件透過`classList.add('playing')`新增 playing 的 class
4. 使用`currentTime`將 audio 標籤的音樂起始時間歸零

###### Step3. 每個物件建立 transitionend listener

> target.addEventListener('transitionend', function() {...})

1. 使用`document.querySelectorAll()`可以一次性抓取到有相同標記的物件
2. 搭配 forEach 讓每個物件都監聽事件
3. 讓每個物件監聽 transitionend，因此可以當「transitionend 結束後」，做相對應事情的流程

###### Step4. 建立 removeTransition listener

1. 當物件的 transitionend 被觸發時, 都會執行此 function
2. 此範例我使用 border 來做 Feedback 的效果, 因此當確定`border-bottom-left-radius`結束後, 才執行後續的動作
3. 使用`classList.remove`可以移出對應的 class

#### 其他

###### Array.from

在範例中有一段`Array.from(document.querySelectorAll('.key'))`
不過就我所知 querySelectorAll 回傳的已經是陣列了，不清楚為何還需透過 Array.from 轉換成陣列
查了才發現 querySelectorAll 回傳的是`NodeList`，而 from 是`Array`，並且在 NodeList 的 MDN 內也有說到「有些舊有的瀏覽器是不支援`NodeList.forEach()`」

```
Although NodeList is not an Array, it is possible to iterate over it with forEach(). It can also be converted to a real Array using Array.from().

However, some older browsers have not implemented NodeList.forEach() nor Array.from().
```
