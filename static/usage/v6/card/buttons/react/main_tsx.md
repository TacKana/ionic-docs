```tsx
import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>卡片标题</IonCardTitle>
        <IonCardSubtitle>卡片副标题</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>这里是为卡片内容提供的一小段文本描述。不多不少，恰到好处。</IonCardContent>

      <IonButton fill="clear">操作 1</IonButton>
      <IonButton fill="clear">操作 2</IonButton>
    </IonCard>
  );
}
export default Example;
```