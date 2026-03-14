---
sidebar_label: 最佳实践
---

# 最佳实践

## 测试模板中必须包含 IonApp

在使用 React Testing Library 进行渲染时，你的测试模板必须用 `IonApp` 组件包裹待测组件。这是确保组件正确渲染的必要条件。

```tsx title="Example.test.tsx"
import { IonApp } from '@ionic/react';
import { render } from "@testing-library/react";

import Example from './Example';

test('example', () => {
  render(
    <IonApp>
      <Example />
    </IonApp>
  );
  ...
});
```

## 使用 `user-event` 模拟用户交互

React Testing Library 推荐使用 `user-event` 库来模拟用户交互。相比 React Testing Library 自带的 `fireEvent` 函数，这个库能提供更贴近真实用户操作的模拟效果。

```tsx title="Example.test.tsx"
import { IonApp } from '@ionic/react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Example from './Example';

test('example', async () => {
  const user = userEvent.setup();

  render(
    <IonApp>
      <Example />
    </IonApp>
  );

  await user.click(screen.getByRole('button', { name: /click me!/i }));
});
```

关于 `user-event` 的更多信息，请查阅 [user-event 文档](https://testing-library.com/docs/user-event/intro/)。