```tsx
import React from 'react';
import { IonToggle } from '@ionic/react';

function Example() {
  return (
    <>
      <IonToggle>默认开关</IonToggle>
      <br />
      <br />
      <IonToggle checked={true}>已选中开关</IonToggle>
      <br />
      <br />
      <IonToggle disabled={true}>禁用开关</IonToggle>
      <br />
      <br />
      <IonToggle checked={true} disabled={true}>
        禁用且已选中开关
      </IonToggle>
    </>
  );
}
export default Example;
```