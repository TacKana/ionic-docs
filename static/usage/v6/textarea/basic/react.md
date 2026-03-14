```tsx
import React from 'react';
import { IonItem, IonLabel, IonList, IonTextarea } from '@ionic/react';
function Example() {
  return (
    <IonList>
      <IonItem>
        <IonLabel>常规文本域</IonLabel>
        <IonTextarea placeholder="在此输入内容"></IonTextarea>
      </IonItem>
      <IonItem>
        <IonLabel>只读文本域</IonLabel>
        <IonTextarea readonly={true} placeholder="无法编辑此内容"></IonTextarea>
      </IonItem>
      <IonItem>
        <IonLabel>禁用文本域</IonLabel>
        <IonTextarea disabled={true} placeholder="无法在此输入"></IonTextarea>
      </IonItem>
    </IonList>
  );
}
export default Example;
```