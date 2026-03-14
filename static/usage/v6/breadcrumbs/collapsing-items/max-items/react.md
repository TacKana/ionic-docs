```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';
function Example() {
  return (
    <IonBreadcrumbs maxItems={4}>
      <IonBreadcrumb href="#home">首页</IonBreadcrumb>
      <IonBreadcrumb href="#electronics">电子产品</IonBreadcrumb>
      <IonBreadcrumb href="#photography">摄影器材</IonBreadcrumb>
      <IonBreadcrumb href="#cameras">相机</IonBreadcrumb>
      <IonBreadcrumb href="#film">胶卷</IonBreadcrumb>
      <IonBreadcrumb href="#35mm">35毫米</IonBreadcrumb>
    </IonBreadcrumbs>
  );
}
export default Example;
```