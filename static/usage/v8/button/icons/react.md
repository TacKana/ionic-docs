```tsx
import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { heart, logoApple, settingsSharp, star } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonButton size="small">
        <IonIcon slot="icon-only" ios={logoApple} md={settingsSharp}></IonIcon>
      </IonButton>

      <IonButton>
        <IonIcon slot="icon-only" ios={logoApple} md={settingsSharp}></IonIcon>
      </IonButton>

      <IonButton size="large">
        <IonIcon slot="icon-only" ios={logoApple} md={settingsSharp}></IonIcon>
      </IonButton>

      <IonButton size="small">
        <IonIcon slot="start" icon={star}></IonIcon>
        左侧图标
      </IonButton>

      <IonButton>
        <IonIcon slot="start" icon={star}></IonIcon>
        左侧图标
      </IonButton>

      <IonButton size="large">
        <IonIcon slot="start" icon={star}></IonIcon>
        左侧图标
      </IonButton>

      <IonButton size="small">
        右侧图标
        <IonIcon slot="end" icon={heart}></IonIcon>
      </IonButton>

      <IonButton>
        右侧图标
        <IonIcon slot="end" icon={heart}></IonIcon>
      </IonButton>

      <IonButton size="large">
        右侧图标
        <IonIcon slot="end" icon={heart}></IonIcon>
      </IonButton>
    </>
  );
}
export default Example;
```