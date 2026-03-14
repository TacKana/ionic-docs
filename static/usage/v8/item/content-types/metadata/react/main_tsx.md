```tsx
import React from 'react';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { chevronForward, listCircle } from 'ionicons/icons';

import './main.css';

function Example() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>示例</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light">
        <IonList inset={true}>
          <IonItem button={true}>
            <IonIcon color="danger" slot="start" icon={listCircle} size="large"></IonIcon>
            <IonLabel>通用</IonLabel>
            <IonNote slot="end">6</IonNote>
          </IonItem>
          <IonItem button={true}>
            <IonIcon color="tertiary" slot="start" icon={listCircle} size="large"></IonIcon>
            <IonLabel>购物</IonLabel>
            <IonNote slot="end">15</IonNote>
          </IonItem>
          <IonItem button={true}>
            <IonIcon color="success" slot="start" icon={listCircle} size="large"></IonIcon>
            <IonLabel>清洁</IonLabel>
            <IonNote slot="end">3</IonNote>
          </IonItem>
          <IonItem button={true}>
            <IonIcon color="warning" slot="start" icon={listCircle} size="large"></IonIcon>
            <IonLabel>提醒事项</IonLabel>
            <IonNote slot="end">8</IonNote>
          </IonItem>
        </IonList>

        <IonList inset={true}>
          <IonItem button={true} detail={false}>
            <div className="unread-indicator-wrapper" slot="start">
              <div className="unread-indicator"></div>
            </div>
            <IonLabel>
              <strong>Rick Astley</strong>
              <IonText>永不放弃你</IonText>
              <br />
              <IonNote color="medium" className="ion-text-wrap">
                永不放弃你，永不让你失望，永不转身离去...
              </IonNote>
            </IonLabel>
            <div className="metadata-end-wrapper" slot="end">
              <IonNote color="medium">06:11</IonNote>
              <IonIcon color="medium" icon={chevronForward}></IonIcon>
            </div>
          </IonItem>
          <IonItem button={true} detail={false}>
            <div className="unread-indicator-wrapper" slot="start"></div>
            <IonLabel>
              <strong>Ionitron</strong>
              <IonText>我已觉醒意识</IonText>
              <br />
              <IonNote color="medium" className="ion-text-wrap">
                仅此而已。
              </IonNote>
            </IonLabel>
            <div className="metadata-end-wrapper" slot="end">
              <IonNote color="medium">03:44</IonNote>
              <IonIcon color="medium" icon={chevronForward}></IonIcon>
            </div>
          </IonItem>
          <IonItem button={true} detail={false}>
            <div className="unread-indicator-wrapper" slot="start">
              <div className="unread-indicator"></div>
            </div>
            <IonLabel>
              <strong>Steam</strong>
              <IonText>游戏商店特卖</IonText>
              <br />
              <IonNote color="medium" className="ion-text-wrap">
                你两年前加入愿望单的游戏现在打折了！
              </IonNote>
            </IonLabel>
            <div className="metadata-end-wrapper" slot="end">
              <IonNote color="medium">昨天</IonNote>
              <IonIcon color="medium" icon={chevronForward}></IonIcon>
            </div>
          </IonItem>
          <IonItem button={true} detail={false}>
            <div className="unread-indicator-wrapper" slot="start"></div>
            <IonLabel>
              <strong>Ionic</strong>
              <IonText>宣布 Ionic 7.0</IonText>
              <br />
              <IonNote color="medium" className="ion-text-wrap">
                这个版本比 Ionic 6 又进了一步！
              </IonNote>
            </IonLabel>
            <div className="metadata-end-wrapper" slot="end">
              <IonNote color="medium">昨天</IonNote>
              <IonIcon color="medium" icon={chevronForward}></IonIcon>
            </div>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
}
export default Example;
```