```tsx
import React, { useState, useRef } from 'react';
import { IonInput, IonItem, IonList } from '@ionic/react';

function Example() {
  const [inputModel, setInputModel] = useState('');
  const ionInputEl = useRef<HTMLIonInputElement>(null);

  const onInput = (event: Event) => {
    const value = (event.target as HTMLIonInputElement).value as string;

    // 移除非字母数字字符
    const filteredValue = value.replace(/[^a-zA-Z0-9]+/g, '');

    /**
     * 同时更新状态变量和组件，
     * 以保持它们之间的同步。
     */
    setInputModel(filteredValue);

    const inputCmp = ionInputEl.current;
    if (inputCmp !== null) {
      inputCmp.value = filteredValue;
    }
  };

  return (
    <IonList>
      <IonItem>
        <IonInput label="仅允许字母和数字" value={inputModel} onIonInput={onInput} ref={ionInputEl}></IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```