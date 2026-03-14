```ts
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Item } from './types';

@Component({
  selector: 'app-typeahead',
  templateUrl: 'typeahead.component.html',
  imports: [CommonModule, IonicModule],
  standalone: true,
})
export class TypeaheadComponent implements OnInit {
  @Input() items: Item[] = [];
  @Input() selectedItems: string[] = [];
  @Input() title = '选择项目';

  @Output() selectionCancel = new EventEmitter<void>();
  @Output() selectionChange = new EventEmitter<string[]>();

  filteredItems: Item[] = [];
  workingSelectedValues: string[] = [];

  ngOnInit() {
    this.filteredItems = [...this.items];
    this.workingSelectedValues = [...this.selectedItems];
  }

  trackItems(index: number, item: Item) {
    return item.value;
  }

  cancelChanges() {
    this.selectionCancel.emit();
  }

  confirmChanges() {
    this.selectionChange.emit(this.workingSelectedValues);
  }

  searchbarInput(ev) {
    this.filterList(ev.target.value);
  }

  /**
   * 根据提供的搜索查询更新渲染的视图。
   * 如果未提供查询，则渲染所有数据。
   */
  filterList(searchQuery: string | undefined) {
    /**
     * 如果未定义搜索查询，
     * 返回所有选项。
     */
    if (searchQuery === undefined) {
      this.filteredItems = [...this.items];
    } else {
      /**
       * 否则，规范化搜索查询，
       * 并检查哪些项目包含该搜索查询作为子字符串。
       */
      const normalizedQuery = searchQuery.toLowerCase();
      this.filteredItems = this.items.filter((item) => {
        return item.text.toLowerCase().includes(normalizedQuery);
      });
    }
  }

  isChecked(value: string) {
    return this.workingSelectedValues.find((item) => item === value);
  }

  checkboxChange(ev) {
    const { checked, value } = ev.detail;

    if (checked) {
      this.workingSelectedValues = [...this.workingSelectedValues, value];
    } else {
      this.workingSelectedValues = this.workingSelectedValues.filter((item) => item !== value);
    }
  }
}
```