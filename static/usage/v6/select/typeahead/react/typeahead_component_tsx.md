```tsx
import React, { useState } from 'react';
import {
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonSearchbar,
  IonToolbar,
} from '@ionic/react';
import type { CheckboxCustomEvent } from '@ionic/react';
import type { Item } from './types';

interface TypeaheadProps {
  items: Item[];
  selectedItems: string[];
  title?: string;
  onSelectionCancel?: () => void;
  onSelectionChange?: (items: string[]) => void;
}

function AppTypeahead(props: TypeaheadProps) {
  const [filteredItems, setFilteredItems] = useState<Item[]>([...props.items]);
  const [workingSelectedValues, setWorkingSelectedValues] = useState<string[]>([...props.selectedItems]);

  const isChecked = (value: string) => {
    return workingSelectedValues.find((item) => item === value) !== undefined;
  };

  const cancelChanges = () => {
    const { onSelectionCancel } = props;
    if (onSelectionCancel !== undefined) {
      onSelectionCancel();
    }
  };

  const confirmChanges = () => {
    const { onSelectionChange } = props;
    if (onSelectionChange !== undefined) {
      onSelectionChange(workingSelectedValues);
    }
  };

  const searchbarInput = (ev: any) => {
    filterList(ev.target.value);
  };

  /**
   * 根据提供的搜索查询更新渲染的视图。
   * 如果未提供查询，将渲染所有数据。
   */
  const filterList = (searchQuery: string | null | undefined) => {
    /**
     * 如果未定义搜索查询，
     * 则返回所有选项。
     */
    if (searchQuery === undefined || searchQuery === null) {
      setFilteredItems([...props.items]);
    } else {
      /**
       * 否则，将搜索查询标准化，
       * 并检查哪些项目包含该搜索查询作为子字符串。
       */
      const normalizedQuery = searchQuery.toLowerCase();
      setFilteredItems(
        props.items.filter((item) => {
          return item.text.toLowerCase().includes(normalizedQuery);
        })
      );
    }
  };

  const checkboxChange = (ev: CheckboxCustomEvent) => {
    const { checked, value } = ev.detail;

    if (checked) {
      setWorkingSelectedValues([...workingSelectedValues, value]);
    } else {
      setWorkingSelectedValues(workingSelectedValues.filter((item) => item !== value));
    }
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={cancelChanges}>取消</IonButton>
          </IonButtons>
          <IonTitle>{props.title}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={confirmChanges}>完成</IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar onIonInput={searchbarInput}></IonSearchbar>
        </IonToolbar>
      </IonHeader>

      <IonContent color="light" class="ion-padding">
        <IonList id="modal-list" inset={true}>
          {filteredItems.map((item) => (
            <IonItem key={item.value}>
              <IonLabel>{item.text}</IonLabel>
              <IonCheckbox
                value={item.value}
                checked={isChecked(item.value)}
                onIonChange={checkboxChange}
              ></IonCheckbox>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </>
  );
}
export default AppTypeahead;
```