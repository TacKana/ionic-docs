```tsx
import React from 'react';
import { IonLabel, IonListHeader } from '@ionic/react';

function Example() {
  return (
    <>
      <IonListHeader>
        <IonLabel>默认</IonLabel>
      </IonListHeader>
      <IonListHeader color="primary">
        <IonLabel>主要</IonLabel>
      </IonListHeader>
      <IonListHeader color="secondary">
        <IonLabel>次要</IonLabel>
      </IonListHeader>
      <IonListHeader color="tertiary">
        <IonLabel>第三</IonLabel>
      </IonListHeader>
      <IonListHeader color="success">
        <IonLabel>成功</IonLabel>
      </IonListHeader>
      <IonListHeader color="warning">
        <IonLabel>警告</IonLabel>
      </IonListHeader>
      <IonListHeader color="danger">
        <IonLabel>危险</IonLabel>
      </IonListHeader>
      <IonListHeader color="light">
        <IonLabel>浅色</IonLabel>
      </IonListHeader>
      <IonListHeader color="medium">
        <IonLabel>中等</IonLabel>
      </IonListHeader>
      <IonListHeader color="dark">
        <IonLabel>深色</IonLabel>
      </IonListHeader>
    </>
  );
}
export default Example;
```