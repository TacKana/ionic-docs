```tsx
import React from 'react';
import { IonText, IonIcon } from '@ionic/react';
import { warning } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonText color="primary">
        <h1>H1: 敏捷的棕色狐狸跳过懒惰的狗</h1>
      </IonText>

      <IonText color="secondary">
        <h2>H2: 敏捷的棕色狐狸跳过懒惰的狗</h2>
      </IonText>

      <IonText color="tertiary">
        <h3>H3: 敏捷的棕色狐狸跳过懒惰的狗</h3>
      </IonText>

      <p>
        <IonText color="warning">
          <IonIcon icon={warning}></IonIcon>
        </IonText>
        我看见一个狼人手拿中餐菜单。雨中漫步在苏活区的<IonText color="success">
          <sub>街道</sub>
        </IonText>。他<IonText color="medium">
          <i>正在</i>
        </IonText>寻找一家叫李和福的餐馆。打算点一份<IonText color="danger">超大份的牛肉炒面。</IonText>
      </p>
    </>
  );
}
export default Example;
```