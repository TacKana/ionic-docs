```tsx
import React from 'react';
import { IonContent, IonFooter, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>标题栏</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} className="ion-padding">
        <h1>滚动内容区域，注意文字会隐藏在标题栏和页脚栏后面。</h1>

        <p>
          这里是示例文本。实际上，在真实应用中，您会在这里放置实际内容。这段文字用于演示当内容区域滚动时，文本如何与页眉和页脚交互。请尝试滚动查看效果。
        </p>
        <p>
          继续滚动以查看更多内容。注意观察文本如何平滑地过渡到标题栏和页脚栏的后方。这种设计模式在移动端应用中十分常见。
        </p>
        <p>
          当您向下滚动时，内容会逐渐向上移动，部分文本会被标题栏遮挡。同样，向上滚动时，底部的文本会被页脚栏遮挡。
        </p>
        <p>
          这种布局确保了标题栏和页脚栏始终保持在视图中，为用户提供持久的导航和操作入口，同时内容区域可以自由滚动。
        </p>
        <p>
          您可以尝试添加更多内容，或者调整浏览器窗口大小，来观察不同情况下的布局表现。
        </p>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>页脚栏</IonTitle>
        </IonToolbar>
      </IonFooter>
    </>
  );
}
export default Example;
```