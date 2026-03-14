```html
<ion-datetime>
  <ion-buttons slot="buttons">
    <ion-button color="danger" onclick="datetime.reset()">重置</ion-button>
    <ion-button color="primary" onclick="datetime.cancel()">取消</ion-button>
    <ion-button color="primary" onclick="datetime.confirm()">确认</ion-button>
  </ion-buttons>
</ion-datetime>

<script>
  var datetime = document.querySelector('ion-datetime');
</script>
```