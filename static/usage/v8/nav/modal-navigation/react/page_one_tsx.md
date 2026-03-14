```tsx
import React from 'react';
import { IonButton, IonContent } from '@ionic/react';

import PageTwo from './page-two';

function PageOne({ nav }: { nav: HTMLIonNavElement }) {
  const navigateToPageTwo = () => nav.push(PageTwo, { nav });
  return (
    <IonContent class="ion-padding">
      <h1>页面一</h1>
      <IonButton onClick={navigateToPageTwo}>前往页面二</IonButton>
    </IonContent>
  );
}

export default PageOne;
```