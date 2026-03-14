```css
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

  /* iOS 设备上，为使开关手柄能超出轨道高度显示，此设置是必需的 */
  overflow: visible;
  contain: none;
}
```