```tsx
import React, { useEffect, useState } from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRange,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/react';
import type { ToggleCustomEvent } from '@ionic/react';
import { personCircle, personCircleOutline, sunny, sunnyOutline } from 'ionicons/icons';

import './main.css';

function Example() {
  const [paletteToggle, setPaletteToggle] = useState(false);

  // 监听开关的选中/取消选中状态，以切换深色调色板
  const toggleChange = (event: ToggleCustomEvent) => {
    toggleDarkPalette(event.detail.checked);
  };

  // 在 html 元素上添加或移除 "ion-palette-dark" 类
  const toggleDarkPalette = (shouldAdd: boolean) => {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  };

  // 根据是否为深色模式，设置开关状态并更新调色板
  const initializeDarkPalette = (isDark: boolean) => {
    setPaletteToggle(isDark);
    toggleDarkPalette(isDark);
  };

  useEffect(() => {
    // 使用 matchMedia 检查用户偏好
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // 根据 prefers-color-scheme 媒体查询的初始值，初始化深色调色板
    initializeDarkPalette(prefersDark.matches);

    const setDarkPaletteFromMediaQuery = (mediaQuery: MediaQueryListEvent) => {
      initializeDarkPalette(mediaQuery.matches);
    };

    // 监听 prefers-color-scheme 媒体查询的变化
    prefersDark.addEventListener('change', setDarkPaletteFromMediaQuery);

    return () => {
      prefersDark.removeEventListener('change', setDarkPaletteFromMediaQuery);
    };
  }, []);

  return (
    <>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton default-href="#"></IonBackButton>
          </IonButtons>
          <IonTitle>显示设置</IonTitle>
          <IonButtons slot="end">
            <IonButton color="dark">
              <IonIcon slot="icon-only" ios={personCircleOutline} md={personCircle}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonListHeader>外观</IonListHeader>
        <IonList inset={true}>
          <IonItem>
            <IonToggle checked={paletteToggle} onIonChange={toggleChange} justify="space-between">
              深色模式
            </IonToggle>
          </IonItem>
        </IonList>

        <IonList inset={true}>
          <IonItem button={true}>文字大小</IonItem>
          <IonItem>
            <IonToggle justify="space-between">粗体文字</IonToggle>
          </IonItem>
        </IonList>

        <IonListHeader>亮度</IonListHeader>
        <IonList inset={true}>
          <IonItem>
            <IonRange value={40}>
              <IonIcon icon={sunnyOutline} slot="start"></IonIcon>
              <IonIcon icon={sunny} slot="end"></IonIcon>
            </IonRange>
          </IonItem>
          <IonItem>
            <IonToggle justify="space-between" checked>
              原彩显示
            </IonToggle>
          </IonItem>
        </IonList>

        <IonList inset={true}>
          <IonItem button={true}>
            <IonLabel>夜览</IonLabel>
            <IonText slot="end" color="medium">
              晚9:00至早8:00
            </IonText>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
}
export default Example;
```