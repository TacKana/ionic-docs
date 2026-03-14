```tsx
import React from 'react';
import { IonButton, useIonAlert } from '@ionic/react';

function Example() {
  const [presentAlert] = useIonAlert();

  return (
    <IonButton
      onClick={() =>
        presentAlert({
          header: '请输入您的信息',
          buttons: ['确认'],
          inputs: [
            {
              placeholder: '姓名',
            },
            {
              placeholder: '昵称（最多 8 个字符）',
              attributes: {
                maxlength: 8,
              },
            },
            {
              type: 'number',
              placeholder: '年龄',
              min: 1,
              max: 100,
            },
            {
              type: 'textarea',
              placeholder: '简单介绍一下自己',
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