```tsx
import React from 'react';
import { IonButton } from '@ionic/react';

function Example() {
  return (
    <>
      <IonButton>默认</IonButton>
      <IonButton disabled={true}>禁用</IonButton>
    </>
  );
}
export default Example;
```