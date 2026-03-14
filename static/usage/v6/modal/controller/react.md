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
  IonLabel,
  IonInput,
  useIonModal,
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';

// 模态框组件示例
const ModalExample = ({
  onDismiss,
}: {
  onDismiss: (data?: string | null | undefined | number, role?: string) => void;
}) => {
  const inputRef = useRef<HTMLIonInputElement>(null);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton color="medium" onClick={() => onDismiss(null, 'cancel')}>
              取消
            </IonButton>
          </IonButtons>
          <IonTitle>欢迎</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => onDismiss(inputRef.current?.value, 'confirm')} strong={true}>
              确认
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">请输入您的姓名</IonLabel>
          <IonInput ref={inputRef} placeholder="请输入姓名" />
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

function Example() {
  const [present, dismiss] = useIonModal(ModalExample, {
    onDismiss: (data: string, role: string) => dismiss(data, role),
  });
  const [message, setMessage] = useState('此模态框示例使用 modalController 来呈现和关闭模态框。');

  function openModal() {
    present({
      onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => {
        if (ev.detail.role === 'confirm') {
          setMessage(`你好，${ev.detail.data}！`);
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
          打开模态框
        </IonButton>
        <p>{message}</p>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```