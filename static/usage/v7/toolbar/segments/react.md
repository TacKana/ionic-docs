```tsx
import React from 'react';
import { IonHeader, IonLabel, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <IonHeader>
      <IonToolbar>
        <IonSegment value="all">
          <IonSegmentButton value="all">
            <IonLabel>全部</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="favorites">
            <IonLabel>收藏</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonToolbar>
    </IonHeader>
  );
}
export default Example;
```