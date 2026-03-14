```tsx
import React from 'react';
import { IonButton, useIonLoading } from '@ionic/react';
function Example() {
  /**
   * 这个例子没有使用从 `useIonLoading` 返回的 dismiss 方法，
   * 但在更复杂的场景中，它可以派上用场。
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [present, dismiss] = useIonLoading();
  return (
    <IonButton
      onClick={() => {
        present({
          message: '3秒后自动关闭...',
          duration: 3000,
        });
      }}
    >
      显示加载动画
    </IonButton>
  );
}
export default Example;
```