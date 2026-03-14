```tsx
import React from 'react';
import { IonCheckbox, IonInput, IonItem, IonLabel, IonToggle } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem>
        <IonLabel>默认标签</IonLabel>
        <IonInput placeholder="输入文本"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="fixed">固定标签</IonLabel>
        <IonInput placeholder="输入文本"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">浮动标签</IonLabel>
        <IonInput placeholder="输入文本"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">堆叠标签</IonLabel>
        <IonInput placeholder="输入文本"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>开关</IonLabel>
        <IonToggle slot="end" checked></IonToggle>
      </IonItem>

      <IonItem>
        <IonCheckbox slot="start" checked></IonCheckbox>
        <IonLabel>复选框</IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```