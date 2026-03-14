```tsx
import React from 'react';
import { IonItem, IonLabel } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem>
        <IonLabel>基础项目</IonLabel>
      </IonItem>

      <IonItem>
        <IonLabel>
          当文本过长超出单行显示时，会自动截断并显示省略号。Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </IonLabel>
      </IonItem>

      <IonItem>
        <IonLabel class="ion-text-wrap">
          当文本过长超出单行显示时，会自动换行。Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </IonLabel>
      </IonItem>

      <IonItem>
        <IonLabel>
          <h1>H1 标题</h1>
          <p>段落</p>
        </IonLabel>
      </IonItem>

      <IonItem>
        <IonLabel>
          <h2>H2 标题</h2>
          <p>段落</p>
        </IonLabel>
      </IonItem>

      <IonItem>
        <IonLabel>
          <h3>H3 标题</h3>
          <p>段落</p>
        </IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```