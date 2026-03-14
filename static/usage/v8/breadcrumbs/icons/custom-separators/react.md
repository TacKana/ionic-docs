```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from '@ionic/react';
import { arrowForwardCircle } from 'ionicons/icons';

function Example() {
  return (
    <IonBreadcrumbs>
      <IonBreadcrumb href="#home">
        首页
        <IonIcon slot="separator" icon={arrowForwardCircle}></IonIcon>
      </IonBreadcrumb>
      <IonBreadcrumb href="#electronics">
        电子产品
        <IonIcon slot="separator" icon={arrowForwardCircle}></IonIcon>
      </IonBreadcrumb>
      <IonBreadcrumb href="#cameras">
        相机
        <IonIcon slot="separator" icon={arrowForwardCircle}></IonIcon>
      </IonBreadcrumb>
      <IonBreadcrumb href="#film">
        胶片
        <IonIcon slot="separator" icon={arrowForwardCircle}></IonIcon>
      </IonBreadcrumb>
    </IonBreadcrumbs>
  );
}
export default Example;
```