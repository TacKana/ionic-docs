```tsx
import React from 'react';
import { IonToggle } from '@ionic/react';

function Example() {
  return (
    <>
      <IonToggle labelPlacement="stacked" alignment="start">
        起始对齐
      </IonToggle>
      <br />
      <br />
      <IonToggle labelPlacement="stacked" alignment="center">
        居中对齐
      </IonToggle>
    </>
  );
}
export default Example;
```