```tsx
import React from 'react';
import { IonItem, IonLabel, IonList, IonListHeader, IonSkeletonText, IonThumbnail } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <IonList>
      <IonListHeader>
        {/* 骨架屏标题加载动画 */}
        <IonSkeletonText animated={true} style={{ width: '80px' }}></IonSkeletonText>
      </IonListHeader>
      <IonItem>
        {/* 缩略图位置骨架屏 */}
        <IonThumbnail slot="start">
          <IonSkeletonText animated={true}></IonSkeletonText>
        </IonThumbnail>
        <IonLabel>
          <h3>
            {/* 主标题加载动画 */}
            <IonSkeletonText animated={true} style={{ width: '80%' }}></IonSkeletonText>
          </h3>
          <p>
            {/* 副标题加载动画 */}
            <IonSkeletonText animated={true} style={{ width: '60%' }}></IonSkeletonText>
          </p>
          <p>
            {/* 辅助信息加载动画 */}
            <IonSkeletonText animated={true} style={{ width: '30%' }}></IonSkeletonText>
          </p>
        </IonLabel>
      </IonItem>
    </IonList>
  );
}
export default Example;
```