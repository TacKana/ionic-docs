```tsx
import React, { useEffect, useRef } from 'react';
import { IonCheckbox } from '@ionic/react';

function Example() {
  const ref = useRef<HTMLAnchorElement>(null);

  /**
   * IonCheckbox 会在此处监听原生点击事件，因此我们需要
   * 在原生点击事件触发时调用 stopPropagation，而不是在
   * 合成点击事件触发时调用。
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
        条款和条件
      </a>
    </IonCheckbox>
  );
}
export default Example;
```