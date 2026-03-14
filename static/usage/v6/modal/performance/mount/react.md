```tsx
import React, { useRef } from 'react';
import { IonButtons, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage } from '@ionic/react';

function Example() {
  const modal = useRef<HTMLIonModalElement>(null);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>示例</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="open-modal" expand="block">
          打开模态框
        </IonButton>
        <IonModal ref={modal} keepContentsMounted={true} trigger="open-modal">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>关闭</IonButton>
              </IonButtons>
              <IonTitle>模态框</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">此内容在模态框创建时就已加载。</IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```