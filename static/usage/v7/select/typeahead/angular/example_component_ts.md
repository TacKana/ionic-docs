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

  selectedFruitsText = '0 个项目';
  selectedFruits: string[] = [];

  fruits: Item[] = [
    { text: 'Apple', value: 'apple' },
    { text: 'Apricot', value: 'apricot' },
    { text: 'Banana', value: 'banana' },
    { text: 'Blackberry', value: 'blackberry' },
    { text: 'Blueberry', value: 'blueberry' },
    { text: 'Cherry', value: 'cherry' },
    { text: 'Cranberry', value: 'cranberry' },
    { text: 'Grape', value: 'grape' },
    { text: 'Grapefruit', value: 'grapefruit' },
    { text: 'Guava', value: 'guava' },
    { text: 'Jackfruit', value: 'jackfruit' },
    { text: 'Lime', value: 'lime' },
    { text: 'Mango', value: 'mango' },
    { text: 'Nectarine', value: 'nectarine' },
    { text: 'Orange', value: 'orange' },
    { text: 'Papaya', value: 'papaya' },
    { text: 'Passionfruit', value: 'passionfruit' },
    { text: 'Peach', value: 'peach' },
    { text: 'Pear', value: 'pear' },
    { text: 'Plantain', value: 'plantain' },
    { text: 'Plum', value: 'plum' },
    { text: 'Pineapple', value: 'pineapple' },
    { text: 'Pomegranate', value: 'pomegranate' },
    { text: 'Raspberry', value: 'raspberry' },
    { text: 'Strawberry', value: 'strawberry' },
  ];

  /**
   * 根据所选水果格式化显示文本。
   * @param data - 所选水果值的数组
   * @returns 用于显示的格式化字符串
   */
  private formatData(data: string[]): string {
    if (data.length === 1) {
      const fruit = this.fruits.find((fruit) => fruit.value === data[0]);
      return fruit ? fruit.text : '';
    }
    return `${data.length} 个项目`;
  }

  /**
   * 处理水果选择变更并更新所选水果和文本。
   * @param fruits - 所选水果值的数组
   */
  fruitSelectionChanged(fruits: string[]) {
    this.selectedFruits = fruits;
    this.selectedFruitsText = this.formatData(this.selectedFruits);
    this.modal.dismiss();
  }
}
```