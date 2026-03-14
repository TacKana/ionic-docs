```tsx
import React from 'react';
import { IonFooter, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>顶部工具栏</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonFooter>
        <IonToolbar>
          <IonTitle>底部工具栏</IonTitle>
        </IonToolbar>
      </IonFooter>
    </>
  );
}
export default Example;
```