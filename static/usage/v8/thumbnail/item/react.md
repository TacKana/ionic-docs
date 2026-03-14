```tsx
import React from 'react';
import { IonItem, IonLabel, IonThumbnail } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem>
        <IonThumbnail slot="start">
          <img alt="山的剪影" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </IonThumbnail>
        <IonLabel>带缩略图的列表项</IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```