```tsx
import React from 'react';
import { IonButton, IonHeader, IonContent, IonNavLink, IonToolbar, IonTitle } from '@ionic/react';

import PageTwo from './page-two';

function PageOne() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>返回按钮</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>页面一</h1>
        <p>导航到下一页查看返回按钮。</p>
        <IonNavLink routerDirection="forward" component={() => <PageTwo />}>
          <IonButton>导航</IonButton>
        </IonNavLink>
      </IonContent>
    </>
  );
}

export default PageOne;
```