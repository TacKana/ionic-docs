```tsx
import React from 'react';
import { IonButton, useIonLoading } from '@ionic/react';
function Example() {
  /**
   * 此示例未使用 `useIonLoading` 返回的 dismiss 方法，
   * 但该方法可用于更复杂的场景。
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
      显示加载中
    </IonButton>
  );
}
export default Example;
```