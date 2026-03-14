```tsx
import React from 'react';
import { IonButton, IonPicker } from '@ionic/react';

function Example() {
  return (
    <>
      <IonButton id="open-picker">打开</IonButton>
      <IonPicker
        trigger="open-picker"
        columns={[
          {
            name: 'languages',
            options: [
              {
                text: 'JavaScript',
                value: 'javascript',
              },
              {
                text: 'TypeScript',
                value: 'typescript',
              },
              {
                text: 'Rust',
                value: 'rust',
              },
              {
                text: 'C#',
                value: 'c#',
              },
            ],
          },
        ]}
        buttons={[
          {
            text: '取消',
            role: 'cancel',
          },
          {
            text: '确认',
            handler: (value) => {
              console.log(`你选择了：${value.languages.value}`);
            },
          },
        ]}
      ></IonPicker>
    </>
  );
}

export default Example;
```