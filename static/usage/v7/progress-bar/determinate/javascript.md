```html
<ion-progress-bar></ion-progress-bar>

<script>
  let progress = 0;
  let progressBar = document.querySelector('ion-progress-bar');

  setInterval(() => {
    progressBar.value = progress += 0.01;

    // 当进度条达到 100% 时重置
    // 以持续展示演示效果
    if (progress > 1) {
      setTimeout(() => {
        progressBar.value = progress = 0;
      }, 1000);
    }
  }, 50);
</script>
```