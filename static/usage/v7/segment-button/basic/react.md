```tsx
import React from 'react';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';

function Example() {
  return (
    <>
      <IonSegment value="buttons">
        <IonSegmentButton value="default">
          <IonLabel>默认</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>分段</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="buttons">
          <IonLabel>按钮</IonLabel>
        </IonSegmentButton>
      </IonSegment>

      <IonSegment value="buttons">
        <IonSegmentButton value="disabled" disabled={true}>
          <IonLabel>禁用</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>分段</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="buttons">
          <IonLabel>按钮</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </>
  );
}
export default Example;
```