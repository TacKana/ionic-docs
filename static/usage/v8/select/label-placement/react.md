```tsx
import React from 'react';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonSelect label="Default label" placeholder="Favorite Fruit">
          <IonSelectOption value="apple">苹果</IonSelectOption>
          <IonSelectOption value="banana">香蕉</IonSelectOption>
          <IonSelectOption value="orange">橙子</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonSelect label="Fixed label" labelPlacement="fixed" placeholder="Favorite fruit">
          <IonSelectOption value="apple">苹果</IonSelectOption>
          <IonSelectOption value="banana">香蕉</IonSelectOption>
          <IonSelectOption value="orange">橙子</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonSelect label="Stacked label" labelPlacement="stacked">
          <IonSelectOption value="apple">苹果</IonSelectOption>
          <IonSelectOption value="banana">香蕉</IonSelectOption>
          <IonSelectOption value="orange">橙子</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonSelect label="Floating label" labelPlacement="floating">
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