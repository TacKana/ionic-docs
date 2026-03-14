```tsx
import React from 'react';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonSelect
          aria-label="Fruit"
          placeholder="选择水果"
          onIonChange={(e) => console.log(`ionChange fired with value: ${e.detail.value}`)}
          onIonCancel={() => console.log('ionCancel fired')}
          onIonDismiss={() => console.log('ionDismiss fired')}
        >
          <IonSelectOption value="apples">苹果</IonSelectOption>
          <IonSelectOption value="oranges">橙子</IonSelectOption>
          <IonSelectOption value="bananas">香蕉</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
  );
}

export default Example;
```