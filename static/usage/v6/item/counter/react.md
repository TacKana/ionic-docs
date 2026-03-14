```tsx
import React from 'react';
import { IonInput, IonItem, IonLabel } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem counter={true}>
        <IonLabel position="floating">默认计数器</IonLabel>
        <IonInput maxlength={20}></IonInput>
      </IonItem>

      <IonItem
        counter={true}
        counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}
      >
        <IonLabel position="floating">自定义计数器格式</IonLabel>
        <IonInput maxlength={20}></IonInput>
      </IonItem>
    </>
  );
}
export default Example;
```