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
        这是一段示例文本，用于演示模态框中的内容。Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
        reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui. Eaque,
        dicta.
      </p>
    </ion-content>
  </ion-modal>
</ion-content>

<script>
  var modal = document.querySelector('ion-modal');
</script>
```