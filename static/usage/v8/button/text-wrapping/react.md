```tsx
import React from 'react';
import { IonButton } from '@ionic/react';

function Example() {
  return (
    <>
      <IonButton>默认</IonButton>
      <IonButton className="ion-text-wrap" style={{ maxWidth: '400px' }}>
        这是一个永无止境的按钮，它只是不停地继续、继续、继续、继续、继续、继续、继续、继续下去，我的朋友们
      </IonButton>
    </>
  );
}
export default Example;
```