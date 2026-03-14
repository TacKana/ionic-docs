```tsx
import React from 'react';
import { IonButton, useIonPicker } from '@ionic/react';

function Example() {
  const [present] = useIonPicker();

  const openPicker = async () => {
    present({
      columns: [
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
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
        },
        {
          text: '确认',
          handler: (value) => {
            console.log(`您选择的是: ${value.languages.value}`);
          },
        },
      ],
    });
  };

  return <IonButton onClick={openPicker}>打开</IonButton>;
}

export default Example;
```