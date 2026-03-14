```tsx
import React from 'react';
import { IonActionSheet, IonButton } from '@ionic/react';

function Example() {
  return (
    <>
      <IonButton id="open-action-sheet">打开</IonButton>
      <IonActionSheet
        trigger="open-action-sheet"
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
      ></IonActionSheet>
    </>
  );
}
export default Example;
```