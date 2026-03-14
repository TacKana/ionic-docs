```tsx
import React from 'react';
import { IonItem, IonLabel, IonList, IonSelect, IonSelectOption } from '@ionic/react';
function Example() {
  return (
    <IonList>
      <IonItem>
        <IonSelect label="Alert Interface" placeholder="选择水果" okText="选择水果" cancelText="取消选择">
          <IonSelectOption value="apples">苹果</IonSelectOption>
          <IonSelectOption value="oranges">橙子</IonSelectOption>
          <IonSelectOption value="bananas">香蕉</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonSelect
          label="Action Sheet Interface"
          interface="action-sheet"
          placeholder="选择水果"
          cancelText="取消选择"
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