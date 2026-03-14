```tsx
import React from 'react';
import { IonItem, IonLabel } from '@ionic/react';
import { caretForwardOutline } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonItem detail={true}>
        <IonLabel>
          <h3>文本项目</h3>
          <p>detail 设置为 true - 详情箭头在两种模式下均显示</p>
        </IonLabel>
      </IonItem>

      <IonItem button>
        <IonLabel>
          <h3>按钮项目</h3>
          <p>默认 detail - 详情箭头仅在 iOS 模式下显示</p>
        </IonLabel>
      </IonItem>

      <IonItem button detail={true}>
        <IonLabel>
          <h3>按钮项目</h3>
          <p>detail 设置为 true - 详情箭头在两种模式下均显示</p>
        </IonLabel>
      </IonItem>

      <IonItem button detail={false}>
        <IonLabel>
          <h3>按钮项目</h3>
          <p>detail 设置为 false - 详情箭头在两种模式下均隐藏</p>
        </IonLabel>
      </IonItem>

      <IonItem button detail={true} detailIcon={caretForwardOutline}>
        <IonLabel>
          <h3>按钮项目</h3>
          <p>detail 设置为 true - 详情箭头在两种模式下均显示</p>
          <p>详情图标设置为 caret-forward-outline</p>
        </IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```