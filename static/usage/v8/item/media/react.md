```tsx
import React from 'react';
import { IonAvatar, IonItem, IonLabel, IonThumbnail } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem>
        <IonAvatar slot="start">
          <img alt="人物头像轮廓" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </IonAvatar>
        <IonLabel>头像项目</IonLabel>
      </IonItem>

      <IonItem>
        <IonThumbnail slot="start">
          <img alt="山峰轮廓" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </IonThumbnail>
        <IonLabel>缩略图项目</IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```