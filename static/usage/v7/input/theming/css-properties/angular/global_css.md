```css
/**
 * 由于我们需要在 ion-input 内部设置元素样式，
 * 因此必须将这段 CSS 移至全局样式表中。否则，
 * 启用封装模式的 Angular 组件会向这些选择器
 * 添加带有作用域限制的样式属性。
 */
ion-input.custom.ios .input-bottom .helper-text,
ion-input.custom.ios .input-bottom .counter,
ion-input.custom.md .input-bottom .helper-text,
ion-input.custom.md .input-bottom .counter {
  color: var(--ion-color-primary);
}
```