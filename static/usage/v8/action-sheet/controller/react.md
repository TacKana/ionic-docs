```tsx
import React from 'react';
import { IonButton, useIonActionSheet } from '@ionic/react';

function Example() {
  const [present] = useIonActionSheet();

  return (
    <IonButton
      onClick={() =>
        present({
          header: '操作选项',
          buttons: [
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
          ],
        })
      }
    >
      打开
    </IonButton>
  );
}
export default Example;
```