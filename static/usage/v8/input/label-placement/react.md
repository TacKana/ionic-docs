```tsx
import React from 'react';
import { IonInput, IonItem, IonList } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonInput label="默认标签" placeholder="输入文本"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="固定标签" labelPlacement="fixed" placeholder="输入文本"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="堆叠标签" labelPlacement="stacked" placeholder="输入文本"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="浮动标签" labelPlacement="floating" placeholder="输入文本"></IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```