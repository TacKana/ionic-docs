```tsx
import React from 'react';
import { IonBadge, IonItem, IonLabel, IonList } from '@ionic/react';
function Example() {
  return (
    <IonList>
      <IonItem>
        <IonBadge slot="start">11</IonBadge>
        <IonLabel>徽章位于起始插槽</IonLabel>
      </IonItem>
      <IonItem>
        <IonBadge slot="end">22</IonBadge>
        <IonLabel>徽章位于结束插槽</IonLabel>
      </IonItem>
    </IonList>
  );
}
export default Example;
```