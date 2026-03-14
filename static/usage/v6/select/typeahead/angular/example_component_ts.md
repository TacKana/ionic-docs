```ts
import { Component, ViewChild } from '@angular/core';
import { IonicModule, IonModal } from '@ionic/angular';
import { TypeaheadComponent } from './typeahead.component';
import { Item } from './types';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonicModule, TypeaheadComponent],
  standalone: true,
})
export class ExampleComponent {
  @ViewChild('modal', { static: true }) modal!: IonModal;

  selectedFruitsText = '0 项';
  selectedFruits: string[] = [];

  fruits: Item[] = [
    { text: '苹果', value: 'apple' },
    { text: '杏子', value: 'apricot' },
    { text: '香蕉', value: 'banana' },
    { text: '黑莓', value: 'blackberry' },
    { text: '蓝莓', value: 'blueberry' },
    { text: '樱桃', value: 'cherry' },
    { text: '蔓越莓', value: 'cranberry' },
    { text: '葡萄', value: 'grape' },
    { text: '葡萄柚', value: 'grapefruit' },
    { text: '番石榴', value: 'guava' },
    { text: '菠萝蜜', value: 'jackfruit' },
    { text: '青柠', value: 'lime' },
    { text: '芒果', value: 'mango' },
    { text: '油桃', value: 'nectarine' },
    { text: '橙子', value: 'orange' },
    { text: '木瓜', value: 'papaya' },
    { text: '百香果', value: 'passionfruit' },
    { text: '桃子', value: 'peach' },
    { text: '梨子', value: 'pear' },
    { text: '大蕉', value: 'plantain' },
    { text: '李子', value: 'plum' },
    { text: '菠萝', value: 'pineapple' },
    { text: '石榴', value: 'pomegranate' },
    { text: '树莓', value: 'raspberry' },
    { text: '草莓', value: 'strawberry' },
  ];

  private formatData(data: string[]) {
    if (data.length === 1) {
      const fruit = this.fruits.find((fruit) => fruit.value === data[0]);
      return fruit.text;
    }

    return `${data.length} 项`;
  }

  fruitSelectionChanged(fruits: string[]) {
    this.selectedFruits = fruits;
    this.selectedFruitsText = this.formatData(this.selectedFruits);
    this.modal.dismiss();
  }
}
```