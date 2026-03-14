```tsx
import React from 'react';
import {
  IonCheckbox,
  IonInput,
  IonItem,
  IonLabel,
  IonRange,
  IonSelect,
  IonSelectOption,
  IonToggle,
} from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem>
        <IonLabel>默认输入</IonLabel>
        <IonInput placeholder="输入文本"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="fixed">固定位置输入</IonLabel>
        <IonInput placeholder="输入文本"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">堆叠式输入</IonLabel>
        <IonInput placeholder="输入文本"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">浮动标签输入</IonLabel>
        <IonInput placeholder="输入文本"></IonInput>
      </IonItem>

      <IonItem fill="outline">
        <IonLabel position="floating">浮动标签输入：轮廓样式（仅限 MD 设计）</IonLabel>
        <IonInput placeholder="输入文本"></IonInput>
      </IonItem>

      <IonItem fill="solid">
        <IonLabel position="floating">浮动标签输入：实心样式（仅限 MD 设计）</IonLabel>
        <IonInput placeholder="输入文本"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>选择器</IonLabel>
        <IonSelect placeholder="请选择">
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
        <IonLabel>开关</IonLabel>
        <IonToggle slot="end"></IonToggle>
      </IonItem>

      <IonItem>
        <IonLabel>复选框</IonLabel>
        <IonCheckbox slot="end"></IonCheckbox>
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">范围滑块</IonLabel>
        <IonRange></IonRange>
      </IonItem>
    </>
  );
}
export default Example;
```