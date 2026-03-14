```ts
import { Component, ViewChild } from '@angular/core';
import { IonContent, IonItem, IonLabel, IonList, IonModal } from '@ionic/angular/standalone';
import { Item } from './types';

import { TypeaheadComponent } from './typeahead.component';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonContent, IonItem, IonLabel, IonList, IonModal, TypeaheadComponent],
})
export class ExampleComponent {
  @ViewChild('modal', { static: true }) modal!: IonModal;

  selectedFruitsText = '0 个选项';
  selectedFruits: string[] = [];

  fruits: Item[] = [
    { text: '苹果', value: 'apple' },
    { text: '杏', value: 'apricot' },
    { text: '香蕉', value: 'banana' },
    { text: '黑莓', value: 'blackberry' },
    { text: '蓝莓', value: 'blueberry' },
    { text: '樱桃', value: 'cherry' },
    { text: '蔓越莓', value: 'cranberry' },
    { text: '葡萄', value: 'grape' },
    { text: '西柚', value: 'grapefruit' },
    { text: '番石榴', value: 'guava' },
    { text: '菠萝蜜', value: 'jackfruit' },
    { text: '青柠', value: 'lime' },
    { text: '芒果', value: 'mango' },
    { text: '油桃', value: 'nectarine' },
    { text: '橙子', value: 'orange' },
    { text: '木瓜', value: 'papaya' },
    { text: '百香果', value: 'passionfruit' },
    { text: '桃子', value: 'peach' },
    { text: '梨', value: 'pear' },
    { text: '大蕉', value: 'plantain' },
    { text: '李子', value: 'plum' },
    { text: '菠萝', value: 'pineapple' },
    { text: '石榴', value: 'pomegranate' },
    { text: '覆盆子', value: 'raspberry' },
    { text: '草莓', value: 'strawberry' },
  ];

  /**
   * 根据选中的水果格式化显示文本。
   * @param data - 选中的水果值数组
   * @returns 格式化后的显示字符串
   */
  private formatData(data: string[]): string {
    if (data.length === 1) {
      const fruit = this.fruits.find((fruit) => fruit.value === data[0]);
      return fruit ? fruit.text : '';
    }
    return `${data.length} 个选项`;
  }

  /**
   * 处理水果选择变化并更新选中的水果和文本。
   * @param fruits - 选中的水果值数组
   */
  fruitSelectionChanged(fruits: string[]) {
    this.selectedFruits = fruits;
    this.selectedFruitsText = this.formatData(this.selectedFruits);
    this.modal.dismiss();
  }
}
```