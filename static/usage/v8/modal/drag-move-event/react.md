```tsx
import React, { useRef } from 'react';
import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonLabel } from '@ionic/react';
import type { ModalDragEventDetail } from '@ionic/react';

function Example() {
  const header = useRef<HTMLIonHeaderElement>(null);
  // 将当前吸附断点赋值给初始断点，以便在拖动过程中跟踪变化
  const currentSnap = useRef(0.25);

  const onDragMove = (event: CustomEvent<ModalDragEventDetail>) => {
    // `progress` 是一个从 1（顶部）到 0（底部）的值
    // `snapBreakpoint` 告诉我们模态框在拖动结束后将动画到哪个吸附点
    const { progress, snapBreakpoint } = event.detail;
    const headerEl = header.current!;

    if (currentSnap.current !== snapBreakpoint) {
      currentSnap.current = snapBreakpoint as number;

      console.log('当前吸附断点:', snapBreakpoint);
    }

    /**
     * 反比关系：
     * 1.0 进度 = 0 不透明度
     * 0 进度 = 1.0 不透明度
     */
    const currentOpacity = 1 - progress;

    headerEl.style.opacity = currentOpacity.toString();
  };

  const onDragEnd = (event: CustomEvent<ModalDragEventDetail>) => {
    // `progress` 是一个从 1（顶部）到 0（底部）的值
    // `snapBreakpoint` 告诉我们模态框在拖动结束后将动画到哪个吸附点
    const { progress, snapBreakpoint } = event.detail;
    const headerEl = header.current!;

    /**
     * 如果模态框要吸附到关闭状态（0），则重置样式。
     */
    if (snapBreakpoint === 0) {
      headerEl.style.removeProperty('opacity');
      headerEl.style.removeProperty('transition');
      return;
    }

    // 平滑过渡到最终静止状态的不透明度
    headerEl.style.transition = 'opacity 0.4s ease';
    // 最终不透明度与静止状态的进度成反比
    headerEl.style.opacity = (1 - progress).toString();
  };

  /**
   * 如果用户关闭模态框（例如点击背景幕），则重置样式。
   */
  const onWillDismiss = () => {
    const headerEl = header.current!;

    // 模态框关闭时重置样式
    headerEl.style.removeProperty('opacity');
    headerEl.style.removeProperty('transition');
  };

  return (
    <IonPage>
      <IonHeader ref={header}>
        <IonToolbar>
          <IonTitle>App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="open-modal" expand="block">
          打开底部模态框
        </IonButton>
        <IonModal
          trigger="open-modal"
          initialBreakpoint={0.25}
          breakpoints={[0, 0.25, 0.5, 0.75, 1]}
          onIonDragMove={onDragMove}
          onIonDragEnd={onDragEnd}
          onWillDismiss={onWillDismiss}
        >
          <IonContent className="ion-padding">
            <div className="ion-margin-top">
              <IonLabel>拖动手柄来调整页眉的可见度。</IonLabel>
            </div>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```