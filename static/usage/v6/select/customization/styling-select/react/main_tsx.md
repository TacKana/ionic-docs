```tsx
import React from 'react';
import { IonSelect, IonSelectOption } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <IonSelect placeholder="选择水果">
      <IonSelectOption value="apples">苹果</IonSelectOption>
      <IonSelectOption value="oranges">橙子</IonSelectOption>
      <IonSelectOption value="bananas">香蕉</IonSelectOption>
    </IonSelect>
  );
}
export default Example;
```