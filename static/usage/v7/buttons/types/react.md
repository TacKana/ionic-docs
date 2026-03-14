```tsx
import React from 'react';
import { IonBackButton, IonButton, IonButtons, IonIcon, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonToolbar>
        <IonButtons slot="secondary">
          <IonButton size="large">收藏</IonButton>
        </IonButtons>
        <IonTitle>默认按钮</IonTitle>
        <IonButtons slot="primary">
          <IonButton>删除</IonButton>
        </IonButtons>
      </IonToolbar>

      <IonToolbar>
        <IonButtons slot="secondary">
          <IonButton>
            <IonIcon slot="icon-only" icon={personCircle}></IonIcon>
          </IonButton>
          <IonButton>
            <IonIcon slot="icon-only" icon={search}></IonIcon>
          </IonButton>
        </IonButtons>
        <IonButtons slot="primary">
          <IonButton>
            <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
          </IonButton>
        </IonButtons>
        <IonTitle>图标按钮</IonTitle>
      </IonToolbar>

      <IonToolbar>
        <IonButtons slot="secondary">
          <IonButton fill="solid">
            <IonIcon slot="start" icon={personCircle}></IonIcon>
            联系人
          </IonButton>
        </IonButtons>
        <IonButtons slot="primary">
          <IonButton fill="solid">
            帮助
            <IonIcon slot="end" icon={helpCircle}></IonIcon>
          </IonButton>
        </IonButtons>
        <IonTitle>实心按钮</IonTitle>
      </IonToolbar>

      <IonToolbar>
        <IonButtons slot="secondary">
          <IonButton fill="outline">
            <IonIcon slot="start" icon={star}></IonIcon>
            收藏
          </IonButton>
        </IonButtons>
        <IonButtons slot="primary">
          <IonButton fill="outline">
            编辑
            <IonIcon slot="end" icon={create}></IonIcon>
          </IonButton>
        </IonButtons>
        <IonTitle>轮廓按钮</IonTitle>
      </IonToolbar>

      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="#"></IonBackButton>
        </IonButtons>
        <IonTitle>返回按钮</IonTitle>
      </IonToolbar>

      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton autoHide={false}></IonMenuButton>
        </IonButtons>
        <IonTitle>菜单按钮</IonTitle>
      </IonToolbar>
    </>
  );
}
export default Example;
```