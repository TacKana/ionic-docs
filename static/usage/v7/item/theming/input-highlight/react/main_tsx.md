```tsx
import React from 'react';
import { IonInput, IonItem, IonLabel } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonItem lines="full" class="item-has-focus ion-touched">
        <IonLabel position="stacked">自定义输入高亮：聚焦状态</IonLabel>
        <IonInput></IonInput>
      </IonItem>

      <IonItem lines="full" class="item-has-focus ion-touched ion-valid">
        <IonLabel position="stacked">自定义输入高亮：聚焦且有效</IonLabel>
        <IonInput></IonInput>
      </IonItem>

      <IonItem lines="full" class="item-has-focus ion-touched ion-invalid">
        <IonLabel position="stacked">自定义输入高亮：聚焦且无效</IonLabel>
        <IonInput></IonInput>
      </IonItem>
    </>
  );
}
export default Example;
```