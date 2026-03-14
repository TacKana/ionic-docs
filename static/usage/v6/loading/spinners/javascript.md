```html
<ion-button onclick="showLoading()">显示加载状态</ion-button>

<script>
  var showLoading = async () => {
    const loading = await loadingController.create({
      message: '加载中...',
      duration: 3000,
      spinner: 'circles',
    });

    loading.present();
  };
</script>
```