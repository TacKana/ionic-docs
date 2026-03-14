```tsx
import React, { useState } from 'react';
import { IonButton, useIonAlert } from '@ionic/react';

function Example() {
  const [presentAlert] = useIonAlert();
  const [handlerMessage, setHandlerMessage] = useState('');
  const [roleMessage, setRoleMessage] = useState('');

  return (
    <>
      <IonButton
        onClick={() =>
          presentAlert({
            header: '警告！', // Alert!
            buttons: [
              {
                text: '取消', // Cancel
                role: 'cancel',
                handler: () => {
                  setHandlerMessage('警报已取消'); // Alert canceled
                },
              },
              {
                text: '确定', // OK
                role: 'confirm',
                handler: () => {
                  setHandlerMessage('警报已确认'); // Alert confirmed
                },
              },
            ],
            onDidDismiss: (e: CustomEvent) => setRoleMessage(`已关闭，角色: ${e.detail.role}`), // Dismissed with role: 
          })
        }
      >
        点击我 // Click Me
      </IonButton>
      <p>{handlerMessage}</p>
      <p>{roleMessage}</p>
    </>
  );
}
export default Example;
```