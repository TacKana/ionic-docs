```tsx
import React from 'react';
import { IonRadio, IonRadioGroup } from '@ionic/react';

function Example() {
  return (
    <IonRadioGroup value="strawberries">
      <IonRadio value="grapes">葡萄</IonRadio>
      <br />
      <IonRadio value="strawberries">草莓</IonRadio>
      <br />
      <IonRadio value="pineapple">菠萝</IonRadio>
      <br />
      <IonRadio value="cherries">樱桃</IonRadio>
    </IonRadioGroup>
  );
}
export default Example;
```