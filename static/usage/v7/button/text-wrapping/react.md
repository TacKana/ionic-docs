```tsx
import React from 'react';
import { IonButton } from '@ionic/react';

function Example() {
  return (
    <>
      <IonButton>默认</IonButton>
      <IonButton className="ion-text-wrap" style={{ maxWidth: '400px' }}>
        这是一个永无止境的按钮，它就这样一直延续下去，一直一直延续下去，我的朋友
      </IonButton>
    </>
  );
}
export default Example;
```