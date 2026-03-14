```ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonicModule],
  standalone: true,
})
export class ExampleComponent {
  customAlertOptions = {
    header: '披萨配料',
    subHeader: '选择您最喜爱的配料',
    message: '仅限选择一种',
    translucent: true,
  };

  customPopoverOptions = {
    header: '发色',
    subHeader: '选择您的发色',
    message: '仅选择您的主要发色',
  };

  customActionSheetOptions = {
    header: '颜色',
    subHeader: '选择您最喜爱的颜色',
  };
}
```