```tsx
import React from 'react';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';

function Example() {
  return (
    <>
      <IonSegment value="default">
        <IonSegmentButton value="default">
          <IonLabel>默认</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>分段</IonLabel>
        </IonSegmentButton>
      </IonSegment>

      <IonSegment disabled={true} value="disabled">
        <IonSegmentButton value="disabled">
          <IonLabel>已禁用</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>分段</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </>
  );
}
export default Example;
```