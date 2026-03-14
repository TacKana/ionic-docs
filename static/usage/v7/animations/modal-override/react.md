```tsx
import React, { useRef } from 'react';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonToolbar,
  IonTitle,
  createAnimation,
} from '@ionic/react';

function Example() {
  const modalEl = useRef<HTMLIonModalElement>(null);

  const enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot!;

    const backdropAnimation = createAnimation()
      .addElement(root.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = createAnimation()
      .addElement(root.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  const leaveAnimation = (baseEl: HTMLElement) => {
    return enterAnimation(baseEl).direction('reverse');
  };

  const closeModal = () => {
    modalEl.current?.dismiss();
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>页面</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="modal-trigger">展示模态框</IonButton>
        <IonModal trigger="modal-trigger" ref={modalEl} enterAnimation={enterAnimation} leaveAnimation={leaveAnimation}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>模态框</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={closeModal}>关闭</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">模态框内容</IonContent>
        </IonModal>
      </IonContent>
    </>
  );
}
export default Example;
```