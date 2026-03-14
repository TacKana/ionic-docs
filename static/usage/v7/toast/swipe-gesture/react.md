```tsx
import React from 'react';
import { IonButton, IonContent, IonFooter, IonTitle, IonToast, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonContent className="ion-padding">
        <IonButton id="open-toast">打开 Toast</IonButton>
        <IonToast
          message="此 Toast 可通过滑动关闭"
          trigger="open-toast"
          swipeGesture="vertical"
          position="bottom"
          positionAnchor="footer"
        ></IonToast>
      </IonContent>
      <IonFooter id="footer">
        <IonToolbar>
          <IonTitle>页脚</IonTitle>
        </IonToolbar>
      </IonFooter>
    </>
  );
}
export default Example;
```