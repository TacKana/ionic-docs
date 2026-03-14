```tsx
import React from 'react';
import { IonButton, useIonAlert } from '@ionic/react';

function Example() {
  const [presentAlert] = useIonAlert();

  return (
    <IonButton
      onClick={() =>
        presentAlert({
          header: '选择你喜欢的颜色',
          buttons: ['确定'],
          inputs: [
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
          ],
        })
      }
    >
      点击我
    </IonButton>
  );
}
export default Example;
```