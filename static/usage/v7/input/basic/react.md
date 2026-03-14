```tsx
import React from 'react';
import { IonInput, IonItem, IonList } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonInput label="默认输入框"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="带占位符的输入框" placeholder="请输入公司名称"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="带初始值的输入框" value="121 S Pinckney St #300"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="只读输入框" value="Madison" readonly={true}></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="禁用输入框" value="53703" disabled={true}></IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```