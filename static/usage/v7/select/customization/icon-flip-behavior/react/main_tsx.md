```tsx
import React from 'react';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';
import { caretDownSharp } from 'ionicons/icons';

import './main.css';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonSelect
          className="always-flip"
          toggleIcon={caretDownSharp}
          interface="popover"
          label="图标在两种模式下都会翻转"
          placeholder="选择水果"
        >
          <IonSelectOption value="apples">苹果</IonSelectOption>
          <IonSelectOption value="oranges">橙子</IonSelectOption>
          <IonSelectOption value="bananas">香蕉</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonSelect
          className="never-flip"
          toggleIcon={caretDownSharp}
          interface="popover"
          label="图标永不翻转"
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