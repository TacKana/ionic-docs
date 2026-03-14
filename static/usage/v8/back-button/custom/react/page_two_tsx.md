```tsx
import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/react';
import { caretBack } from 'ionicons/icons';

function PageTwo() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Previous" icon={caretBack}></IonBackButton>
          </IonButtons>
          <IonTitle>Back Button</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>页面二</h1>
        <p>使用后退按钮返回上一页。</p>
      </IonContent>
    </>
  );
}

export default PageTwo;
```