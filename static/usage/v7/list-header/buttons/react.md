```tsx
import React from 'react';
import { IonButton, IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonListHeader>
        <IonLabel>电子游戏</IonLabel>
        <IonButton>查看全部</IonButton>
      </IonListHeader>
      <IonItem>
        <IonLabel>Pokémon Yellow</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Mega Man X</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>The Legend of Zelda</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pac-Man</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Super Mario World</IonLabel>
      </IonItem>
    </IonList>
  );
}
export default Example;
```