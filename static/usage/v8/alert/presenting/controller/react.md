```tsx
import React from 'react';
import { IonButton, useIonAlert } from '@ionic/react';

function Example() {
  const [presentAlert] = useIonAlert();

  return (
    <IonButton
      onClick={() =>
        presentAlert({
          header: '简短标题最佳',
          subHeader: '副标题可选',
          message: '提示信息应为简短、完整的句子。',
          buttons: ['操作'],
        })
      }
    >
      点击我
    </IonButton>
  );
}
export default Example;
```