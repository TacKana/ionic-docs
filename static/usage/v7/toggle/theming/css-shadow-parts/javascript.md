```html
<ion-toggle aria-label="启用通知"></ion-toggle>
<ion-toggle checked="true" aria-label="启用通知"></ion-toggle>

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

    /* iOS 系统下，手柄需要溢出轨道高度时必需设置 */
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