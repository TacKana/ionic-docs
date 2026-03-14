```tsx
import React from 'react';
import { IonActionSheet, IonButton } from '@ionic/react';
import type { OverlayEventDetail } from '@ionic/core';

import './main.css';

function Example() {
  const logResult = (result: OverlayEventDetail) => {
    console.log(JSON.stringify(result, null, 2));
  };

  return (
    <div className="container">
      <IonButton id="open-action-sheet">打开</IonButton>
      <IonActionSheet
        trigger="open-action-sheet"
        header="示例标题"
        subHeader="示例副标题"
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
        onDidDismiss={({ detail }) => logResult(detail)}
      ></IonActionSheet>
    </div>
  );
}
export default Example;
```