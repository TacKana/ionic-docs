```tsx
import React from 'react';
import { IonItem, IonList, IonSelect, IonSelectOption, IonText } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonSelect aria-label="最喜爱的水果" value="apple">
          <IonSelectOption value="apple">苹果</IonSelectOption>
          <IonSelectOption value="banana">香蕉</IonSelectOption>
          <IonSelectOption value="orange">橙子</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
  );
}
export default Example;
```