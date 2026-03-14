```tsx
import React from 'react';
import { IonButton, useIonToast } from '@ionic/react';

import './main.css';

function Example() {
  const [presentToast] = useIonToast();

  return (
    <IonButton
      onClick={() =>
        presentToast({
          message: '你好，风格化世界！',
          duration: 3000,
          cssClass: 'custom-toast',
          buttons: [
            {
              text: '关闭',
              role: 'cancel',
            },
          ],
        })
      }
    >
      点击我
    </IonButton>
  );
}
export default Example;
```