```tsx
import React from 'react';
import { IonAlert, IonButton } from '@ionic/react';

function Example() {
  return (
    <>
      <IonButton id="present-alert">点击我</IonButton>
      <IonAlert
        trigger="present-alert"
        header="请输入你的信息"
        buttons={['确认']}
        inputs={[
          {
            placeholder: '姓名',
          },
          {
            placeholder: '昵称（最多8个字符）',
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
        ]}
      ></IonAlert>
    </>
  );
}
export default Example;
```