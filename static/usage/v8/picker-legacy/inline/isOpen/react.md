```tsx
import React, { useState } from 'react';
import { IonButton, IonPickerLegacy } from '@ionic/react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IonButton onClick={() => setIsOpen(true)}>打开</IonButton>
      <IonPickerLegacy
        isOpen={isOpen}
        onDidDismiss={() => setIsOpen(false)}
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
              console.log(`您选择了：${value.languages.value}`);
            },
          },
        ]}
      ></IonPickerLegacy>
    </>
  );
}

export default Example;
```