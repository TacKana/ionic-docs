```css
ion-toggle {
  height: 10px;
  width: 65px;

  padding: 12px;

  --handle-width: 25px;
  --handle-height: 27px;
  --handle-max-height: auto;
  --handle-spacing: 6px;

  /* 在 iOS 上使手柄能够溢出轨道的高度 */
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