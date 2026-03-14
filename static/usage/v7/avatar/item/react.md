```tsx
import React from 'react';
import { IonAvatar, IonItem, IonLabel } from '@ionic/react';
function Example() {
  return (
    <>
      <IonItem>
        <IonAvatar slot="start">
          <img alt="人物头像剪影" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </IonAvatar>
        <IonLabel>项目头像</IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```