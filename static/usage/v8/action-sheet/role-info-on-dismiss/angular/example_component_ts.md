```ts
import { Component } from '@angular/core';
import { IonActionSheet, IonButton } from '@ionic/angular/standalone';
import type { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['./example.component.css'],
  imports: [IonActionSheet, IonButton],
})
export class ExampleComponent {
  public actionSheetButtons = [
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
  ];

  constructor() {}

  logResult(event: CustomEvent<OverlayEventDetail>) {
    console.log(JSON.stringify(event.detail, null, 2));
  }
}
```