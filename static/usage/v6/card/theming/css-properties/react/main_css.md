```css
ion-card {
  --background: #000;
  --color: #9efff0;
}

ion-card-title {
  --color: #52ffe4;
}

ion-card-subtitle {
  --color: #d1fff8;
}

/* iOS 系统会将副标题置于主标题上方 */
ion-card-header.ios {
  display: flex;
  flex-flow: column-reverse;
}
```