```tsx
import React from 'react';
import { IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItemSliding>
        <IonItem>
          <IonLabel>带右侧选项的滑动项目</IonLabel>
        </IonItem>

        <IonItemOptions>
          <IonItemOption>收藏</IonItemOption>
          <IonItemOption color="danger">删除</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      <IonItemSliding>
        <IonItemOptions side="start">
          <IonItemOption color="success">归档</IonItemOption>
        </IonItemOptions>

        <IonItem>
          <IonLabel>带左侧选项的滑动项目</IonLabel>
        </IonItem>
      </IonItemSliding>

      <IonItemSliding>
        <IonItemOptions side="start">
          <IonItemOption color="success">归档</IonItemOption>
        </IonItemOptions>

        <IonItem>
          <IonLabel>两侧都有选项的滑动项目</IonLabel>
        </IonItem>

        <IonItemOptions side="end">
          <IonItemOption>收藏</IonItemOption>
          <IonItemOption color="danger">删除</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonList>
  );
}
export default Example;
```