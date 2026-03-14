```ts
import { Component } from '@angular/core';
import { IonItem, IonLabel, IonList, IonSearchbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonItem, IonLabel, IonList, IonSearchbar],
})
export class ExampleComponent {
  // 初始城市数据列表
  public data = [
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
    'Madrid',
    'New York',
    'Panama City',
  ];
  // 用于显示过滤结果的数组，初始包含所有数据
  public results = [...this.data];

  // 处理搜索输入事件
  handleInput(event: Event) {
    const target = event.target as HTMLIonSearchbarElement;
    const query = target.value?.toLowerCase() || '';
    // 根据查询词过滤数据
    this.results = this.data.filter((d) => d.toLowerCase().includes(query));
  }
}
```