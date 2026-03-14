```tsx
import React from 'react';
import { IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList } from '@ionic/react';
import { archive, heart, trash } from 'ionicons/icons';

function Example() {
  return (
    <IonList>
      {/* 仅图标滑动项 */}
      <IonItemSliding>
        <IonItemOptions side="start">
          <IonItemOption color="success">
            <IonIcon slot="icon-only" icon={archive}></IonIcon>
          </IonItemOption>
        </IonItemOptions>

        <IonItem>
          <IonLabel>仅图标的滑动项</IonLabel>
        </IonItem>

        <IonItemOptions side="end">
          <IonItemOption>
            <IonIcon slot="icon-only" icon={heart}></IonIcon>
          </IonItemOption>
          <IonItemOption color="danger">
            <IonIcon slot="icon-only" icon={trash}></IonIcon>
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      {/* 左侧图标滑动项 */}
      <IonItemSliding>
        <IonItemOptions side="start">
          <IonItemOption color="success">
            <IonIcon slot="start" icon={archive}></IonIcon>
            存档
          </IonItemOption>
        </IonItemOptions>

        <IonItem>
          <IonLabel>左侧图标的滑动项</IonLabel>
        </IonItem>

        <IonItemOptions side="end">
          <IonItemOption>
            <IonIcon slot="start" icon={heart}></IonIcon>
            收藏
          </IonItemOption>
          <IonItemOption color="danger">
            <IonIcon slot="start" icon={trash}></IonIcon>
            删除
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      {/* 右侧图标滑动项 */}
      <IonItemSliding>
        <IonItemOptions side="start">
          <IonItemOption color="success">
            <IonIcon slot="end" icon={archive}></IonIcon>
            存档
          </IonItemOption>
        </IonItemOptions>

        <IonItem>
          <IonLabel>右侧图标的滑动项</IonLabel>
        </IonItem>

        <IonItemOptions>
          <IonItemOption>
            <IonIcon slot="end" icon={heart}></IonIcon>
            收藏
          </IonItemOption>
          <IonItemOption color="danger">
            <IonIcon slot="end" icon={trash}></IonIcon>
            删除
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      {/* 顶部图标滑动项 */}
      <IonItemSliding>
        <IonItemOptions side="start">
          <IonItemOption color="success">
            <IonIcon slot="top" icon={archive}></IonIcon>
            存档
          </IonItemOption>
        </IonItemOptions>

        <IonItem>
          <IonLabel>顶部图标的滑动项</IonLabel>
        </IonItem>

        <IonItemOptions>
          <IonItemOption>
            <IonIcon slot="top" icon={heart}></IonIcon>
            收藏
          </IonItemOption>
          <IonItemOption color="danger">
            <IonIcon slot="top" icon={trash}></IonIcon>
            删除
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      {/* 底部图标滑动项 */}
      <IonItemSliding>
        <IonItemOptions side="start">
          <IonItemOption color="success">
            <IonIcon slot="bottom" icon={archive}></IonIcon>
            存档
          </IonItemOption>
        </IonItemOptions>

        <IonItem>
          <IonLabel>底部图标的滑动项</IonLabel>
        </IonItem>

        <IonItemOptions>
          <IonItemOption>
            <IonIcon slot="bottom" icon={heart}></IonIcon>
            收藏
          </IonItemOption>
          <IonItemOption color="danger">
            <IonIcon slot="bottom" icon={trash}></IonIcon>
            删除
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonList>
  );
}
export default Example;
```