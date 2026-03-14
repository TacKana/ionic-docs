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
    .direction('alternate')
    .fromTo('background', 'blue', 'var(--background)');
</script>

<style>
  ion-card {
    color: white;
    opacity: 0.5;
    background: blue;
    margin: 10px;

    --background: red;
  }

  @media (prefers-color-scheme: dark) {
    ion-card {
      --background: green;
    }
  }
</style>
```