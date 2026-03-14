```tsx
import React from 'react';
import { IonAlert, IonButton } from '@ionic/react';

function Example() {
  return (
    <>
      <IonButton id="present-alert">点击我</IonButton>
      <IonAlert
        header="警告！"
        trigger="present-alert"
        buttons={[
          {
            text: '取消',
            role: 'cancel',
            handler: () => {
              console.log('Alert canceled');
            },
          },
          {
            text: '确认',
            role: 'confirm',
            handler: () => {
              console.log('Alert confirmed');
            },
          },
        ]}
        onDidDismiss={({ detail }) => console.log(`Dismissed with role: ${detail.role}`)}
      ></IonAlert>
    </>
  );
}
export default Example;
```