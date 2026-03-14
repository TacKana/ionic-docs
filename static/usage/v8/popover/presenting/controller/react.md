```tsx
import React from 'react';
import { IonButton, IonContent, useIonPopover } from '@ionic/react';

// 弹窗组件定义
const Popover = () => <IonContent className="ion-padding">Hello World!</IonContent>;

function Example() {
  // 使用 useIonPopover 钩子，配置关闭回调
  const [present, dismiss] = useIonPopover(Popover, {
    onDismiss: (data: any, role: string) => dismiss(data, role),
  });

  return (
    <IonButton
      onClick={(e: any) =>
        present({
          event: e,
          onDidDismiss: (e: CustomEvent) => console.log(`弹窗已关闭，角色: ${e.detail.role}`),
        })
      }
    >
      点击我
    </IonButton>
  );
}
export default Example;
```