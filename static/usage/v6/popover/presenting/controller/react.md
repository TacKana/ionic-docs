```tsx
import React, { useState } from 'react';
import { IonButton, IonContent, useIonPopover } from '@ionic/react';

const Popover = () => <IonContent className="ion-padding">你好，世界！</IonContent>;

function Example() {
  const [present, dismiss] = useIonPopover(Popover, {
    onDismiss: (data: any, role: string) => dismiss(data, role),
  });
  const [roleMsg, setRoleMsg] = useState('');

  return (
    <>
      <IonButton
        onClick={(e: any) =>
          present({
            event: e,
            onDidDismiss: (e: CustomEvent) => setRoleMsg(`弹出层已关闭，关闭角色为: ${e.detail.role}`),
          })
        }
      >
        点我
      </IonButton>
      <p>{roleMsg}</p>
    </>
  );
}
export default Example;
```