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
            应用文本换行样式到标签阴影部分的换行方式
          </IonRadio>
        </IonItem>
        <IonItem>
          <IonRadio value="wrapped-div">
            <div className="ion-text-wrap">在包装元素上应用 ion-text-wrap 类的换行方式</div>
          </IonRadio>
        </IonItem>
      </IonRadioGroup>
    </IonList>
  );
}
export default Example;
```