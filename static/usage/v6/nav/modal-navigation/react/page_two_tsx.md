```tsx
import React from 'react';
import { IonButton, IonContent } from '@ionic/react';

import PageThree from './page-three';

function PageTwo({ nav }: { nav: HTMLIonNavElement }) {
  const navigateToPageThree = () => nav.push(PageThree, { nav });

  return (
    <IonContent class="ion-padding">
      <h1>页面二</h1>
      <IonButton onClick={navigateToPageThree}>前往页面三</IonButton>
    </IonContent>
  );
}

export default PageTwo;
```