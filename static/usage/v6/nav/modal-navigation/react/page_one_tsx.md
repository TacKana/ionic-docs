```tsx
import React from 'react';
import { IonButton, IonContent } from '@ionic/react';

import PageTwo from './page-two';

function PageOne({ nav }: { nav: HTMLIonNavElement }) {
  const navigateToPageTwo = () => nav.push(PageTwo, { nav });
  return (
    <IonContent class="ion-padding">
      <h1>第一页</h1>
      <IonButton onClick={navigateToPageTwo}>前往第二页</IonButton>
    </IonContent>
  );
}

export default PageOne;
```