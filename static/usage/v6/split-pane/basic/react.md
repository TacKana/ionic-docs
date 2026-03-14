```tsx
import React from 'react';
import { IonContent, IonHeader, IonMenu, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <IonSplitPane when="xs" contentId="main">
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar color="tertiary">
            <IonTitle>菜单</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">菜单内容</IonContent>
      </IonMenu>

      <div className="ion-page" id="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>主视图</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">主视图内容</IonContent>
      </div>
    </IonSplitPane>
  );
}
export default Example;
```