```tsx
import React, { useState } from 'react';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';

function Example() {
  const [logs, setLogs] = useState<string[]>([]);

  const pushLog = (msg: string) => {
    setLogs([msg, ...logs]);
  };

  return (
    <>
      <IonList>
        <IonItem>
          <IonSelect
            placeholder="选择水果"
            onIonChange={(e) => pushLog(`ionChange 事件触发，值为: ${e.detail.value}`)}
            onIonCancel={() => pushLog('ionCancel 事件触发')}
            onIonDismiss={() => pushLog('ionDismiss 事件触发')}
          >
            <IonSelectOption value="apples">苹果</IonSelectOption>
            <IonSelectOption value="oranges">橙子</IonSelectOption>
            <IonSelectOption value="bananas">香蕉</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonList>
      <div className="ion-padding">
        {logs.map((log) => (
          <p>{log}</p>
        ))}
      </div>
    </>
  );
}

export default Example;
```