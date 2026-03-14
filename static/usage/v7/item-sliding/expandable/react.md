```tsx
import React from 'react';
import { IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItemSliding>
        <IonItemOptions side="start">
          <IonItemOption color="success" expandable>
            归档
          </IonItemOption>
        </IonItemOptions>

        <IonItem>
          <IonLabel>带可展开选项的滑动项</IonLabel>
        </IonItem>

        <IonItemOptions side="end">
          <IonItemOption>收藏</IonItemOption>
          <IonItemOption color="danger" expandable>
            删除
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonList>
  );
}
export default Example;
```