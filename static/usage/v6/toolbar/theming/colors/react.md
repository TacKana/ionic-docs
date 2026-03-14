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
        <IonTitle>主色工具栏</IonTitle>
      </IonToolbar>
      <IonToolbar color="secondary">
        <IonTitle>次要色工具栏</IonTitle>
      </IonToolbar>
      <IonToolbar color="tertiary">
        <IonTitle>第三色工具栏</IonTitle>
      </IonToolbar>
      <IonToolbar color="success">
        <IonTitle>成功状态工具栏</IonTitle>
      </IonToolbar>
      <IonToolbar color="warning">
        <IonTitle>警告状态工具栏</IonTitle>
      </IonToolbar>
      <IonToolbar color="danger">
        <IonTitle>危险状态工具栏</IonTitle>
      </IonToolbar>
      <IonToolbar color="light">
        <IonTitle>浅色工具栏</IonTitle>
      </IonToolbar>
      <IonToolbar color="medium">
        <IonTitle>中色工具栏</IonTitle>
      </IonToolbar>
      <IonToolbar color="dark">
        <IonTitle>深色工具栏</IonTitle>
      </IonToolbar>
    </>
  );
}
export default Example;
```