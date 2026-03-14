```tsx
import React from 'react';
import { IonButton, useIonActionSheet } from '@ionic/react';

import './main.css';

function Example() {
  const [present] = useIonActionSheet();

  return (
    <IonButton
      onClick={() =>
        present({
          header: '示例标题',
          subHeader: '示例副标题',
          cssClass: 'my-custom-class',
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