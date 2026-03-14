```tsx
import React from 'react';
import { IonCheckbox, IonItem, IonList } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonCheckbox justify="start">对齐行首</IonCheckbox>
      </IonItem>

      <IonItem>
        <IonCheckbox justify="end">对齐行尾</IonCheckbox>
      </IonItem>

      <IonItem>
        <IonCheckbox justify="space-between">标签与控件间留空</IonCheckbox>
      </IonItem>
    </IonList>
  );
}
export default Example;
```