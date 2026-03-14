```html
<ion-header>
  <ion-toolbar>
    <ion-title>内联模态框</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button expand="block" onclick="modal.isOpen = true">打开</ion-button>
  <ion-modal>
    <ion-header>
      <ion-toolbar>
        <ion-title>模态框</ion-title>
        <ion-buttons slot="end">
          <ion-button onclick="modal.isOpen = false">关闭</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <p>
        这是一段示例文本，用于展示模态框的内容区域。你可以在这里放置任何需要展示的信息或组件。
      </p>
    </ion-content>
  </ion-modal>
</ion-content>

<script>
  var modal = document.querySelector('ion-modal');
</script>
```