```ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { personCircle, personCircleOutline, sunny, sunnyOutline } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [
    FormsModule,
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
  ],
})
export class ExampleComponent implements OnInit {
  darkPaletteToggle = false;
  highContrastPaletteToggle = false;

  constructor() {
    /**
     * 应用中所有需要使用的图标
     * 都可以在 app.component.ts 中注册，
     * 然后在应用的任何位置通过名称引用。
     */
    addIcons({ personCircle, personCircleOutline, sunny, sunnyOutline });
  }

  ngOnInit() {
    // 使用 matchMedia 检查用户偏好
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersHighContrast = window.matchMedia('(prefers-contrast: more)');

    // 根据媒体查询的初始值初始化深色和高对比度调色板
    this.initializeDarkPalette(prefersDark.matches);
    this.initializeHighContrastPalette(prefersHighContrast.matches);

    // 监听媒体查询的变化
    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkPalette(mediaQuery.matches));
    prefersHighContrast.addEventListener('change', (mediaQuery) =>
      this.initializeHighContrastPalette(mediaQuery.matches)
    );
  }

  // 根据 isDark 值切换开关状态并更新调色板
  initializeDarkPalette(isDark: boolean) {
    this.darkPaletteToggle = isDark;
    this.toggleDarkPalette(isDark);
  }

  // 根据 isHighContrast 值切换开关状态并更新调色板
  initializeHighContrastPalette(isHighContrast: boolean) {
    this.highContrastPaletteToggle = isHighContrast;
    this.toggleHighContrastPalette(isHighContrast);
  }

  // 监听开关的勾选/取消勾选以切换深色调色板
  darkPaletteToggleChange(event: CustomEvent) {
    this.toggleDarkPalette(event.detail.checked);
  }

  // 监听开关的勾选/取消勾选以切换高对比度调色板
  highContrastPaletteToggleChange(event: CustomEvent) {
    this.toggleHighContrastPalette(event.detail.checked);
  }

  // 在 html 元素上添加或移除 "ion-palette-dark" 类
  toggleDarkPalette(shouldAdd: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }

  // 在 html 元素上添加或移除 "ion-palette-high-contrast" 类
  toggleHighContrastPalette(shouldAdd: boolean) {
    document.documentElement.classList.toggle('ion-palette-high-contrast', shouldAdd);
  }
}
```