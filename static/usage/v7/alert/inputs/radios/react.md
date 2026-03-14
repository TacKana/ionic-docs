```tsx
import React from 'react';
import { IonAlert, IonButton } from '@ionic/react';

function Example() {
  return (
    <>
      <IonButton id="present-alert">点击我</IonButton>
      <IonAlert
        trigger="present-alert"
        header="选择你最喜欢的颜色"
        buttons={['确认']}
        inputs={[
          {
            label: '红色',
            type: 'radio',
            value: 'red',
          },
          {
            label: '蓝色',
            type: 'radio',
            value: 'blue',
          },
          {
            label: '绿色',
            type: 'radio',
            value: 'green',
          },
        ]}
      ></IonAlert>
    </>
  );
}
export default Example;
```