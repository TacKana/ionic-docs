```html
<style>
  ion-card {
    position: absolute;

    left: 0;
    right: 0;

    user-select: none;
  }

  ion-card.active {
    box-shadow: var(--ion-color-warning) 0px 4px 16px;
  }
</style>

<ion-card>
  <ion-card-header>
    <ion-card-subtitle>平移屏幕</ion-card-subtitle>
  </ion-card-header>
  <ion-card-content>
    <p id="debug">交互后此处将显示手势信息。</p>
  </ion-card-content>
</ion-card>

<script>
  const p = document.querySelector('#debug');
  const target = document.querySelector('ion-content');
  const card = document.querySelector('ion-card');

  const onMove = (detail) => {
    const { type, currentX, deltaX, velocityX } = detail;
    p.innerHTML = `
    <div>类型: ${type}</div>
    <div>当前 X: ${currentX}</div>
    <div>X 轴变化量: ${deltaX}</div>
    <div>X 轴速度: ${velocityX}</div>`;
  };

  const onStart = () => {
    card.classList.add('active');
  };

  const onEnd = () => {
    card.classList.remove('active');
  };

  const gesture = createGesture({
    el: target,
    onStart,
    onMove,
    onEnd,
    gestureName: 'example',
  });

  gesture.enable();
</script>
```