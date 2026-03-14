```tsx
import React, { useRef } from 'react';
import {
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
  IonSearchbar,
} from '@ionic/react';

function Example() {
  const modal = useRef<HTMLIonModalElement>(null);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>应用</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="open-modal" expand="block">
          打开抽屉式模态框
        </IonButton>
        <IonModal ref={modal} trigger="open-modal" initialBreakpoint={0.25} breakpoints={[0, 0.25, 0.5, 0.75]}>
          <IonContent className="ion-padding">
            <IonSearchbar onClick={() => modal.current?.setCurrentBreakpoint(0.75)} placeholder="搜索"></IonSearchbar>
            <IonList>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=b" />
                </IonAvatar>
                <IonLabel>
                  <h2>Connor Smith</h2>
                  <p>销售代表</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=a" />
                </IonAvatar>
                <IonLabel>
                  <h2>Daniel Smith</h2>
                  <p>产品设计师</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=d" />
                </IonAvatar>
                <IonLabel>
                  <h2>Greg Smith</h2>
                  <p>运营总监</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=e" />
                </IonAvatar>
                <IonLabel>
                  <h2>Zoey Smith</h2>
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