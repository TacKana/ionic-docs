```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';
function Example() {
  return (
    <>
      <div>折叠前显示 2 项</div>
      <IonBreadcrumbs maxItems={4} itemsBeforeCollapse={2}>
        <IonBreadcrumb href="#home">首页</IonBreadcrumb>
        <IonBreadcrumb href="#electronics">电子产品</IonBreadcrumb>
        <IonBreadcrumb href="#photography">摄影</IonBreadcrumb>
        <IonBreadcrumb href="#cameras">相机</IonBreadcrumb>
        <IonBreadcrumb href="#film">胶片</IonBreadcrumb>
        <IonBreadcrumb href="#35mm">35 毫米</IonBreadcrumb>
      </IonBreadcrumbs>

      <div className="ion-margin-top">折叠前显示 0 项</div>
      <IonBreadcrumbs maxItems={4} itemsBeforeCollapse={0}>
        <IonBreadcrumb href="#home">首页</IonBreadcrumb>
        <IonBreadcrumb href="#electronics">电子产品</IonBreadcrumb>
        <IonBreadcrumb href="#photography">摄影</IonBreadcrumb>
        <IonBreadcrumb href="#cameras">相机</IonBreadcrumb>
        <IonBreadcrumb href="#film">胶片</IonBreadcrumb>
        <IonBreadcrumb href="#35mm">35 毫米</IonBreadcrumb>
      </IonBreadcrumbs>

      <div className="ion-margin-top">折叠后显示 2 项</div>
      <IonBreadcrumbs maxItems={4} itemsAfterCollapse={2}>
        <IonBreadcrumb href="#home">首页</IonBreadcrumb>
        <IonBreadcrumb href="#electronics">电子产品</IonBreadcrumb>
        <IonBreadcrumb href="#photography">摄影</IonBreadcrumb>
        <IonBreadcrumb href="#cameras">相机</IonBreadcrumb>
        <IonBreadcrumb href="#film">胶片</IonBreadcrumb>
        <IonBreadcrumb href="#35mm">35 毫米</IonBreadcrumb>
      </IonBreadcrumbs>

      <div className="ion-margin-top">折叠前显示 2 项，折叠后显示 2 项</div>
      <IonBreadcrumbs maxItems={4} itemsBeforeCollapse={2} itemsAfterCollapse={2}>
        <IonBreadcrumb href="#home">首页</IonBreadcrumb>
        <IonBreadcrumb href="#electronics">电子产品</IonBreadcrumb>
        <IonBreadcrumb href="#photography">摄影</IonBreadcrumb>
        <IonBreadcrumb href="#cameras">相机</IonBreadcrumb>
        <IonBreadcrumb href="#film">胶片</IonBreadcrumb>
        <IonBreadcrumb href="#35mm">35 毫米</IonBreadcrumb>
      </IonBreadcrumbs>
    </>
  );
}
export default Example;
```