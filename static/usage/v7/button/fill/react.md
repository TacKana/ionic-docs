```tsx
import React from 'react';
import { IonButton } from '@ionic/react';

function Example() {
  return (
    <>
      <IonButton>默认样式</IonButton>
      <IonButton fill="clear">透明填充</IonButton>
      <IonButton fill="outline">描边样式</IonButton>
      <IonButton fill="solid">实心填充</IonButton>
    </>
  );
}
export default Example;
```