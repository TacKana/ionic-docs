```css
/**
 * 由于我们是在 ion-textarea 内部设置元素样式，
 * 需要将这段 CSS 移动到全局样式表中。否则，
 * 启用封装功能的 Angular 组件会为这些选择器
 * 添加作用域样式属性。
 */
ion-textarea.custom.ios .textarea-bottom .helper-text,
ion-textarea.custom.ios .textarea-bottom .counter,
ion-textarea.custom.md .textarea-bottom .helper-text,
ion-textarea.custom.md .textarea-bottom .counter {
  color: var(--ion-color-primary);
}
```