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
          多行文本在一行显示不下时会自动换行。Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </IonLabel>
      </IonItem>

      <IonItem>
        <IonLabel class="ion-text-nowrap">
          多行文本在一行显示不下时会以省略号表示。Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </IonLabel>
      </IonItem>

      <IonItem>
        <IonLabel>
          <h1>一级标题</h1>
          <p>段落</p>
        </IonLabel>
      </IonItem>

      <IonItem>
        <IonLabel>
          <h2>二级标题</h2>
          <p>段落</p>
        </IonLabel>
      </IonItem>

      <IonItem>
        <IonLabel>
          <h3>三级标题</h3>
          <p>段落</p>
        </IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```