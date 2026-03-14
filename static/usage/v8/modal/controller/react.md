```tsx
import React, { useState, useRef } from 'react';
import {
  IonButtons,
  IonButton,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonItem,
  IonInput,
  useIonModal,
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';

const ModalExample = ({ dismiss }: { dismiss: (data?: string | null | undefined | number, role?: string) => void }) => {
  const inputRef = useRef<HTMLIonInputElement>(null);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton color="medium" onClick={() => dismiss(null, 'cancel')}>
              取消
            </IonButton>
          </IonButtons>
          <IonTitle>欢迎</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => dismiss(inputRef.current?.value, 'confirm')} strong={true}>
              确认
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonInput ref={inputRef} labelPlacement="stacked" label="请输入您的姓名" placeholder="您的姓名" />
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

function Example() {
  const [present, dismiss] = useIonModal(ModalExample, {
    dismiss: (data: string, role: string) => dismiss(data, role),
  });
  const [message, setMessage] = useState('此模态框示例使用 modalController 来显示和关闭模态框。');

  function openModal() {
    present({
      onWillDismiss: (event: CustomEvent<OverlayEventDetail>) => {
        if (event.detail.role === 'confirm') {
          setMessage(`您好，${event.detail.data}！`);
        }
      },
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>控制器模态框</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="block" onClick={() => openModal()}>
          打开
        </IonButton>
        <p>{message}</p>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```