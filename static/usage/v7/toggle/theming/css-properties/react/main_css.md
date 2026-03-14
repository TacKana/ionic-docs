```css
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

  /* iOS 设备上，为了使手柄能够超出轨道高度显示，此属性是必需的 */
  overflow: visible;
}
```