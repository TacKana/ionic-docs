```tsx
import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import type { RadioGroupCustomEvent } from '@ionic/react';

function Example() {
  const [menuType, setMenuType] = useState('overlay');

  return (
    <>
      <IonMenu type={menuType} contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>菜单内容</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonMenuToggle>
            <IonButton>点击关闭菜单</IonButton>
          </IonMenuToggle>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>菜单</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <h2>选择覆盖类型：</h2>
          <IonRadioGroup
            value={menuType}
            onIonChange={(ev: RadioGroupCustomEvent) => {
              setMenuType(ev.detail.value);
            }}
          >
            <IonItem>
              <IonLabel>
                <code>overlay</code>
              </IonLabel>
              <IonRadio value="overlay"></IonRadio>
            </IonItem>
            <IonItem>
              <IonLabel>
                <code>reveal</code>
              </IonLabel>
              <IonRadio value="reveal"></IonRadio>
            </IonItem>
            <IonItem>
              <IonLabel>
                <code>push</code>
              </IonLabel>
              <IonRadio value="push"></IonRadio>
            </IonItem>
          </IonRadioGroup> <br />
          <IonMenuToggle>
            <IonButton>点击打开菜单</IonButton>
          </IonMenuToggle>
        </IonContent>
      </IonPage>
    </>
  );
}
export default Example;
```