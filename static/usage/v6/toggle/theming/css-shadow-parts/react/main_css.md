```css
ion-toggle {
  height: 10px;
  width: 65px;

  padding: 12px;

  --handle-width: 25px;
  --handle-height: 27px;
  --handle-max-height: auto;
  --handle-spacing: 6px;

  /* 为 iOS 手柄溢出轨道高度所必需 */
  overflow: visible;
  contain: none;
}

ion-toggle::part(track),
ion-toggle.toggle-checked::part(track) {
  background: #ddd;
}

ion-toggle::part(handle) {
  background: #eb7769;

  border-radius: 4px;
  box-shadow: none;
}

ion-toggle.toggle-checked::part(handle) {
  background: #95c34e;
}
```