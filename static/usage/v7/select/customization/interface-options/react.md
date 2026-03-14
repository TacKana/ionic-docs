```tsx
import React from 'react';
import { IonItem, IonLabel, IonList, IonSelect, IonSelectOption } from '@ionic/react';
function Example() {
  const customAlertOptions = {
    header: '披萨配料',
    subHeader: '选择你最喜欢的配料',
    message: '只能选择一个',
    translucent: true,
  };

  const customPopoverOptions = {
    header: '头发颜色',
    subHeader: '选择你的头发颜色',
    message: '只选择你的主要发色',
  };

  const customActionSheetOptions = {
    header: '颜色',
    subHeader: '选择你最喜欢的颜色',
  };

  return (
    <IonList>
      <IonItem>
        <IonSelect label="警告框" interfaceOptions={customAlertOptions} interface="alert" placeholder="选择一个">
          <IonSelectOption value="bacon">培根</IonSelectOption>
          <IonSelectOption value="onions">洋葱</IonSelectOption>
          <IonSelectOption value="pepperoni">辣香肠</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonSelect label="弹出框" interfaceOptions={customPopoverOptions} interface="popover" placeholder="选择一个">
          <IonSelectOption value="brown">棕色</IonSelectOption>
          <IonSelectOption value="blonde">金色</IonSelectOption>
          <IonSelectOption value="red">红色</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonSelect
          label="动作面板"
          interfaceOptions={customActionSheetOptions}
          interface="action-sheet"
          placeholder="选择一个"
        >
          <IonSelectOption value="red">红色</IonSelectOption>
          <IonSelectOption value="green">绿色</IonSelectOption>
          <IonSelectOption value="blue">蓝色</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
  );
}
export default Example;
```