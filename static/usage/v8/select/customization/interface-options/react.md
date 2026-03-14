```tsx
import React from 'react';
import { IonItem, IonLabel, IonList, IonSelect, IonSelectOption } from '@ionic/react';
function Example() {
  const customAlertOptions = {
    header: '披萨配料',
    subHeader: '选择您最喜欢的配料',
    message: '只能选择一种',
    translucent: true,
  };

  const customPopoverOptions = {
    header: '发色',
    subHeader: '选择您的头发颜色',
    message: '仅选择您主要的发色',
  };

  const customActionSheetOptions = {
    header: '颜色',
    subHeader: '选择您最喜欢的颜色',
  };

  const customModalOptions = {
    header: '最喜欢的糖果',
    breakpoints: [0, 0.5],
    initialBreakpoint: 0.5,
  };

  return (
    <IonList>
      <IonItem>
        <IonSelect label="Alert" interfaceOptions={customAlertOptions} interface="alert" placeholder="选择一项">
          <IonSelectOption value="bacon">培根</IonSelectOption>
          <IonSelectOption value="onions">洋葱</IonSelectOption>
          <IonSelectOption value="pepperoni">意大利辣肠</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonSelect label="Popover" interfaceOptions={customPopoverOptions} interface="popover" placeholder="选择一项">
          <IonSelectOption value="brown">棕色</IonSelectOption>
          <IonSelectOption value="blonde">金色</IonSelectOption>
          <IonSelectOption value="red">红色</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonSelect
          label="Action Sheet"
          interfaceOptions={customActionSheetOptions}
          interface="action-sheet"
          placeholder="选择一项"
        >
          <IonSelectOption value="red">红色</IonSelectOption>
          <IonSelectOption value="green">绿色</IonSelectOption>
          <IonSelectOption value="blue">蓝色</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonSelect label="Modal" interfaceOptions={customModalOptions} interface="modal" placeholder="选择一项">
          <IonSelectOption value="reese's">瑞斯</IonSelectOption>
          <IonSelectOption value="snickers">士力架</IonSelectOption>
          <IonSelectOption value="twix">特趣</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
  );
}
export default Example;
```