```tsx
import React from 'react';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>标题</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">标题</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          <IonItem>项目 1</IonItem>
          <IonItem>项目 2</IonItem>
          <IonItem>项目 3</IonItem>
          <IonItem>项目 4</IonItem>
          <IonItem>项目 5</IonItem>
          <IonItem>项目 6</IonItem>
          <IonItem>项目 7</IonItem>
          <IonItem>项目 8</IonItem>
          <IonItem>项目 9</IonItem>
          <IonItem>项目 10</IonItem>
          <IonItem>项目 11</IonItem>
          <IonItem>项目 12</IonItem>
          <IonItem>项目 13</IonItem>
          <IonItem>项目 14</IonItem>
          <IonItem>项目 15</IonItem>
          <IonItem>项目 16</IonItem>
          <IonItem>项目 17</IonItem>
          <IonItem>项目 18</IonItem>
          <IonItem>项目 19</IonItem>
          <IonItem>项目 20</IonItem>
        </IonList>
      </IonContent>
    </>
  );
}
export default Example;
```