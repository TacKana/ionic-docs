```tsx
import React from 'react';
import { IonInput, IonItem, IonList } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonInput
          label="带清除按钮的输入框"
          labelPlacement="stacked"
          clearInput={true}
          placeholder="输入文本以显示清除按钮"
          value="默认值"
        ></IonInput>
      </IonItem>

      <IonItem>
        <IonInput
          label="编辑时清除的输入框"
          labelPlacement="stacked"
          clearOnEdit={true}
          placeholder="输入文本，离开输入框，返回并继续输入以清除内容"
        ></IonInput>
      </IonItem>

      <IonItem>
        <IonInput
          label="密码输入框"
          labelPlacement="stacked"
          type="password"
          placeholder="输入文本，离开输入框，返回并继续输入以清除内容"
        ></IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```