```tsx
import React from 'react';
import { IonItem, IonLabel } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem>
        <IonLabel>默认项目</IonLabel>
      </IonItem>
      <IonItem color="primary">
        <IonLabel>主要项目</IonLabel>
      </IonItem>
      <IonItem color="secondary">
        <IonLabel>次要项目</IonLabel>
      </IonItem>
      <IonItem color="tertiary">
        <IonLabel>第三级项目</IonLabel>
      </IonItem>
      <IonItem color="success">
        <IonLabel>成功项目</IonLabel>
      </IonItem>
      <IonItem color="warning">
        <IonLabel>警告项目</IonLabel>
      </IonItem>
      <IonItem color="danger">
        <IonLabel>危险项目</IonLabel>
      </IonItem>
      <IonItem color="light">
        <IonLabel>浅色项目</IonLabel>
      </IonItem>
      <IonItem color="medium">
        <IonLabel>中等项目</IonLabel>
      </IonItem>
      <IonItem color="dark">
        <IonLabel>深色项目</IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```