```ts
import { Component, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import type { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonicModule],
  standalone: true,
})
export class ExampleComponent {
  inputModel = '';

  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;

  onInput(ev) {
    const value = ev.target!.value;

    // 移除非字母数字字符
    const filteredValue = value.replace(/[^a-zA-Z0-9]+/g, '');

    /**
     * 同时更新状态变量和组件，
     * 以确保它们保持同步。
     */
    this.ionInputEl.value = this.inputModel = filteredValue;
  }
}
```