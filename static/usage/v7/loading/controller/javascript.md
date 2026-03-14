```html
<ion-button onclick="showLoading()">显示加载中</ion-button>

<script>
  var showLoading = async () => {
    const loading = await loadingController.create({
      message: '将在 3 秒后关闭...',
      duration: 3000,
    });

    loading.present();
  };
</script>
```