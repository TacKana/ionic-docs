```tsx
import React from 'react';
import {
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
  return (
    <IonTabs>
      <IonTab tab="home">
        <IonPage id="home-page">
          <IonHeader>
            <IonToolbar>
              <IonTitle>现在收听</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div className="example-content">现在收听内容</div>
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
            <div className="example-content">电台内容</div>
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
            <div className="example-content">音乐库内容</div>
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
            <div className="example-content">搜索内容</div>
          </IonContent>
        </IonPage>
      </IonTab>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home">
          <IonIcon icon={playCircle} />
          现在收听
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