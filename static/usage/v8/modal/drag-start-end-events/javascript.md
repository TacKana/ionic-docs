```html
<ion-header>
  <ion-toolbar>
    <ion-title>App</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">打开底部模态框</ion-button>

  <ion-modal trigger="open-modal" initial-breakpoint="0.25">
    <ion-content class="ion-padding">
      <div class="ion-margin-top">
        <ion-label>拖拽手柄可调整顶部栏的可见性。</ion-label>
      </div>
    </ion-content>
  </ion-modal>
</ion-content>

<script>
  const modal = document.querySelector('ion-modal');
  const header = document.querySelector('ion-header');

  modal.breakpoints = [0, 0.25, 0.5, 0.75, 1];

  modal.addEventListener('ionDragStart', () => {
    console.log('开始拖拽');

    header.style.opacity = 0;
  });

  modal.addEventListener('ionDragEnd', (event) => {
    console.log('拖拽结束');

    header.style.opacity = 1;
  });
</script>
```