```tsx
import React from 'react';
import { IonSelect, IonSelectOption } from '@ionic/react';

function Example() {
  return (
    <>
      <IonSelect label="实心选择框" labelPlacement="floating" fill="solid">
        <IonSelectOption value="apple">苹果</IonSelectOption>
        <IonSelectOption value="banana">香蕉</IonSelectOption>
        <IonSelectOption value="orange">橙子</IonSelectOption>
      </IonSelect>

      <br />

      <IonSelect label="轮廓选择框" labelPlacement="floating" fill="outline">
        <IonSelectOption value="apple">苹果</IonSelectOption>
        <IonSelectOption value="banana">香蕉</IonSelectOption>
        <IonSelectOption value="orange">橙子</IonSelectOption>
      </IonSelect>
    </>
  );
}
export default Example;
```