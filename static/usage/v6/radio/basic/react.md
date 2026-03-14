```tsx
import React from 'react';
import { IonItem, IonLabel, IonList, IonRadio, IonRadioGroup } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonRadioGroup value="strawberries">
        <IonItem>
          <IonLabel>葡萄</IonLabel>
          <IonRadio slot="end" value="grapes"></IonRadio>
        </IonItem>

        <IonItem>
          <IonLabel>草莓</IonLabel>
          <IonRadio slot="end" value="strawberries"></IonRadio>
        </IonItem>

        <IonItem>
          <IonLabel>菠萝</IonLabel>
          <IonRadio slot="end" value="pineapple"></IonRadio>
        </IonItem>

        <IonItem>
          <IonLabel>樱桃（已禁用）</IonLabel>
          <IonRadio slot="end" value="cherries" disabled={true}></IonRadio>
        </IonItem>
      </IonRadioGroup>
    </IonList>
  );
}
export default Example;
```