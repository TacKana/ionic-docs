```tsx
import React from 'react';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';
import { add, remove } from 'ionicons/icons';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonSelect
          interface="popover"
          toggleIcon={add}
          expandedIcon={remove}
          aria-label="fruit"
          placeholder="选择水果"
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