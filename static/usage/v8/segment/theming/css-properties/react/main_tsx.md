```tsx
import React from 'react';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonSegment value="custom">
        <IonSegmentButton value="custom">
          <IonLabel>自定义</IonLabel>
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