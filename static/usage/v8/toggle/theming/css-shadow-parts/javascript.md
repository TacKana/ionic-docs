```html
<ion-toggle aria-label="Enable Notifications"></ion-toggle>
<ion-toggle checked="true" aria-label="Enable Notifications"></ion-toggle>

<style>
  ion-toggle {
    padding: 12px;

    --handle-width: 25px;
    --handle-height: 27px;
    --handle-max-height: auto;
    --handle-spacing: 6px;

    contain: none;
  }

  ion-toggle::part(track),
  ion-toggle.toggle-checked::part(track) {
    height: 10px;
    width: 65px;

    background: #ddd;

    /* 为 iOS 手柄溢出轨道高度所需 */
    overflow: visible;
  }

  ion-toggle::part(handle) {
    background: #eb7769;

    border-radius: 4px;
    box-shadow: none;
  }

  ion-toggle.toggle-checked::part(handle) {
    background: #95c34e;
  }
</style>
```