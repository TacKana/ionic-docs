```css
/* 自定义作用域组件需要更高的样式优先级 */
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