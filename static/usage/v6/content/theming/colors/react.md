```tsx
import React from 'react';
import { IonContent } from '@ionic/react';

function Example() {
  return (
    <>
      <IonContent color="primary" className="ion-padding">
        <h1>主要内容</h1>
        <p>这里是内容的简短描述，不多也不少。</p>
      </IonContent>
      <IonContent color="secondary" className="ion-padding">
        <h1>次要内容</h1>
        <p>这里是内容的简短描述，不多也不少。</p>
      </IonContent>
      <IonContent color="tertiary" className="ion-padding">
        <h1>第三级内容</h1>
        <p>这里是内容的简短描述，不多也不少。</p>
      </IonContent>
      <IonContent color="success" className="ion-padding">
        <h1>成功提示内容</h1>
        <p>这里是内容的简短描述，不多也不少。</p>
      </IonContent>
      <IonContent color="warning" className="ion-padding">
        <h1>警告提示内容</h1>
        <p>这里是内容的简短描述，不多也不少。</p>
      </IonContent>
      <IonContent color="danger" className="ion-padding">
        <h1>危险提示内容</h1>
        <p>这里是内容的简短描述，不多也不少。</p>
      </IonContent>
      <IonContent color="light" className="ion-padding">
        <h1>浅色内容</h1>
        <p>这里是内容的简短描述，不多也不少。</p>
      </IonContent>
      <IonContent color="medium" className="ion-padding">
        <h1>中等色调内容</h1>
        <p>这里是内容的简短描述，不多也不少。</p>
      </IonContent>
      <IonContent color="dark" className="ion-padding">
        <h1>深色内容</h1>
        <p>这里是内容的简短描述，不多也不少。</p>
      </IonContent>
    </>
  );
}
export default Example;
```