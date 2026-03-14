```tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const SearchPage = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>搜索</IonTitle>
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
        搜索内容
      </div>
    </IonContent>
  </IonPage>
);

export default SearchPage;
```