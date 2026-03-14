```tsx
import React from 'react';
import { IonAvatar, IonItem, IonLabel, IonList, IonIcon } from '@ionic/react';
import { airplane, bluetooth, call, wifi } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonList>
        <IonItem>
          <IonIcon aria-hidden="true" icon={airplane} slot="start"></IonIcon>
          <IonLabel>飞行模式</IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon aria-hidden="true" icon={wifi} slot="start"></IonIcon>
          <IonLabel>无线网络</IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon aria-hidden="true" icon={bluetooth} slot="start"></IonIcon>
          <IonLabel>蓝牙</IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon aria-hidden="true" icon={call} slot="start"></IonIcon>
          <IonLabel>蜂窝网络</IonLabel>
        </IonItem>
      </IonList>

      <IonList>
        <IonItem>
          <IonAvatar aria-hidden="true" slot="start">
            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
          <IonLabel>休伊</IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar aria-hidden="true" slot="start">
            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
          <IonLabel>杜威</IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar aria-hidden="true" slot="start">
            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
          <IonLabel>路易</IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar aria-hidden="true" slot="start">
            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
          <IonLabel>福伊</IonLabel>
        </IonItem>
      </IonList>
    </>
  );
}
export default Example;
```