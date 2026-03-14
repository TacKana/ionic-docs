```tsx
import React, { useState } from 'react';
import { IonButton, useIonToast } from '@ionic/react';

function Example() {
  const [presentToast] = useIonToast();
  const [handlerMessage, setHandlerMessage] = useState('');
  const [roleMessage, setRoleMessage] = useState('');

  return (
    <>
      <IonButton
        onClick={() => {
          presentToast({
            message: '你好，世界！',
            duration: 3000,
            onDidDismiss: (e: CustomEvent) => setRoleMessage(`已关闭，操作角色为：${e.detail.role}`),
            buttons: [
              {
                text: '更多信息',
                role: 'info',
                handler: () => {
                  setHandlerMessage('已点击“更多信息”');
                },
              },
              {
                text: '关闭',
                role: 'cancel',
                handler: () => {
                  setHandlerMessage('已点击“关闭”');
                },
              },
            ],
          });
        }}
      >
        点击我
      </IonButton>
      <p>{handlerMessage}</p>
      <p>{roleMessage}</p>
    </>
  );
}
export default Example;
```