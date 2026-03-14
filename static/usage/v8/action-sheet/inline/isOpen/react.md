```tsx
import React, { useState } from 'react';
import { IonActionSheet, IonButton } from '@ionic/react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IonButton onClick={() => setIsOpen(true)}>打开</IonButton>
      <IonActionSheet
        isOpen={isOpen}
        header="操作"
        buttons={[
          {
            text: '删除',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: '分享',
            data: {
              action: 'share',
            },
          },
          {
            text: '取消',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
        onDidDismiss={() => setIsOpen(false)}
      ></IonActionSheet>
    </>
  );
}
export default Example;
```