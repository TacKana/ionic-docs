```tsx
import React from 'react';
import { IonAvatar, IonChip, IonLabel } from '@ionic/react';
function Example() {
  return (
    <>
      <IonChip>
        <IonAvatar>
          <img alt="人物头像剪影" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </IonAvatar>
        <IonLabel>带头像的标签</IonLabel>
      </IonChip>
    </>
  );
}
export default Example;
```