```tsx
import React from 'react';
import { IonItem, IonList, IonSelect, IonSelectOption, IonText } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonSelect placeholder="选择水果">
          <div slot="label">
            最喜欢的水果 <IonText color="danger">(必填)</IonText>
          </div>
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