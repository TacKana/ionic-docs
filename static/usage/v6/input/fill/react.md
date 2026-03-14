```tsx
import React from 'react';
import { IonInput, IonItem, IonLabel } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem>
        <IonLabel position="floating">默认输入框</IonLabel>
        <IonInput placeholder="请输入文本"></IonInput>
      </IonItem>

      <IonItem fill="solid">
        <IonLabel position="floating">实线样式输入框</IonLabel>
        <IonInput placeholder="请输入文本"></IonInput>
      </IonItem>

      <IonItem fill="outline">
        <IonLabel position="floating">轮廓样式输入框</IonLabel>
        <IonInput placeholder="请输入文本"></IonInput>
      </IonItem>
    </>
  );
}
export default Example;
```