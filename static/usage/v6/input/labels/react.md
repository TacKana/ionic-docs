```tsx
import React from 'react';
import { IonInput, IonItem, IonLabel, IonList } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonLabel>默认标签</IonLabel>
        <IonInput placeholder="输入文本"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="fixed">固定标签</IonLabel>
        <IonInput placeholder="输入文本"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">堆叠标签</IonLabel>
        <IonInput placeholder="输入文本"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">浮动标签</IonLabel>
        <IonInput placeholder="输入文本"></IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```