```tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const HomePage = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>立即收听</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        立即收听内容
      </div>
    </IonContent>
  </IonPage>
);

export default HomePage;
```