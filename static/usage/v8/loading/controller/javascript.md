```html
<ion-button onclick="showLoading()">显示加载动画</ion-button>

<script>
  var showLoading = async () => {
    const loading = await loadingController.create({
      message: '将在3秒后自动关闭...',
      duration: 3000,
    });

    loading.present();
  };
</script>
```