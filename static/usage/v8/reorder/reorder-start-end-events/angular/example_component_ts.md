```ts
import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import {
  ReorderEndCustomEvent,
  IonItem,
  IonLabel,
  IonList,
  IonReorder,
  IonReorderGroup,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { caretDown, ellipse, warning } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, IonIcon],
})
export class ExampleComponent {
  items = [
    { label: '买杂货', icon: 'warning', color: 'warning' },
    { label: '给银行打电话', icon: 'warning', color: 'warning' },
    { label: '完成项目报告', icon: 'ellipse', color: 'light' },
    { label: '预订机票', icon: 'ellipse', color: 'light' },
    { label: '阅读一本书', icon: 'caret-down', color: 'secondary' },
  ];

  @ViewChildren('icon', { read: ElementRef }) icons!: QueryList<ElementRef<HTMLIonIconElement>>;

  constructor() {
    /**
     * 应用中想要使用的任何图标
     * 都可以在 app.component.ts 中注册，
     * 然后在应用中的任何地方通过名称引用。
     */
    addIcons({ caretDown, ellipse, warning });
  }

  handleReorderStart() {
    console.log('开始重新排序');

    // 当重新排序开始时隐藏图标
    this.icons.forEach((icon) => {
      icon.nativeElement.style.opacity = '0';
    });
  }

  handleReorderEnd(event: ReorderEndCustomEvent) {
    console.log('从索引', event.detail.from, '拖拽到', event.detail.to);

    // 再次显示图标
    this.icons.forEach((icon) => {
      icon.nativeElement.style.opacity = '1';
    });

    // 完成重新排序并更新 items 数据
    this.items = event.detail.complete(this.items);
  }
}
```