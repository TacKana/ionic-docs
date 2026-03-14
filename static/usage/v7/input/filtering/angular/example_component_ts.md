```ts
import { Component, ViewChild } from '@angular/core';
import { IonInput, IonItem, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonInput, IonItem, IonList],
})
export class ExampleComponent {
  inputModel = '';

  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;

  onInput(event: CustomEvent) {
    const value = (event.target as HTMLIonInputElement).value ?? '';

    // 移除非字母数字字符
    const filteredValue = (value as string).replace(/[^a-zA-Z0-9]+/g, '');

    /**
     * 同时更新状态变量和组件
     * 以保持两者同步。
     */
    this.ionInputEl.value = this.inputModel = filteredValue;
  }
}
```