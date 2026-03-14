```html
<ion-searchbar show-cancel-button="focus" class="custom"></ion-searchbar>

<style>
  /* 为作用域组件定制样式需要更高的选择器特异性 */
  ion-searchbar.custom {
    --background: #19422d;
    --color: #fff;
    --placeholder-color: #fff;
    --icon-color: #fff;
    --clear-button-color: #fff;

    --border-radius: 4px;
  }

  ion-searchbar.ios.custom {
    --cancel-button-color: #19422d;
  }

  ion-searchbar.md.custom {
    --cancel-button-color: #fff;
  }
</style>
```