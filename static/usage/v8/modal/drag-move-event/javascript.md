```html
<ion-header>
  <ion-toolbar>
    <ion-title>App</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">打开底部模态框</ion-button>

  <ion-modal trigger="open-modal" initial-breakpoint="0.25">
    <ion-content class="ion-padding">
      <div class="ion-margin-top">
        <ion-label>拖动手柄以调整标题栏的可见性。</ion-label>
      </div>
    </ion-content>
  </ion-modal>
</ion-content>

<script>
  const modal = document.querySelector('ion-modal');
  const header = document.querySelector('ion-header');
  // 将当前吸附断点赋值给初始断点，以便在拖动过程中跟踪变化
  let currentSnap = 0.25;
  modal.breakpoints = [0, 0.25, 0.5, 0.75, 1];

  modal.addEventListener('ionDragMove', (event) => {
    // `progress` 是从 1（顶部）到 0（底部）的值
    // `snapBreakpoint` 告诉我们拖动结束后模态框将吸附到哪个断点
    const { progress, snapBreakpoint } = event.detail;

    if (currentSnap !== snapBreakpoint) {
      currentSnap = snapBreakpoint;

      console.log('当前吸附断点:', snapBreakpoint);
    }

    /**
     * 反比关系：
     * 1.0 进度 = 0 不透明度
     * 0 进度 = 1.0 不透明度
     */
    const currentOpacity = 1 - progress;

    header.style.opacity = currentOpacity;
  });

  modal.addEventListener('ionDragEnd', (event) => {
    // `snapBreakpoint` 告诉我们拖动结束后模态框将吸附到哪个断点
    const { progress, snapBreakpoint } = event.detail;

    /**
     * 如果模态框吸附到关闭状态（0），则重置样式。
     */
    if (snapBreakpoint === 0) {
      header.style.removeProperty('opacity');
      return;
    }

    // 平滑过渡到最终静止状态的不透明度
    header.style.transition = 'opacity 0.4s ease';
    // 最终不透明度与静止进度的倒数相匹配
    header.style.opacity = 1 - progress;
  });

  /**
   * 如果用户关闭模态框（例如点击背景遮罩），则重置样式。
   */
  modal.addEventListener('willDismiss', (event) => {
    // 模态框关闭时重置样式
    header.style.removeProperty('opacity');
    header.style.removeProperty('transition');
  });
</script>
```