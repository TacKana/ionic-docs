```tsx
import React, { useState } from 'react';
import { IonButton, useIonActionSheet } from '@ionic/react';
import type { OverlayEventDetail } from '@ionic/core';

import './main.css';

function Example() {
  const [present] = useIonActionSheet();
  const [result, setResult] = useState<OverlayEventDetail>();

  return (
    <div className="container">
      <IonButton
        onClick={() =>
          present({
            header: '示例标题',
            subHeader: '示例副标题',
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
            onDidDismiss: ({ detail }) => setResult(detail),
          })
        }
      >
        打开
      </IonButton>
      {result && <code>{JSON.stringify(result, null, 2)}</code>}
    </div>
  );
}
export default Example;
```