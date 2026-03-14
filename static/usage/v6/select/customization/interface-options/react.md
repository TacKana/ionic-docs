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
    header: '发色',
    subHeader: '选择你的发色',
    message: '仅选择你的主要发色',
  };

  const customActionSheetOptions = {
    header: '颜色',
    subHeader: '选择你最喜欢的颜色',
  };

  return (
    <IonList>
      <IonItem>
        <IonLabel>警告框</IonLabel>
        <IonSelect interfaceOptions={customAlertOptions} interface="alert" placeholder="选择一项">
          <IonSelectOption value="bacon">培根</IonSelectOption>
          <IonSelectOption value="onions">洋葱</IonSelectOption>
          <IonSelectOption value="pepperoni">意大利辣香肠</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonLabel>弹出框</IonLabel>
        <IonSelect interfaceOptions={customPopoverOptions} interface="popover" placeholder="选择一项">
          <IonSelectOption value="brown">棕色</IonSelectOption>
          <IonSelectOption value="blonde">金色</IonSelectOption>
          <IonSelectOption value="red">红色</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonLabel>操作菜单</IonLabel>
        <IonSelect interfaceOptions={customActionSheetOptions} interface="action-sheet" placeholder="选择一项">
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