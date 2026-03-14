```tsx
import React from 'react';
import { IonItem, IonLabel } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem href="#">
        <IonLabel>锚点项目</IonLabel>
      </IonItem>

      <IonItem href="#" disabled={true}>
        <IonLabel>已禁用的锚点项目</IonLabel>
      </IonItem>

      <IonItem button>
        <IonLabel>按钮项目</IonLabel>
      </IonItem>

      <IonItem button disabled={true}>
        <IonLabel>已禁用的按钮项目</IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```