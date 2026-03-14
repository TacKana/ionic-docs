```tsx
import React, { useRef } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonImg,
} from '@ionic/react';

import './main.css';

function Example() {
  const modal = useRef<HTMLIonModalElement>(null);

  function dismiss() {
    modal.current?.dismiss();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>应用</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="open-modal" expand="block">
          打开模态框
        </IonButton>
        <IonModal id="example-modal" ref={modal} trigger="open-modal">
          <IonContent>
            <IonToolbar>
              <IonTitle>模态框</IonTitle>
              <IonButtons slot="end">
                <IonButton color="light" onClick={() => dismiss()}>
                  关闭
                </IonButton>
              </IonButtons>
            </IonToolbar>
            <IonList>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=b" />
                </IonAvatar>
                <IonLabel>
                  <h2>康纳·史密斯</h2>
                  <p>销售代表</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=a" />
                </IonAvatar>
                <IonLabel>
                  <h2>丹尼尔·史密斯</h2>
                  <p>产品设计师</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=d" />
                </IonAvatar>
                <IonLabel>
                  <h2>格雷格·史密斯</h2>
                  <p>运营总监</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=e" />
                </IonAvatar>
                <IonLabel>
                  <h2>佐伊·史密斯</h2>
                  <p>首席执行官</p>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```