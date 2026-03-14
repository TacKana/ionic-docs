```ts
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonDatetime } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonDatetime],
  // 此架构用于绕过 Ionic Framework v7 中的一个问题
  // 即 formatOptions 未导出。升级到 Ionic
  // Framework 8.1.1 或更高版本可移除此变通方案。
  schemas: [NO_ERRORS_SCHEMA],
})
export class ExampleComponent {}
```