```tsx
import React, { useState, useRef, useEffect } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  useIonActionSheet,
} from '@ionic/react';

function Example() {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);

  const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);
  const [present] = useIonActionSheet();

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  function dismiss() {
    modal.current?.dismiss();
  }

  function canDismiss() {
    return new Promise<boolean>((resolve, reject) => {
      present({
        header: '确定要关闭吗？',
        buttons: [
          {
            text: '是',
            role: 'confirm',
          },
          {
            text: '否',
            role: 'cancel',
          },
        ],
        onWillDismiss: (event) => {
          if (event.detail.role === 'confirm') {
            resolve(true);
          } else {
            reject();
          }
        },
      });
    });
  }

  return (
    <IonPage ref={page}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>应用</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="open-modal" expand="block">
          打开
        </IonButton>
        <IonModal ref={modal} trigger="open-modal" canDismiss={canDismiss} presentingElement={presentingElement!}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>模态框</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => dismiss()}>关闭</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <p>关闭此模态框时，系统会提示您确认操作。</p>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```