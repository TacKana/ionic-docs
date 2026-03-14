```html
<ion-content>
  <span>这里有一段简短的正文描述。不多不少，恰到好处。</span>
</ion-content>

<style>
  :root {
    /**
     * 仅为演示目的设置变量。
     * 构建 iOS 或 Android 应用时，这些值会自动设置。
     */
    --ion-safe-area-top: 20px;
    --ion-safe-area-bottom: 20px;
    --ion-safe-area-left: 20px;
    --ion-safe-area-right: 20px;
  }

  ion-content::part(scroll) {
    padding-top: var(--ion-safe-area-top, 0);
    padding-bottom: var(--ion-safe-area-bottom, 0);
    padding-left: var(--ion-safe-area-left, 0);
    padding-right: var(--ion-safe-area-right, 0);
  }
</style>
```