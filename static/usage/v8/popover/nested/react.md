```tsx
import React from 'react';
import { IonButton, IonContent, IonItem, IonList, IonPopover } from '@ionic/react';
function Example() {
  return (
    <>
      <IonButton id="popover-button">打开菜单</IonButton>
      <IonPopover trigger="popover-button" dismissOnSelect={true}>
        <IonContent>
          <IonList>
            <IonItem button={true} detail={false}>
              选项 1
            </IonItem>
            <IonItem button={true} detail={false}>
              选项 2
            </IonItem>
            <IonItem button={true} id="nested-trigger">
              更多选项...
            </IonItem>

            <IonPopover trigger="nested-trigger" dismissOnSelect={true} side="end">
              <IonContent>
                <IonList>
                  <IonItem button={true} detail={false}>
                    嵌套选项
                  </IonItem>
                </IonList>
              </IonContent>
            </IonPopover>
          </IonList>
        </IonContent>
      </IonPopover>
    </>
  );
}
export default Example;
```