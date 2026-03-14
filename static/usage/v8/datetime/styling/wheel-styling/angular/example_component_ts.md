```ts
import { Component, ViewEncapsulation } from '@angular/core';
import { IonDatetime } from '@ionic/angular/standalone';

// 由于缺乏对多个 CSS 影子部分（shadow parts）样式的支持，本示例关闭了视图封装
// 详见 https://github.com/angular/angular/issues/22515
@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  encapsulation: ViewEncapsulation.None,
  imports: [IonDatetime],
})
export class ExampleComponent {}
```