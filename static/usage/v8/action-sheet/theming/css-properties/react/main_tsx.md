```tsx
import React from 'react';
import { IonActionSheet, IonButton } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonButton id="open-action-sheet">打开</IonButton>
      <IonActionSheet
        trigger="open-action-sheet"
        className="my-custom-class"
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
      ></IonActionSheet>
    </>
  );
}
export default Example;
```