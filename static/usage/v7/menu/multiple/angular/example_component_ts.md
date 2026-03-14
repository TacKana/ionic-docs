```ts
import { Component } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar,
  MenuController,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButton, IonContent, IonHeader, IonMenu, IonTitle, IonToolbar],
})
export class ExampleComponent {
  constructor(private menuCtrl: MenuController) {}

  openFirstMenu() {
    /**
     * 通过菜单 ID 打开菜单
     * 我们使用 ID 来引用菜单，
     * 因为存在多个 "start" 菜单。
     */
    this.menuCtrl.open('first-menu');
  }

  openSecondMenu() {
    /**
     * 通过菜单 ID 打开菜单
     * 我们使用 ID 来引用菜单，
     * 因为存在多个 "start" 菜单。
     */
    this.menuCtrl.open('second-menu');
  }

  openEndMenu() {
    /**
     * 通过侧边位置打开菜单
     * 这里我们可以通过侧边位置来引用菜单，
     * 因为只有一个 "end" 菜单存在。
     */
    this.menuCtrl.open('end');
  }
}
```