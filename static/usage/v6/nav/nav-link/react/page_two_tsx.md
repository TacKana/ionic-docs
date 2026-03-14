```tsx
import React from 'react';
import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonHeader,
  IonContent,
  IonNavLink,
  IonToolbar,
  IonTitle,
} from '@ionic/react';

import PageThree from './page-three';

function PageTwo() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>页面二</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>页面二</h1>
        <IonNavLink routerDirection="forward" component={() => <PageThree />}>
          <IonButton>前往页面三</IonButton>
        </IonNavLink>
      </IonContent>
    </>
  );
}

export default PageTwo;
```