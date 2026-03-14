```ts
import { Component } from '@angular/core';

import { IonicModule, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['./example.component.css'],
  imports: [IonicModule],
  standalone: true,
})
export class ExampleComponent {
  constructor(private actionSheetCtrl: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: '示例标题',
      subHeader: '示例副标题',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: '删除',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: '分享',
          data: {
            action: 'share',
          },
        },
        {
          text: '取消',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    actionSheet.present();
  }
}
```