```tsx
import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
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
          <h2>选择一个覆盖类型：</h2>
          <IonRadioGroup
            value={menuType}
            onIonChange={(event: RadioGroupCustomEvent) => {
              setMenuType(event.detail.value);
            }}
          >
            <IonItem>
              <IonRadio value="overlay">
                <code>overlay</code>
              </IonRadio>
            </IonItem>
            <IonItem>
              <IonRadio value="reveal">
                <code>reveal</code>
              </IonRadio>
            </IonItem>
            <IonItem>
              <IonRadio value="push">
                <code>push</code>
              </IonRadio>
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