```tsx
import React from 'react';
import { IonCheckbox, IonItem, IonLabel } from '@ionic/react';

function Example() {
  return (
    <IonItem>
      <IonCheckbox slot="start"></IonCheckbox>
      <IonLabel>我同意条款与条件</IonLabel>
    </IonItem>
  );
}
export default Example;
```