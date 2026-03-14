```tsx
import React from 'react';
import { IonBadge, IonItem, IonLabel, IonList } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonLabel>徽章样式</IonLabel>
        <IonBadge>1</IonBadge>
      </IonItem>
    </IonList>
  );
}
export default Example;
```