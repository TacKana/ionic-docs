```tsx
import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

function Example() {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>卡片标题</IonCardTitle>
        <IonCardSubtitle>卡片副标题</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>这里是一小段卡片内容描述，不多不少，恰到好处。</IonCardContent>
    </IonCard>
  );
}
export default Example;
```