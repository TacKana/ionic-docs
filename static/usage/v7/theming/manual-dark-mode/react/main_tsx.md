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
  const [themeToggle, setThemeToggle] = useState(false);

  // 监听开关的状态变化来切换深色主题
  const toggleChange = (event: ToggleCustomEvent) => {
    toggleDarkTheme(event.detail.checked);
  };

  // 在文档 body 上添加或移除 "dark" 类
  const toggleDarkTheme = (shouldAdd: boolean) => {
    document.body.classList.toggle('dark', shouldAdd);
  };

  // 根据 isDark 的值设置开关状态并更新主题
  const initializeDarkTheme = (isDark: boolean) => {
    setThemeToggle(isDark);
    toggleDarkTheme(isDark);
  };

  useEffect(() => {
    // 使用 matchMedia 检查用户偏好
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // 根据 prefers-color-scheme 媒体查询的初始值来初始化深色主题
    initializeDarkTheme(prefersDark.matches);

    const setDarkThemeFromMediaQuery = (mediaQuery: MediaQueryListEvent) => {
      initializeDarkTheme(mediaQuery.matches);
    };

    // 监听 prefers-color-scheme 媒体查询的变化
    prefersDark.addEventListener('change', setDarkThemeFromMediaQuery);

    return () => {
      prefersDark.removeEventListener('change', setDarkThemeFromMediaQuery);
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
            <IonToggle checked={themeToggle} onIonChange={toggleChange} justify="space-between">
              深色模式
            </IonToggle>
          </IonItem>
        </IonList>

        <IonList inset={true}>
          <IonItem button={true}>文字大小</IonItem>
          <IonItem>
            <IonToggle justify="space-between">粗体文本</IonToggle>
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