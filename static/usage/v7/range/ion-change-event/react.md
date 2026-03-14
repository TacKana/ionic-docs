```tsx
import React from 'react';
import { IonRange } from '@ionic/react';

function Example() {
  return (
    <IonRange
      aria-label="范围选择器，带 ionChange 事件"
      onIonChange={({ detail }) => console.log('ionChange 事件触发值：' + detail.value)}
    ></IonRange>
  );
}
export default Example;
```