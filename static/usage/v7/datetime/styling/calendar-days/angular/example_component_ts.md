```ts
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IonDatetime } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

// 本示例关闭了视图封装，因为目前不支持为多个CSS Shadow部件应用样式
// 参见 https://github.com/angular/angular/issues/22515
@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  encapsulation: ViewEncapsulation.None,
  imports: [IonDatetime, FormsModule],
})
export class ExampleComponent implements OnInit {
  public datetime!: string;

  ngOnInit() {
    const date = new Date();

    // 将datetime的值设置为当前日期的前两天
    let dayChange = -2;

    // 如果设置后的日期在上个月，则将日期改为两天后，使其保持在同一个月内
    if (date.getDate() + dayChange <= 0) {
      dayChange = -dayChange;
    }

    // 将datetime的值设置为上述计算出的日期
    date.setDate(date.getDate() + dayChange);
    this.datetime = date.toISOString();
  }
}
```