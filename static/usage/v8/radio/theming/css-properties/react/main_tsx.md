```tsx
import React from 'react';
import { IonRadio, IonRadioGroup } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <IonRadioGroup value="custom-checked">
      <IonRadio value="custom" aria-label="自定义复选框"></IonRadio>
      <IonRadio value="custom-checked" aria-label="已选中的自定义复选框"></IonRadio>
    </IonRadioGroup>
  );
}
export default Example;
```