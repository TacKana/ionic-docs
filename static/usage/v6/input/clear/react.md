```tsx
import React from 'react';
import { IonInput, IonItem, IonLabel, IonList } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonLabel position="stacked">带清除按钮的输入框</IonLabel>
        <IonInput clearInput={true} placeholder="输入文本以显示清除按钮" value="默认值"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">编辑时清除的输入框</IonLabel>
        <IonInput clearOnEdit={true} placeholder="输入文本，离开输入框，返回并输入以清除"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">密码输入框</IonLabel>
        <IonInput type="password" placeholder="输入文本，离开输入框，返回并输入以清除"></IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```