```tsx
import React from 'react';
import { IonButton, IonToast } from '@ionic/react';

function Example() {
  return (
    <>
      <IonButton id="open-toast">打开提示框</IonButton>
      <IonToast
        trigger="open-toast"
        message="你好，世界！"
        duration={3000}
        buttons={[
          {
            text: '更多信息',
            role: 'info',
            handler: () => {
              console.log('更多信息被点击');
            },
          },
          {
            text: '关闭',
            role: 'cancel',
            handler: () => {
              console.log('关闭被点击');
            },
          },
        ]}
        onDidDismiss={(e: CustomEvent) => console.log(`提示框关闭，角色：${e.detail.role}`)}
      ></IonToast>
    </>
  );
}
export default Example;
```