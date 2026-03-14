```html
<ion-fab slot="fixed" vertical="top" horizontal="center">
  <ion-fab-button>
    <ion-icon name="add"></ion-icon>
  </ion-fab-button>
</ion-fab>

<style>
  :root {
    /* 仅为演示目的设置变量。
     * 构建 iOS 或 Android 应用时会自动设置这些值。
     */
    --ion-safe-area-top: 20px;
    --ion-safe-area-bottom: 20px;
  }

  ion-fab {
    margin-top: var(--ion-safe-area-top, 0);
    margin-bottom: var(--ion-safe-area-bottom, 0);
  }
</style>
```