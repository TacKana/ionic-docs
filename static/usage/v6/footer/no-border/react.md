```tsx
import React from 'react';
import { IonContent, IonFooter, IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonContent className="ion-padding">
        <h1>内容</h1>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonToolbar>
          <IonTitle>页脚</IonTitle>
        </IonToolbar>
      </IonFooter>
    </>
  );
}
export default Example;
```