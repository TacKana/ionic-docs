```tsx
import React from 'react';
import { IonButton, useIonToast } from '@ionic/react';

function Example() {
  const [present] = useIonToast();

  const presentToast = (position: 'top' | 'middle' | 'bottom') => {
    present({
      message: '你好世界！',
      duration: 1500,
      position: position,
    });
  };

  return (
    <>
      <IonButton expand="block" onClick={() => presentToast('top')}>
        在顶部显示提示
      </IonButton>
      <IonButton expand="block" onClick={() => presentToast('middle')}>
        在中间显示提示
      </IonButton>
      <IonButton expand="block" onClick={() => presentToast('bottom')}>
        在底部显示提示
      </IonButton>
    </>
  );
}
export default Example;
```