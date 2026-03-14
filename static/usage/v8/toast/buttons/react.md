```tsx
import React from 'react';
import { IonButton, IonToast } from '@ionic/react';

function Example() {
  return (
    <>
      <IonButton id="open-toast">打开 Toast</IonButton>
      <IonToast
        trigger="open-toast"
        message="你好，世界！"
        duration={3000}
        buttons={[
          {
            text: '更多信息',
            role: 'info',
            handler: () => {
              console.log('More Info clicked');
            },
          },
          {
            text: '关闭',
            role: 'cancel',
            handler: () => {
              console.log('Dismiss clicked');
            },
          },
        ]}
        onDidDismiss={(e: CustomEvent) => console.log(`Dismissed with role: ${e.detail.role}`)}
      ></IonToast>
    </>
  );
}
export default Example;
```