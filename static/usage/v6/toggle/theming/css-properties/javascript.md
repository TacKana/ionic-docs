```html
<ion-toggle></ion-toggle>
<ion-toggle checked="true"></ion-toggle>

<style>
  ion-toggle {
    height: 10px;
    width: 65px;

    padding: 12px;

    --background: #ddd;
    --background-checked: #ddd;

    --handle-background: #eb7769;
    --handle-background-checked: #95c34e;

    --handle-width: 25px;
    --handle-height: 27px;
    --handle-max-height: auto;
    --handle-spacing: 6px;

    --handle-border-radius: 4px;
    --handle-box-shadow: none;

    /* 为iOS手柄溢出轨道高度所必需 */
    overflow: visible;
    contain: none;
  }
</style>
```