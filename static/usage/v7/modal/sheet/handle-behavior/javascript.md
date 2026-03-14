```html
<ion-header>
  <ion-toolbar>
    <ion-title>App</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">打开底部动作表模态框</ion-button>

  <ion-modal trigger="open-modal" initial-breakpoint="0.25" handle-behavior="cycle">
    <ion-content class="ion-padding">
      <div class="ion-margin-top">
        <ion-label>点击上方把手可以切换到下一个断点。</ion-label>
      </div>
    </ion-content>
  </ion-modal>
</ion-content>

<script>
  var modal = document.querySelector('ion-modal');

  modal.breakpoints = [0, 0.25, 0.5, 0.75];
</script>
```