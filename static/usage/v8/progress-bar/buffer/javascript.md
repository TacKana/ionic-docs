```html
<ion-progress-bar></ion-progress-bar>

<script>
  let buffer = 0.06;
  let progress = 0;

  let progressBar = document.querySelector('ion-progress-bar');
  progressBar.buffer = buffer;

  setInterval(() => {
    progressBar.buffer = buffer += 0.06;
    progressBar.value = progress += 0.06;

    // 当进度条达到 100% 时重置
    // 以便持续展示演示效果
    if (progress > 1) {
      setTimeout(() => {
        progressBar.buffer = buffer = 0.06;
        progressBar.value = progress = 0;
      }, 1000);
    }
  }, 1000);
</script>
```