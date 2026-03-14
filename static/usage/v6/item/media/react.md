```tsx
import React from 'react';
import { IonAvatar, IonItem, IonLabel, IonThumbnail } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem>
        <IonAvatar slot="start">
          <img alt="人物头像剪影" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </IonAvatar>
        <IonLabel>头像项</IonLabel>
      </IonItem>

      <IonItem>
        <IonThumbnail slot="start">
          <img alt="山脉剪影" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </IonThumbnail>
        <IonLabel>缩略图项</IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```