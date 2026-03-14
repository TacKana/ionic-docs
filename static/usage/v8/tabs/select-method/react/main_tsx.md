```tsx
import React, { useRef } from 'react';
import {
  IonButton,
  IonContent,
  IonIcon,
  IonHeader,
  IonTab,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonToolbar,
  IonPage,
} from '@ionic/react';

import { playCircle, radio, library, search } from 'ionicons/icons';

import './main.css';

function Example() {
  const selectRadio = () => {
    const tabs = document.querySelector('ion-tabs');
    tabs?.select('radio');
  };

  return (
    <IonTabs>
      <IonTab tab="home">
        <IonPage id="home-page">
          <IonHeader>
            <IonToolbar>
              <IonTitle>立即收听</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div className="example-content">
              立即收听页面内容
              <IonButton onClick={selectRadio}>前往电台</IonButton>
            </div>
          </IonContent>
        </IonPage>
      </IonTab>
      <IonTab tab="radio">
        <IonPage id="radio-page">
          <IonHeader>
            <IonToolbar>
              <IonTitle>电台</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div className="example-content">电台页面内容</div>
          </IonContent>
        </IonPage>
      </IonTab>
      <IonTab tab="library">
        <IonPage id="library-page">
          <IonHeader>
            <IonToolbar>
              <IonTitle>音乐库</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div className="example-content">音乐库页面内容</div>
          </IonContent>
        </IonPage>
      </IonTab>
      <IonTab tab="search">
        <IonPage id="search-page">
          <IonHeader>
            <IonToolbar>
              <IonTitle>搜索</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div className="example-content">搜索页面内容</div>
          </IonContent>
        </IonPage>
      </IonTab>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home">
          <IonIcon icon={playCircle} />
          立即收听
        </IonTabButton>
        <IonTabButton tab="radio">
          <IonIcon icon={radio} />
          电台
        </IonTabButton>
        <IonTabButton tab="library">
          <IonIcon icon={library} />
          音乐库
        </IonTabButton>
        <IonTabButton tab="search">
          <IonIcon icon={search} />
          搜索
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}
export default Example;
```