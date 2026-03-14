```tsx
import React from 'react';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonButtons, IonButton } from '@ionic/react';

function Example() {
  return (
    <>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>标题</IonTitle>
          <IonButtons collapse={true} slot="end">
            <IonButton>按钮</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">标题</IonTitle>
            <IonButtons collapse={true} slot="end">
              <IonButton>按钮</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <div className="ion-padding">滚动列表可查看标题和按钮的折叠效果。</div>

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