```tsx
import React from 'react';
import { IonItem, IonList, IonTextarea } from '@ionic/react';
function Example() {
  return (
    <IonList>
      <IonItem>
        <IonTextarea label="常规文本区域" placeholder="在此输入内容"></IonTextarea>
      </IonItem>
      <IonItem>
        <IonTextarea readonly={true} label="只读文本区域" placeholder="无法编辑此内容"></IonTextarea>
      </IonItem>
      <IonItem>
        <IonTextarea disabled={true} label="禁用文本区域" placeholder="无法在此输入"></IonTextarea>
      </IonItem>
    </IonList>
  );
}
export default Example;
```