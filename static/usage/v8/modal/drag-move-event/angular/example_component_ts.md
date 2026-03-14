```ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonLabel, IonModal, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import type { ModalDragEventDetail } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonLabel, IonModal, IonTitle, IonToolbar],
})
export class ExampleComponent {
  @ViewChild('header', { read: ElementRef })
  header!: ElementRef<HTMLIonHeaderElement>;
  // 将当前吸附断点赋值为初始断点，以便在拖拽过程中追踪变化
  currentSnap = 0.25;

  onDragMove(event: CustomEvent<ModalDragEventDetail>) {
    // `progress` 是从 1（顶部）到 0（底部）的值
    // `snapBreakpoint` 告诉我们拖拽结束后模态框将动画到哪个吸附点
    const { progress, snapBreakpoint } = event.detail;

    if (this.currentSnap !== snapBreakpoint) {
      this.currentSnap = snapBreakpoint as number;

      console.log('当前吸附断点：', snapBreakpoint);
    }

    const headerEl = this.header.nativeElement;
    /**
     * 反比关系：
     * 1.0 进度 = 0 不透明度
     * 0 进度 = 1.0 不透明度
     */
    const currentOpacity = 1 - progress;

    headerEl.style.opacity = currentOpacity.toString();
  }

  onDragEnd(event: CustomEvent<ModalDragEventDetail>) {
    // `progress` 是从 1（顶部）到 0（底部）的值
    // `snapBreakpoint` 告诉我们拖拽结束后模态框将动画到哪个吸附点
    const { progress, snapBreakpoint } = event.detail;
    const headerEl = this.header.nativeElement;

    /**
     * 如果模态框吸附到关闭状态（0），则重置样式。
     */
    if (snapBreakpoint === 0) {
      headerEl.style.removeProperty('opacity');
      headerEl.style.removeProperty('transition');
      return;
    }

    // 平滑过渡到最终静止状态的不透明度
    headerEl.style.transition = 'opacity 0.4s ease';
    // 最终不透明度与静止进度的倒数匹配
    headerEl.style.opacity = (1 - progress).toString();
  }

  /**
   * 如果用户关闭模态框（例如点击背景遮罩），重置样式。
   */
  onWillDismiss() {
    const headerEl = this.header.nativeElement;

    // 模态框关闭时重置样式
    headerEl.style.removeProperty('opacity');
    headerEl.style.removeProperty('transition');
  }
}
```