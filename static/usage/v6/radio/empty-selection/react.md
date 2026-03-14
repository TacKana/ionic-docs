```tsx
import React from 'react';
import { IonItem, IonLabel, IonList, IonRadio, IonRadioGroup } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonRadioGroup allowEmptySelection={true} value="turtles">
        <IonItem>
          <IonLabel>狗狗</IonLabel>
          <IonRadio slot="end" value="dogs"></IonRadio>
        </IonItem>

        <IonItem>
          <IonLabel>猫咪</IonLabel>
          <IonRadio slot="end" value="cats"></IonRadio>
        </IonItem>

        <IonItem>
          <IonLabel>乌龟</IonLabel>
          <IonRadio slot="end" value="turtles"></IonRadio>
        </IonItem>

        <IonItem>
          <IonLabel>鱼</IonLabel>
          <IonRadio slot="end" value="fish"></IonRadio>
        </IonItem>
      </IonRadioGroup>
    </IonList>
  );
}
export default Example;
```