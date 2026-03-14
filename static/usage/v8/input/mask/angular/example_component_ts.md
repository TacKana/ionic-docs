```ts
import { Component } from '@angular/core';
import { IonInput, IonItem, IonList } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

import { MaskitoOptions, MaskitoElementPredicate, maskitoTransform } from '@maskito/core';
import { MaskitoDirective } from '@maskito/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [FormsModule, IonInput, IonItem, IonList, MaskitoDirective],
})
export class ExampleComponent {
  readonly phoneMask: MaskitoOptions = {
    mask: ['+', '1', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  };

  // 如果需要设置初始值，可使用 maskitoTransform 确保值格式正确
  myPhoneNumber = maskitoTransform('5555551212', this.phoneMask);

  readonly cardMask: MaskitoOptions = {
    mask: [
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(3).fill(/\d/),
    ],
  };

  readonly maskPredicate: MaskitoElementPredicate = async (el) => (el as HTMLIonInputElement).getInputElement();
}
```