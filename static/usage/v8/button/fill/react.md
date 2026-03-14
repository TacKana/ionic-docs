```tsx
import React from 'react';
import { IonButton } from '@ionic/react';

function Example() {
  return (
    <>
      <IonButton>默认样式</IonButton>
      <IonButton fill="clear">透明填充</IonButton>
      <IonButton fill="outline">轮廓边框</IonButton>
      <IonButton fill="solid">实体填充</IonButton>
    </>
  );
}
export default Example;
```