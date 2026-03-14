```ts
import { Component } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar],
})
export class ExampleComponent {
  isModalOpen = false; // 控制模态框是否打开

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen; // 设置模态框状态
  }
}
```