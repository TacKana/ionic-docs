```ts
import { Component } from '@angular/core';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonItem, IonList, IonSelect, IonSelectOption],
})
export class ExampleComponent {
  customAlertOptions = {
    header: '披萨配料',
    subHeader: '选择你最喜欢的配料',
    message: '只能选择一种',
    translucent: true,
  };

  customPopoverOptions = {
    header: '发色',
    subHeader: '选择你的发色',
    message: '仅选择你的主要发色',
  };

  customActionSheetOptions = {
    header: '颜色',
    subHeader: '选择你最喜欢的颜色',
  };

  customModalOptions = {
    header: '最爱的糖果',
    breakpoints: [0, 0.5],
    initialBreakpoint: 0.5,
  };
}
```