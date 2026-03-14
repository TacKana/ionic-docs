---
sidebar_label: 示例
title: Ionic React 测试示例
description: 学习如何测试 Ionic React 应用程序。本文档提供了测试不同类型组件的示例。
---

# 示例

## 测试从触发器呈现的模态框

此示例展示了如何测试通过触发器呈现的模态框。当用户点击按钮时，模态框会显示出来。

### 示例组件

```tsx title="src/Example.tsx"
import { IonButton, IonModal } from '@ionic/react';

export default function Example() {
  return (
    <>
      <IonButton id="open-modal">Open</IonButton>
      <IonModal trigger="open-modal">Modal content</IonModal>
    </>
  );
}
```

### 测试模态框

```tsx title="src/Example.test.tsx"
import { IonApp } from '@ionic/react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Example from './Example';

test('button presents a modal when clicked', async () => {
  render(
    <IonApp>
      <Example />
    </IonApp>
  );
  // 模拟点击按钮
  fireEvent.click(screen.getByText('Open'));
  // 等待模态框呈现
  await waitFor(() => {
    // 断言模态框存在
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });
});
```

## 测试通过 useIonModal 呈现的模态框

此示例展示了如何测试使用 `useIonModal` 钩子呈现的模态框。当用户点击按钮时，模态框会显示出来。

### 示例组件

```tsx title="src/Example.tsx"
import { IonContent, useIonModal, IonHeader, IonToolbar, IonTitle, IonButton, IonPage } from '@ionic/react';

const ModalContent: React.FC = () => {
  return (
    <IonContent>
      <div>Modal Content</div>
    </IonContent>
  );
};

const Example: React.FC = () => {
  const [present] = useIonModal(ModalContent);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonButton expand="block" className="ion-margin" onClick={() => present()}>
          Open
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

test('should present ModalContent when button is clicked', async () => {
  render(
    <IonApp>
      <Example />
    </IonApp>
  );
  // 模拟点击按钮
  fireEvent.click(screen.getByText('Open'));
  // 等待模态框呈现
  await waitFor(() => {
    // 断言模态框存在
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });
});
```