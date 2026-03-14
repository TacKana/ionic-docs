```tsx
import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

function Example() {
  return (
    <IonCard>
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <IonCardHeader>
        <IonCardTitle>卡片标题</IonCardTitle>
        <IonCardSubtitle>卡片副标题</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>这里是一小段描述卡片内容的文字。不多不少，恰到好处。</IonCardContent>
    </IonCard>
  );
}
export default Example;
```