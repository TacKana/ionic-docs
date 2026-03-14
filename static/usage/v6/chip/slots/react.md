```tsx
import React from 'react';
import { IonChip, IonAvatar, IonLabel, IonIcon } from '@ionic/react';
import { close, closeCircle, pin } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonChip>
        <IonAvatar>
          <img alt="人物头像剪影" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </IonAvatar>
        <IonLabel>头像标签</IonLabel>
        <IonIcon icon={closeCircle}></IonIcon>
      </IonChip>

      <IonChip>
        <IonIcon icon={pin} color="primary"></IonIcon>
        <IonLabel>图标标签</IonLabel>
        <IonIcon icon={close}></IonIcon>
      </IonChip>
    </>
  );
}
export default Example;
```