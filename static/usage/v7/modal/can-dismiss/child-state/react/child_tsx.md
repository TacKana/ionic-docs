```tsx
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonContent,
  IonList,
  IonItem,
  IonCheckbox,
  IonNote,
} from '@ionic/react';

import type { CheckboxCustomEvent } from '@ionic/core/components';

interface ChildProps {
  dismissChange: (checked: boolean) => void;
  dismiss: () => void;
}

function Child({ dismissChange, dismiss }: ChildProps) {
  const checkboxChanged = (event: CheckboxCustomEvent) => {
    const checked = event.detail.checked;
    dismissChange(checked);
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>模态框</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => dismiss()}>关闭</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonCheckbox onIonChange={checkboxChanged}>
              覆盖关闭行为
              <br />
              <IonNote className="ion-text-wrap">
                切换此复选框以允许直接关闭模态框，无需确认提示。
              </IonNote>
            </IonCheckbox>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
}
export default Child;
```