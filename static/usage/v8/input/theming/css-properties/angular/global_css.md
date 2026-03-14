```css
/**
 * 由于我们需要在 ion-input 内部设置样式，
 * 因此必须将此 CSS 移至全局样式表中。否则，
 * 启用封装功能的 Angular 组件会为这些选择器
 * 添加作用域样式属性。
 */
ion-input.custom.ios .input-bottom .helper-text,
ion-input.custom.ios .input-bottom .counter,
ion-input.custom.md .input-bottom .helper-text,
ion-input.custom.md .input-bottom .counter {
  color: var(--ion-color-primary);
}
```