```tsx
import React from 'react';
import { IonHeader, IonProgressBar, IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>工具栏</IonTitle>
        <IonProgressBar type="indeterminate"></IonProgressBar>
      </IonToolbar>
    </IonHeader>
  );
}
export default Example;
```