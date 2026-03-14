```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <IonBreadcrumbs>
      <IonBreadcrumb href="#home">首页</IonBreadcrumb>
      <IonBreadcrumb href="#electronics">电子产品</IonBreadcrumb>
      <IonBreadcrumb href="#cameras">相机</IonBreadcrumb>
      <IonBreadcrumb href="#film">胶片</IonBreadcrumb>
    </IonBreadcrumbs>
  );
}
export default Example;
```