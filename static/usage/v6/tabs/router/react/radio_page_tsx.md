```tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const RadioPage = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>单选按钮</IonTitle>
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
        单选按钮内容
      </div>
    </IonContent>
  </IonPage>
);

export default RadioPage;
```