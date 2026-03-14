```tsx
import React, { useState } from 'react';
import { IonAlert, IonButton } from '@ionic/react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IonButton onClick={() => setIsOpen(true)}>点击我</IonButton>
      <IonAlert
        isOpen={isOpen}
        header="标题宜简短"
        subHeader="副标题可选"
        message="提示信息应为一句简短、完整的句子。"
        buttons={['操作']}
        onDidDismiss={() => setIsOpen(false)}
      ></IonAlert>
    </>
  );
}
export default Example;
```