```tsx
import React, { useEffect, useRef } from 'react';
import { IonButton, IonCard, IonCardContent, createAnimation } from '@ionic/react';
import type { Animation } from '@ionic/react';

function Example() {
  const cardEl = useRef<HTMLIonCardElement | null>(null);

  const animation = useRef<Animation | null>(null);

  useEffect(() => {
    if (animation.current === null) {
      animation.current = createAnimation()
        .addElement(cardEl.current!)
        .duration(3000)
        .iterations(Infinity)
        .keyframes([
          { offset: 0, width: '80px' },
          { offset: 0.72, width: 'var(--width)' },
          { offset: 1, width: '240px' },
        ]);
    }
  }, [cardEl]);

  const play = () => {
    animation.current?.play();
  };
  const pause = () => {
    animation.current?.pause();
  };
  const stop = () => {
    animation.current?.stop();
  };

  return (
    <>
      <IonCard ref={cardEl} style={{ width: '80px', '--width': '160px' } as React.CSSProperties}>
        <IonCardContent>卡片</IonCardContent>
      </IonCard>
      <IonButton onClick={play}>播放</IonButton>
      <IonButton onClick={pause}>暂停</IonButton>
      <IonButton onClick={stop}>停止</IonButton>
    </>
  );
}
export default Example;
```