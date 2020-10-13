const checkboxs = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  console.log(e);
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    checkboxs.forEach(checkbox => {
      // 當遇到下述兩個條件其中一個的時候會變ture, 又遇到另外一個的時候會變false, 所以在這兩個之間的input element將會打勾
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxs.forEach(checkbox => {
  checkbox.addEventListener('click', handleCheck);
});
