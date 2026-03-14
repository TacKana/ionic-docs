```tsx
import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>标题栏</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>内容区域</h1>
      </IonContent>
    </>
  );
}
export default Example;
```