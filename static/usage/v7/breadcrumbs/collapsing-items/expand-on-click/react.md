```tsx
import React, { useState } from 'react';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';

function Example() {
  const [maxBreadcrumbs, setMaxBreadcrumbs] = useState<number | undefined>(4);

  return (
    <IonBreadcrumbs maxItems={maxBreadcrumbs} onIonCollapsedClick={() => setMaxBreadcrumbs(undefined)}>
      <IonBreadcrumb href="#home">首页</IonBreadcrumb>
      <IonBreadcrumb href="#electronics">电子产品</IonBreadcrumb>
      <IonBreadcrumb href="#photography">摄影设备</IonBreadcrumb>
      <IonBreadcrumb href="#cameras">相机</IonBreadcrumb>
      <IonBreadcrumb href="#film">胶卷</IonBreadcrumb>
      <IonBreadcrumb href="#35mm">35毫米</IonBreadcrumb>
    </IonBreadcrumbs>
  );
}
export default Example;
```