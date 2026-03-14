```tsx
import React from 'react';
import { IonButton, IonHeader, IonContent, IonNavLink, IonToolbar, IonTitle } from '@ionic/react';

import PageTwo from './page-two';

function PageOne() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>页面一</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>页面一</h1>
        <IonNavLink routerDirection="forward" component={() => <PageTwo />}>
          <IonButton>前往页面二</IonButton>
        </IonNavLink>
      </IonContent>
    </>
  );
}

export default PageOne;
```