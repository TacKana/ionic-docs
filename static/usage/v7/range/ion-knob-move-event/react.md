```tsx
import React from 'react';
import { IonRange } from '@ionic/react';

function Example() {
  return (
    <IonRange
      aria-label="支持旋钮事件的滑动条"
      onIonKnobMoveStart={({ detail }) => console.log('ionKnobMoveStart:', detail.value)}
      onIonKnobMoveEnd={({ detail }) => console.log('ionKnobMoveEnd:', detail.value)}
    ></IonRange>
  );
}
export default Example;
```