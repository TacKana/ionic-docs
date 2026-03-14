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
          当单行显示过长时，多行文本应该显示省略号。Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </IonLabel>
      </IonItem>

      <IonItem>
        <IonLabel class="ion-text-wrap">
          当单行显示过长时，多行文本应该自动换行。Lorem ipsum dolor sit amet,
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