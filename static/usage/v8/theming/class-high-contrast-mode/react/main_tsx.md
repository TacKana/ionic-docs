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
  const [darkPaletteToggle, setDarkPaletteToggle] = useState(false);
  const [highContrastPaletteToggle, setHighContrastPaletteToggle] = useState(false);

  // 监听开关的勾选/取消状态以切换调色板
  const darkPaletteToggleChange = (event: ToggleCustomEvent) => {
    toggleDarkPalette(event.detail.checked);
  };

  const highContrastPaletteToggleChange = (event: ToggleCustomEvent) => {
    toggleHighContrastPalette(event.detail.checked);
  };

  // 在 html 元素上添加或移除 "ion-palette-dark" 类
  const toggleDarkPalette = (shouldAdd: boolean) => {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  };

  // 在 html 元素上添加或移除 "ion-palette-high-contrast" 类
  const toggleHighContrastPalette = (shouldAdd: boolean) => {
    document.documentElement.classList.toggle('ion-palette-high-contrast', shouldAdd);
  };

  // 设置开关状态并更新调色板
  const initializeDarkPalette = (isDark: boolean) => {
    setDarkPaletteToggle(isDark);
    toggleDarkPalette(isDark);
  };

  const initializeHighContrastPalette = (isHighContrast: boolean) => {
    setHighContrastPaletteToggle(isHighContrast);
    toggleHighContrastPalette(isHighContrast);
  };

  useEffect(() => {
    // 使用 matchMedia 检查用户偏好
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersHighContrast = window.matchMedia('(prefers-contrast: more)');

    // 根据媒体查询的初始值初始化深色调色板
    initializeDarkPalette(prefersDark.matches);
    initializeHighContrastPalette(prefersHighContrast.matches);

    const setDarkPaletteFromMediaQuery = (mediaQuery: MediaQueryListEvent) => {
      initializeDarkPalette(mediaQuery.matches);
    };

    const setHighContrastPaletteFromMediaQuery = (mediaQuery: MediaQueryListEvent) => {
      initializeHighContrastPalette(mediaQuery.matches);
    };

    // 监听媒体查询的变更
    prefersDark.addEventListener('change', setDarkPaletteFromMediaQuery);
    prefersHighContrast.addEventListener('change', setHighContrastPaletteFromMediaQuery);

    return () => {
      prefersDark.removeEventListener('change', setDarkPaletteFromMediaQuery);
      prefersHighContrast.removeEventListener('change', setHighContrastPaletteFromMediaQuery);
    };
  }, []);

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton default-href="#"></IonBackButton>
          </IonButtons>
          <IonTitle>显示</IonTitle>
          <IonButtons slot="end">
            <IonButton color="dark">
              <IonIcon slot="icon-only" ios={personCircleOutline} md={personCircle}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent color="light">
        <IonListHeader>外观</IonListHeader>
        <IonList inset={true}>
          <IonItem>
            <IonToggle checked={darkPaletteToggle} onIonChange={darkPaletteToggleChange} justify="space-between">
              深色模式
            </IonToggle>
          </IonItem>
          <IonItem>
            <IonToggle
              checked={highContrastPaletteToggle}
              onIonChange={highContrastPaletteToggleChange}
              justify="space-between"
            >
              高对比度模式
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
              晚上 9:00 至早上 8:00
            </IonText>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
}
export default Example;
```