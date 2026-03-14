```tsx
import React, { useRef } from 'react';
import {
  IonNav,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons,
  IonContent,
  IonModal,
} from '@ionic/react';

import PageOne from './page-one';

function Example() {
  const nav = useRef<HTMLIonNavElement>(null);
  const modal = useRef<HTMLIonModalElement>(null);

  const didPresent = () => {
    if (nav.current) {
      nav.current.setRoot(PageOne, { nav: nav.current });
    }
  };

  const dismiss = () => {
    if (modal.current) {
      modal.current.dismiss();
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>模态框导航</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="openModal">打开模态框</IonButton>
        <IonModal ref={modal} trigger="openModal" onDidPresent={didPresent}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>模态框</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={dismiss}>关闭</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonNav ref={nav}></IonNav>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}
export default Example;
```