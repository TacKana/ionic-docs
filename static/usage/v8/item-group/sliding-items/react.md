```tsx
import React from 'react';
import {
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
} from '@ionic/react';

function Example() {
  return (
    <>
      <IonItemGroup>
        <IonItemDivider>
          <IonLabel>水果</IonLabel>
        </IonItemDivider>

        <IonItemSliding>
          <IonItem>
            <IonLabel>葡萄</IonLabel>
          </IonItem>
          <IonItemOptions>
            <IonItemOption>收藏</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>

        <IonItemSliding>
          <IonItem>
            <IonLabel>苹果</IonLabel>
          </IonItem>
          <IonItemOptions>
            <IonItemOption>收藏</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>

        <IonItemSliding>
          <IonItem lines="none">
            <IonLabel>香蕉</IonLabel>
          </IonItem>
          <IonItemOptions>
            <IonItemOption>收藏</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      </IonItemGroup>

      <IonItemGroup>
        <IonItemDivider>
          <IonLabel>蔬菜</IonLabel>
        </IonItemDivider>

        <IonItemSliding>
          <IonItem>
            <IonLabel>胡萝卜</IonLabel>
          </IonItem>
          <IonItemOptions>
            <IonItemOption>收藏</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>

        <IonItemSliding>
          <IonItem>
            <IonLabel>西兰花</IonLabel>
          </IonItem>
          <IonItemOptions>
            <IonItemOption>收藏</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>

        <IonItemSliding>
          <IonItem lines="none">
            <IonLabel>芹菜</IonLabel>
          </IonItem>
          <IonItemOptions>
            <IonItemOption>收藏</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      </IonItemGroup>
    </>
  );
}
export default Example;
```