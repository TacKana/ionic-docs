```css
ion-select {
  /* 占位符文本颜色 */
  --placeholder-color: #971e49;
  /* 占位符不透明度 */
  --placeholder-opacity: 1;
  /* 宽度占满容器 */
  width: 100%;
  /* 内容居中对齐 */
  justify-content: center;
}

/* 占位符和文本部分样式 */
ion-select::part(placeholder),
ion-select::part(text) {
  flex: 0 0 auto;
}

/* 占位符首字母特殊样式 */
ion-select::part(placeholder)::first-letter {
  font-size: 24px;
  font-weight: 500;
}

/* 文本颜色 */
ion-select::part(text) {
  color: #545ca7;
}

/* 下拉图标样式 */
ion-select::part(icon) {
  color: #971e49;
  opacity: 1;
}
```