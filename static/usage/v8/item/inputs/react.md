```tsx
import React from 'react';
import { IonCheckbox, IonInput, IonItem, IonRange, IonSelect, IonSelectOption, IonToggle } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem>
        <IonInput label="默认输入框" placeholder="输入文本"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="固定标签输入框" label-placement="fixed" placeholder="输入文本"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="堆叠标签输入框" label-placement="stacked" placeholder="输入文本"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="浮动标签输入框" label-placement="floating" placeholder="输入文本"></IonInput>
      </IonItem>

      <IonItem>
        <IonSelect label="选择框" placeholder="请选择">
          <IonSelectOption value="">无游戏主机</IonSelectOption>
          <IonSelectOption value="nes">NES</IonSelectOption>
          <IonSelectOption value="n64">Nintendo64</IonSelectOption>
          <IonSelectOption value="ps">PlayStation</IonSelectOption>
          <IonSelectOption value="genesis">Sega Genesis</IonSelectOption>
          <IonSelectOption value="saturn">Sega Saturn</IonSelectOption>
          <IonSelectOption value="snes">SNES</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonToggle>开关</IonToggle>
      </IonItem>

      <IonItem>
        <IonCheckbox>复选框</IonCheckbox>
      </IonItem>

      <IonItem>
        <IonRange label-placement="start">
          <div slot="label">范围滑块</div>
        </IonRange>
      </IonItem>
    </>
  );
}
export default Example;
```