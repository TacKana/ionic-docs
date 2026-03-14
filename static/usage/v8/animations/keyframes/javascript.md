```html
<ion-card id="card" style="width: 80px; --width: 160px;">
  <ion-card-content>卡片</ion-card-content>
</ion-card>
<ion-button onclick="animation.play()">播放</ion-button>
<ion-button onclick="animation.pause()">暂停</ion-button>
<ion-button onclick="animation.stop()">停止</ion-button>

<script>
  var animation = createAnimation()
    .addElement(document.querySelector('#card'))
    .duration(3000)
    .iterations(Infinity)
    .keyframes([
      { offset: 0, width: '80px' },
      { offset: 0.72, width: 'var(--width)' },
      { offset: 1, width: '240px' },
    ]);
</script>
```