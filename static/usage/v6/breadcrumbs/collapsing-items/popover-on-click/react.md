```tsx
import React, { useRef, useState } from 'react';
import { IonBreadcrumb, IonBreadcrumbs, IonContent, IonItem, IonLabel, IonList, IonPopover } from '@ionic/react';

function Example() {
  const popover = useRef<HTMLIonPopoverElement>(null);
  const [collapsedBreadcrumbs, setCollapsedBreadcrumbs] = useState<HTMLIonBreadcrumbElement[]>([]);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const openPopover = (e: Event) => {
    setCollapsedBreadcrumbs((e as CustomEvent).detail.collapsedBreadcrumbs);
    popover.current!.event = e;
    setPopoverOpen(true);
  };

  return (
    <>
      <IonBreadcrumbs maxItems={4} onIonCollapsedClick={openPopover}>
        <IonBreadcrumb href="#home">首页</IonBreadcrumb>
        <IonBreadcrumb href="#electronics">电子产品</IonBreadcrumb>
        <IonBreadcrumb href="#photography">摄影器材</IonBreadcrumb>
        <IonBreadcrumb href="#cameras">相机</IonBreadcrumb>
        <IonBreadcrumb href="#film">胶卷</IonBreadcrumb>
        <IonBreadcrumb href="#35mm">35毫米</IonBreadcrumb>
      </IonBreadcrumbs>
      <IonPopover ref={popover} isOpen={popoverOpen} onDidDismiss={() => setPopoverOpen(false)}>
        <IonContent>
          <IonList>
            {collapsedBreadcrumbs.map((breadcrumb, i) => (
              <IonItem href={breadcrumb.href} lines={i === collapsedBreadcrumbs.length - 1 ? 'none' : undefined}>
                <IonLabel>{breadcrumb.textContent}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonPopover>
    </>
  );
}
export default Example;
```