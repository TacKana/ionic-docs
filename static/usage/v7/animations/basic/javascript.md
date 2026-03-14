```html
<ion-card id="card">
  <ion-card-content>卡片</ion-card-content>
</ion-card>

<ion-button onclick="animation.play()">播放</ion-button>
<ion-button onclick="animation.pause()">暂停</ion-button>
<ion-button onclick="animation.stop()">停止</ion-button>

<script>
  var animation = createAnimation()
    .addElement(document.querySelector('#card'))
    .duration(1500)
    .iterations(Infinity)
    .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
    .fromTo('opacity', '1', '0.2');
</script>
```