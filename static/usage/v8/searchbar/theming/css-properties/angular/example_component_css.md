```css
/* 作用域组件需要更高的优先级才能自定义样式 */
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
```