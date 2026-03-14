```tsx
import React from 'react';
import { IonButton } from '@ionic/react';

function Example() {
  return (
    <>
      <IonButton>默认</IonButton>
      <IonButton fill="clear">透明</IonButton>
      <IonButton fill="outline">轮廓</IonButton>
      <IonButton fill="solid">实心</IonButton>
    </>
  );
}
export default Example;
```