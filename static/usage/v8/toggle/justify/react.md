```tsx
import React from 'react';
import { IonItem, IonList, IonToggle } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonToggle justify="start">起始位置对齐</IonToggle>
      </IonItem>
      <IonItem>
        <IonToggle justify="end">末尾位置对齐</IonToggle>
      </IonItem>
      <IonItem>
        <IonToggle justify="space-between">标签与控件间距均分</IonToggle>
      </IonItem>
    </IonList>
  );
}
export default Example;
```