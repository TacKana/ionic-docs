```html
<ion-toggle aria-label="Enable Notifications"></ion-toggle>
<ion-toggle checked="true" aria-label="Enable Notifications"></ion-toggle>

<style>
  ion-toggle {
    padding: 12px;

    --track-background: #ddd;
    --track-background-checked: #ddd;

    --handle-background: #eb7769;
    --handle-background-checked: #95c34e;

    --handle-width: 25px;
    --handle-height: 27px;
    --handle-max-height: auto;
    --handle-spacing: 6px;

    --handle-border-radius: 4px;
    --handle-box-shadow: none;
  }

  ion-toggle::part(track) {
    height: 10px;
    width: 65px;

    /* 为 iOS 手柄溢出轨道高度所必需 */
    overflow: visible;
  }
</style>
```