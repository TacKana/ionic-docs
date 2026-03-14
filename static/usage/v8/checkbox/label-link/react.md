```tsx
import React, { useEffect, useRef } from 'react';
import { IonCheckbox } from '@ionic/react';

function Example() {
  const ref = useRef<HTMLAnchorElement>(null);

  /**
   * IonCheckbox 组件会监听原生的点击事件，
   * 因此我们需要在原生点击事件触发时调用 stopPropagation，
   * 而不是在合成点击事件触发时调用。
   */
  useEffect(() => {
    ref.current?.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  }, [ref]);

  return (
    <IonCheckbox>
      我同意{' '}
      <a href="#" ref={ref}>
        条款与条件
      </a>
    </IonCheckbox>
  );
}
export default Example;
```