```tsx
import React from 'react';
import { IonTextarea, IonItem, IonList } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonTextarea label="默认标签" placeholder="输入文本"></IonTextarea>
      </IonItem>
      <IonItem>
        <IonTextarea label="固定标签" labelPlacement="fixed" placeholder="输入文本"></IonTextarea>
      </IonItem>
      <IonItem>
        <IonTextarea label="堆叠标签" labelPlacement="stacked" placeholder="输入文本"></IonTextarea>
      </IonItem>
      <IonItem>
        <IonTextarea label="浮动标签" labelPlacement="floating" placeholder="输入文本"></IonTextarea>
      </IonItem>
    </IonList>
  );
}
export default Example;
```