```tsx
import React from 'react';
import { IonButton, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonToast } from '@ionic/react';

function Example() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>内联 Toast</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="open-toast" expand="block">
          打开
        </IonButton>
        <p>这个 Toast 示例使用触发器，在按钮被点击时自动打开一个 Toast。</p>
        <IonToast trigger="open-toast" message="此 Toast 将在 5 秒后消失" duration={5000}></IonToast>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```