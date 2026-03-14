```ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ActionSheetController,
  IonButton,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { ChildComponent } from './child.component';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [ChildComponent, FormsModule, IonButton, IonContent, IonHeader, IonModal, IonTitle, IonToolbar],
})
export class ExampleComponent {
  presentingElement!: HTMLElement | null;

  private canDismissOverride = false;

  constructor(private actionSheetCtrl: ActionSheetController) {}

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  onDismissChange(canDismiss: boolean) {
    // 根据复选框的状态决定是否允许关闭模态框
    this.canDismissOverride = canDismiss;
  }

  onWillPresent() {
    // 当模态框显示时重置覆盖标志
    this.canDismissOverride = false;
  }

  canDismiss = async () => {
    if (this.canDismissOverride) {
      // 检查覆盖标志，如果可以直接关闭叠加层则提前返回
      return true;
    }

    const actionSheet = await this.actionSheetCtrl.create({
      header: '确定要关闭吗？',
      buttons: [
        {
          text: '是',
          role: 'confirm',
        },
        {
          text: '否',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };
}
```