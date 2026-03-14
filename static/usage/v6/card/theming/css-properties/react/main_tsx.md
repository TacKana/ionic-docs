```tsx
import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>卡片标题</IonCardTitle>
        <IonCardSubtitle>卡片副标题</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>这里是卡片内容的一段简短描述。不多也不少。</IonCardContent>
    </IonCard>
  );
}
export default Example;
```