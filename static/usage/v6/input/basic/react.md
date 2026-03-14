```tsx
import React from 'react';
import { IonInput, IonItem, IonLabel, IonList } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonLabel>默认输入框</IonLabel>
        <IonInput></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>带占位符的输入框</IonLabel>
        <IonInput placeholder="Enter company name"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>带初始值的输入框</IonLabel>
        <IonInput value="121 S Pinckney St #300"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>只读输入框</IonLabel>
        <IonInput value="Madison" readonly={true}></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>禁用输入框</IonLabel>
        <IonInput value="53703" disabled={true}></IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```