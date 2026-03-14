```tsx
import React from 'react';
import { IonButton, IonContent } from '@ionic/react';

function PageThree({ nav }: { nav: HTMLIonNavElement }) {
  const navigateBack = () => nav.pop();
  const navigateToRoot = () => nav.popToRoot();

  return (
    <IonContent class="ion-padding">
      <h1>页面三</h1>
      <IonButton onClick={navigateBack}>返回上一页</IonButton>
      <IonButton onClick={navigateToRoot}>返回首页</IonButton>
    </IonContent>
  );
}

export default PageThree;
```