```tsx
import React from 'react';
import { IonItem, IonList, IonToggle } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonToggle justify="start">对齐行首</IonToggle>
      </IonItem>
      <IonItem>
        <IonToggle justify="end">对齐行尾</IonToggle>
      </IonItem>
      <IonItem>
        <IonToggle justify="space-between">标签与控件间留空</IonToggle>
      </IonItem>
    </IonList>
  );
}
export default Example;
```