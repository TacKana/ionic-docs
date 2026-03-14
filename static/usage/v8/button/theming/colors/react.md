```tsx
import React from 'react';
import { IonButton } from '@ionic/react';

function Example() {
  return (
    <>
      <IonButton>默认</IonButton>
      <IonButton color="primary">主色调</IonButton>
      <IonButton color="secondary">次要色调</IonButton>
      <IonButton color="tertiary">第三色调</IonButton>
      <IonButton color="success">成功</IonButton>
      <IonButton color="warning">警告</IonButton>
      <IonButton color="danger">危险</IonButton>
      <IonButton color="light">浅色</IonButton>
      <IonButton color="medium">中等</IonButton>
      <IonButton color="dark">深色</IonButton>
    </>
  );
}
export default Example;
```