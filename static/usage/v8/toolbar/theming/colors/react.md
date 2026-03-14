```tsx
import React from 'react';
import { IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonToolbar>
        <IonTitle>默认工具栏</IonTitle>
      </IonToolbar>
      <IonToolbar color="primary">
        <IonTitle>主要工具栏</IonTitle>
      </IonToolbar>
      <IonToolbar color="secondary">
        <IonTitle>次要工具栏</IonTitle>
      </IonToolbar>
      <IonToolbar color="tertiary">
        <IonTitle>第三工具栏</IonTitle>
      </IonToolbar>
      <IonToolbar color="success">
        <IonTitle>成功工具栏</IonTitle>
      </IonToolbar>
      <IonToolbar color="warning">
        <IonTitle>警告工具栏</IonTitle>
      </IonToolbar>
      <IonToolbar color="danger">
        <IonTitle>危险工具栏</IonTitle>
      </IonToolbar>
      <IonToolbar color="light">
        <IonTitle>浅色工具栏</IonTitle>
      </IonToolbar>
      <IonToolbar color="medium">
        <IonTitle>中等工具栏</IonTitle>
      </IonToolbar>
      <IonToolbar color="dark">
        <IonTitle>深色工具栏</IonTitle>
      </IonToolbar>
    </>
  );
}
export default Example;
```