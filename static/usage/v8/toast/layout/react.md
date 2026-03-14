```tsx
import React from 'react';
import { IonButton, IonToast } from '@ionic/react';

function Example() {
  return (
    <>
      <IonButton id="open-stacked-toast">打开堆叠布局 Toast</IonButton>
      <IonButton id="open-inline-toast">打开基线布局 Toast</IonButton>
      <IonToast
        trigger="open-inline-toast"
        message="这是一个长消息的 Toast，按钮显示在同一行。"
        duration={3000}
        buttons={[
          {
            text: 'Action With Long Text',
          },
        ]}
      ></IonToast>
      <IonToast
        trigger="open-stacked-toast"
        message="这是一个长消息的 Toast，按钮显示在下一行。"
        duration={3000}
        buttons={[
          {
            text: 'Action With Long Text',
          },
        ]}
        layout="stacked"
      ></IonToast>
    </>
  );
}
export default Example;
```