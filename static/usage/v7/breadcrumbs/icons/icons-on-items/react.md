```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs, IonIcon, IonLabel } from '@ionic/react';
import { camera, film, flash, home } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonLabel>图标在起始位置</IonLabel>
      <IonBreadcrumbs>
        <IonBreadcrumb href="#home">
          <IonIcon slot="start" icon={home}></IonIcon>
          首页
        </IonBreadcrumb>
        <IonBreadcrumb href="#electronics">
          <IonIcon slot="start" icon={flash}></IonIcon>
          电子设备
        </IonBreadcrumb>
        <IonBreadcrumb href="#cameras">
          <IonIcon slot="start" icon={camera}></IonIcon>
          相机
        </IonBreadcrumb>
        <IonBreadcrumb href="#film">
          <IonIcon slot="start" icon={film}></IonIcon>
          胶片
        </IonBreadcrumb>
      </IonBreadcrumbs>

      <IonLabel class="ion-margin-top">图标在结束位置</IonLabel>
      <IonBreadcrumbs>
        <IonBreadcrumb href="#home">
          首页
          <IonIcon slot="end" icon={home}></IonIcon>
        </IonBreadcrumb>
        <IonBreadcrumb href="#electronics">
          电子设备
          <IonIcon slot="end" icon={flash}></IonIcon>
        </IonBreadcrumb>
        <IonBreadcrumb href="#cameras">
          相机
          <IonIcon slot="end" icon={camera}></IonIcon>
        </IonBreadcrumb>
        <IonBreadcrumb href="#film">
          胶片
          <IonIcon slot="end" icon={film}></IonIcon>
        </IonBreadcrumb>
      </IonBreadcrumbs>
    </>
  );
}
export default Example;
```