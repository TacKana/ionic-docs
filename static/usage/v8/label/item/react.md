```tsx
import React from 'react';
import { IonItem, IonLabel } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem>
        <IonLabel>默认标签</IonLabel>
      </IonItem>

      <IonItem>
        <IonLabel>
          当多行文字过长无法在一行显示时，应显示省略号。Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </IonLabel>
      </IonItem>

      <IonItem>
        <IonLabel class="ion-text-wrap">
          当多行文字过长无法在一行显示时，应自动换行。Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </IonLabel>
      </IonItem>

      <IonItem>
        <IonLabel>
          <h1>标题</h1>
          <p>段落</p>
        </IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```