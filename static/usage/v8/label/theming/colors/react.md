```tsx
import React from 'react';
import { IonLabel } from '@ionic/react';

function Example() {
  return (
    <>
      <IonLabel>默认</IonLabel>
      <IonLabel color="primary">主要</IonLabel>
      <IonLabel color="secondary">次要</IonLabel>
      <IonLabel color="tertiary">第三</IonLabel>
      <IonLabel color="success">成功</IonLabel>
      <IonLabel color="warning">警告</IonLabel>
      <IonLabel color="danger">危险</IonLabel>
      <IonLabel color="light">浅色</IonLabel>
      <IonLabel color="medium">中等</IonLabel>
      <IonLabel color="dark">深色</IonLabel>
    </>
  );
}
export default Example;
```