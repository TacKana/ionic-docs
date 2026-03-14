```tsx
import React from 'react';
import { IonList, IonItem, IonRadio, IonRadioGroup } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <IonList>
      <IonRadioGroup value="truncated">
        <IonItem>
          <IonRadio value="truncated">默认使用省略号截断</IonRadio>
        </IonItem>
        <IonItem>
          <IonRadio value="wrapped-part" className="wrapped">
            应用于标签阴影部分的文本换行
          </IonRadio>
        </IonItem>
        <IonItem>
          <IonRadio value="wrapped-div">
            <div className="ion-text-wrap">应用于包装元素的 ion-text-wrap 类实现换行</div>
          </IonRadio>
        </IonItem>
      </IonRadioGroup>
    </IonList>
  );
}
export default Example;
```