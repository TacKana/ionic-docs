```tsx
import React from 'react';
import { IonButton, useIonToast } from '@ionic/react';

function Example() {
  const [presentToast] = useIonToast();

  return (
    <>
      <IonButton
        onClick={() => {
          presentToast({
            duration: 3000,
            message: '这是一条包含长消息和按钮的提示，按钮会显示在下一行。',
            buttons: [{ text: '带长文本的操作按钮' }],
          });
        }}
      >
        打开基线布局提示
      </IonButton>
      <IonButton
        onClick={() => {
          presentToast({
            duration: 3000,
            message: '这是一条包含长消息和按钮的提示，按钮会显示在下一行。',
            buttons: [{ text: '带长文本的操作按钮' }],
            layout: 'stacked',
          });
        }}
      >
        打开堆叠布局提示
      </IonButton>
    </>
  );
}
export default Example;
```