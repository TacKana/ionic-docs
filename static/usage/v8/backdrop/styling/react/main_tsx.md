```tsx
import React from 'react';
import { IonBackdrop, IonHeader, IonToolbar, IonTitle, IonContent, IonCheckbox, IonButton } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonBackdrop visible={true}></IonBackdrop>
      <div className="ion-page">
        <IonHeader>
          <IonToolbar>
            <IonTitle>背景遮罩层</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>
            这段示例文本用于展示背景遮罩层效果。此处填充内容以演示遮罩层如何覆盖下方界面元素，同时保持前景内容的可交互性。
          </p>
        </IonContent>
      </div>
      <div id="box">
        <IonCheckbox color="light"></IonCheckbox>
        <IonButton class="ion-margin-start" color="light">
          可点击按钮
        </IonButton>
      </div>
    </>
  );
}
export default Example;
```