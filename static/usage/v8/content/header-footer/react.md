```tsx
import React from 'react';
import { IonContent, IonFooter, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>页眉</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>标题 1</h1>
        <h2>标题 2</h2>
        <h3>标题 3</h3>
        <h4>标题 4</h4>
        <h5>标题 5</h5>
        <h6>标题 6</h6>

        <p>这里是内容的简短文本描述。不多不少，恰到好处。</p>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>页脚</IonTitle>
        </IonToolbar>
      </IonFooter>
    </>
  );
}
export default Example;
```