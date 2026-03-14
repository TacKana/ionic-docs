```tsx
import React, { useEffect, useRef } from 'react';
import { IonButton, IonCard, IonCardContent, createAnimation } from '@ionic/react';
import type { Animation } from '@ionic/react';

import './main.css';

function Example() {
  const cardEl = useRef<HTMLIonCardElement | null>(null);

  const animation = useRef<Animation | null>(null);

  useEffect(() => {
    if (animation.current === null) {
      animation.current = createAnimation()
        .addElement(cardEl.current!)
        .duration(1500)
        .iterations(Infinity)
        .direction('alternate')
        .fromTo('background', 'blue', 'var(--background)');
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
      <IonCard ref={cardEl}>
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