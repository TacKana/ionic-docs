---
sidebar_label: 最佳实践
---

# 最佳实践

## 测试模板中需要 IonApp

在使用 React Testing Library 渲染的测试模板中，你必须使用 `IonApp` 组件包裹你的组件。这是组件正确渲染的必要条件。

```tsx title="Example.test.tsx"
import { IonApp } from '@ionic/react';
import { render } from "@testing-library/react";

import Example from './Example';

test('示例', () => {
  render(
    <IonApp>
      <Example />
    </IonApp>
  );
  ...
});
```

## 使用 `user-event` 模拟用户交互

React Testing Library 推荐使用 `user-event` 库来模拟用户交互。这个库比 React Testing Library 提供的 `fireEvent` 函数更能真实地模拟用户交互。

```tsx title="Example.test.tsx"
import { IonApp } from '@ionic/react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Example from './Example';

test('示例', async () => {
  const user = userEvent.setup();

  render(
    <IonApp>
      <Example />
    </IonApp>
  );

  await user.click(screen.getByRole('button', { name: /点击我！/i }));
});
```

有关 `user-event` 的更多信息，请参阅 [user-event 文档](https://testing-library.com/docs/user-event/intro/)。
