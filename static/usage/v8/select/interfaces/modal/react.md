```tsx
import React from 'react';
import { IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
function Example() {
  return (
    <IonList>
      <IonItem>
        <IonSelect aria-label="Fruit" interface="modal" placeholder="选择水果">
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