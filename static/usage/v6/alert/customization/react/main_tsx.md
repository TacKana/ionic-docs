```tsx
import React from 'react';
import { IonButton, useIonAlert } from '@ionic/react';

import './main.css';

function Example() {
  const [presentAlert] = useIonAlert();

  return (
    <IonButton
      onClick={() =>
        presentAlert({
          header: '确认操作',
          cssClass: 'custom-alert',
          buttons: [
            {
              text: '取消',
              cssClass: 'alert-button-cancel',
            },
            {
              text: '确认',
              cssClass: 'alert-button-confirm',
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