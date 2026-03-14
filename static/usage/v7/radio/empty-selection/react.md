```tsx
import React from 'react';
import { IonRadio, IonRadioGroup } from '@ionic/react';

function Example() {
  return (
    <IonRadioGroup allowEmptySelection={true} value="turtles">
      <IonRadio value="dogs">狗</IonRadio>
      <br />
      <IonRadio value="cats">猫</IonRadio>
      <br />
      <IonRadio value="turtles">乌龟</IonRadio>
      <br />
      <IonRadio value="fish">鱼</IonRadio>
      <br />
    </IonRadioGroup>
  );
}
export default Example;
```