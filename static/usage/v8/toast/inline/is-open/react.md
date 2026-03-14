```tsx
import React, { useState } from 'react';
import { IonButton, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonToast } from '@ionic/react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>内联 Toast</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="block" onClick={() => setIsOpen(true)}>
          打开
        </IonButton>
        <IonToast
          isOpen={isOpen}
          message="此 toast 将在 5 秒后自动关闭"
          onDidDismiss={() => setIsOpen(false)}
          duration={5000}
        ></IonToast>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```