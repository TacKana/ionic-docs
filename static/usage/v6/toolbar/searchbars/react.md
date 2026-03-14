```tsx
import React from 'react';
import { IonHeader, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>工具栏</IonTitle>
      </IonToolbar>
      <IonToolbar>
        <IonSearchbar></IonSearchbar>
      </IonToolbar>
    </IonHeader>
  );
}
export default Example;
```