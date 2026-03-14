```tsx
import React from 'react';
import { IonContent, IonFooter, IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonContent className="ion-padding">
        <h1>内容区域</h1>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonToolbar>
          <IonTitle>底部栏</IonTitle>
        </IonToolbar>
      </IonFooter>
    </>
  );
}
export default Example;
```