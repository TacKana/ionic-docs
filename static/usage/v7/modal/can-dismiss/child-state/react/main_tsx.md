```tsx
import React, { useState, useRef, useEffect } from 'react';
import {
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  useIonActionSheet,
} from '@ionic/react';

import Child from './Child';

function Example() {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);
  const [canDismissOverride, setCanDismissOverride] = useState(false);

  const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);
  const [present] = useIonActionSheet();

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  function dismiss() {
    modal.current?.dismiss();
  }

  function onWillPresent() {
    // 当模态框显示时重置覆盖标志
    setCanDismissOverride(false);
  }

  async function canDismiss() {
    if (canDismissOverride) {
      // 检查覆盖标志，如果可以直接关闭覆盖层则提前返回
      return true;
    }
    return new Promise<boolean>((resolve, reject) => {
      present({
        header: '确认关闭吗？',
        buttons: [
          {
            text: '是',
            role: 'confirm',
          },
          {
            text: '否',
            role: 'cancel',
          },
        ],
        onWillDismiss: (event) => {
          if (event.detail.role === 'confirm') {
            resolve(true);
          } else {
            reject();
          }
        },
      });
    });
  }

  return (
    <IonPage ref={page}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>应用</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="open-modal" expand="block">
          打开
        </IonButton>
        <IonModal
          ref={modal}
          trigger="open-modal"
          canDismiss={canDismiss}
          presentingElement={presentingElement!}
          onWillPresent={onWillPresent}
        >
          <Child
            dismiss={dismiss}
            dismissChange={(checked) => {
              setCanDismissOverride(checked);
            }}
          />
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```