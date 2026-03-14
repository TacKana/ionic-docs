```tsx
import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
function Example() {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>菜单内容</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">这里是菜单内容。</IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>菜单</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">点击工具栏中的按钮以打开菜单。</IonContent>
      </IonPage>
    </>
  );
}
export default Example;
```