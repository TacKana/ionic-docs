```tsx
import React from 'react';
import { IonButton, useIonToast } from '@ionic/react';

function Example() {
  const [present] = useIonToast();

  const presentToast = (position: 'top' | 'middle' | 'bottom') => {
    present({
      message: 'Hello World!',
      duration: 1500,
      position: position,
    });
  };

  return (
    <>
      <IonButton expand="block" onClick={() => presentToast('top')}>
        顶部显示 Toast
      </IonButton>
      <IonButton expand="block" onClick={() => presentToast('middle')}>
        中间显示 Toast
      </IonButton>
      <IonButton expand="block" onClick={() => presentToast('bottom')}>
        底部显示 Toast
      </IonButton>
    </>
  );
}
export default Example;
```