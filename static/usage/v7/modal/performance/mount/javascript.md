```html
<ion-header>
  <ion-toolbar>
    <ion-title>示例</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">打开模态框</ion-button>
  <ion-modal trigger="open-modal">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button id="close">关闭</ion-button>
        </ion-buttons>
        <ion-title>模态框</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding"> 这段内容在模态框创建时就已挂载。 </ion-content>
  </ion-modal>
</ion-content>

<script>
  var modal = document.querySelector('ion-modal');

  var closeBtn = document.querySelector('#close');
  closeBtn.addEventListener('click', () => close());

  var close = () => {
    modal.dismiss();
  };
</script>
```