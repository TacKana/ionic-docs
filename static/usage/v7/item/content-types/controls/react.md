```tsx
import React from 'react';
import { IonCheckbox, IonContent, IonHeader, IonInput, IonItem, IonList, IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>示例</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light">
        <IonList inset={true}>
          <IonItem>
            <IonCheckbox slot="start" aria-label="切换任务完成状态"></IonCheckbox>
            <IonInput aria-label="任务名称" value="买鸡蛋"></IonInput>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" aria-label="切换任务完成状态"></IonCheckbox>
            <IonInput aria-label="任务名称" value="买牛奶"></IonInput>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" aria-label="切换任务完成状态"></IonCheckbox>
            <IonInput aria-label="任务名称" value="倒厨余垃圾"></IonInput>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" aria-label="切换任务完成状态"></IonCheckbox>
            <IonInput aria-label="任务名称" value="取干洗衣物"></IonInput>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" aria-label="切换任务完成状态"></IonCheckbox>
            <IonInput aria-label="任务名称" value="给妈妈打电话"></IonInput>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" aria-label="切换任务完成状态"></IonCheckbox>
            <IonInput aria-label="任务名称" value="订购更多狗粮"></IonInput>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" aria-label="切换任务完成状态"></IonCheckbox>
            <IonInput aria-label="任务名称" value="为这个演示想出新任务"></IonInput>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
}
export default Example;
```