---
sidebar_label: 示例
title: Ionic React 测试示例
description: 了解如何测试 Ionic React 应用。本文档提供了如何测试不同类型组件的示例。
---

# 示例

## 测试从触发器呈现的模态框

此示例展示了如何测试从触发器呈现的模态框。模态框在用户点击按钮时呈现。

### 示例组件

```tsx title="src/Example.tsx"
import { IonButton, IonModal } from '@ionic/react';

export default function Example() {
  return (
    <>
      <IonButton id="open-modal">打开</IonButton>
      <IonModal trigger="open-modal">模态框内容</IonModal>
    </>
  );
}
```

### 测试模态框

```tsx title="src/Example.test.tsx"
import { IonApp } from '@ionic/react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Example from './Example';

test('点击按钮时呈现模态框', async () => {
  render(
    <IonApp>
      <Example />
    </IonApp>
  );
  // 模拟点击按钮
  fireEvent.click(screen.getByText('打开'));
  // 等待模态框呈现
  await waitFor(() => {
    // 断言模态框已显示
    expect(screen.getByText('模态框内容')).toBeInTheDocument();
  });
});
```

## 测试使用 useIonModal 呈现的模态框

此示例展示了如何测试使用 `useIonModal` hook 呈现的模态框。模态框在用户点击按钮时呈现。

### 示例组件

```tsx title="src/Example.tsx"
import { IonContent, useIonModal, IonHeader, IonToolbar, IonTitle, IonButton, IonPage } from '@ionic/react';

const ModalContent: React.FC = () => {
  return (
    <IonContent>
      <div>模态框内容</div>
    </IonContent>
  );
};

const Example: React.FC = () => {
  const [present] = useIonModal(ModalContent);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>空白</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonButton expand="block" className="ion-margin" onClick={() => present()}>
          打开
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Example;
```

### 测试模态框

```tsx title="src/Example.test.tsx"
import { IonApp } from '@ionic/react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Example from './Example';

test('点击按钮时应呈现 ModalContent', async () => {
  render(
    <IonApp>
      <Example />
    </IonApp>
  );
  // 模拟点击按钮
  fireEvent.click(screen.getByText('打开'));
  // 等待模态框呈现
  await waitFor(() => {
    // 断言模态框已显示
    expect(screen.getByText('模态框内容')).toBeInTheDocument();
  });
});
```
