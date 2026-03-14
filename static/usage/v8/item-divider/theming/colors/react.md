```tsx
import React from 'react';
import { IonItemDivider, IonLabel } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItemDivider>
        <IonLabel>默认</IonLabel>
      </IonItemDivider>
      <IonItemDivider color="primary">
        <IonLabel>主要</IonLabel>
      </IonItemDivider>
      <IonItemDivider color="secondary">
        <IonLabel>次要</IonLabel>
      </IonItemDivider>
      <IonItemDivider color="tertiary">
        <IonLabel>第三级</IonLabel>
      </IonItemDivider>
      <IonItemDivider color="success">
        <IonLabel>成功</IonLabel>
      </IonItemDivider>
      <IonItemDivider color="warning">
        <IonLabel>警告</IonLabel>
      </IonItemDivider>
      <IonItemDivider color="danger">
        <IonLabel>危险</IonLabel>
      </IonItemDivider>
      <IonItemDivider color="light">
        <IonLabel>浅色</IonLabel>
      </IonItemDivider>
      <IonItemDivider color="medium">
        <IonLabel>中等</IonLabel>
      </IonItemDivider>
      <IonItemDivider color="dark">
        <IonLabel>深色</IonLabel>
      </IonItemDivider>
    </>
  );
}
export default Example;
```