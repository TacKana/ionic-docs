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
            <IonTitle>遮罩层</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>
            这是一段占位文本，用于展示当遮罩层显示时，页面内容的视觉效果。您可以在此处放置任何想展示的信息或组件。
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