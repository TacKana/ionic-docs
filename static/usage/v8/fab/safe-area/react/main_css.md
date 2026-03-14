```css
:root {
  /**
   * 以下变量仅为演示目的而设置。
   * 在构建 iOS 或 Android 应用时，这些值将自动设置。
   */
  --ion-safe-area-top: 20px;
  --ion-safe-area-bottom: 20px;
}

ion-fab {
  margin-top: var(--ion-safe-area-top, 0);
  margin-bottom: var(--ion-safe-area-bottom, 0);
}
```