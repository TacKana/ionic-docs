```tsx
import React, { useRef, useState } from 'react';
import { IonIcon, IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, ReorderEndCustomEvent } from '@ionic/react';
import { caretDown, ellipse, warning } from 'ionicons/icons';

interface TodoItem {
  label: string;
  icon: string;
  color: string;
}

function Example() {
  const [items, setItems] = useState<TodoItem[]>([
    { label: 'Buy groceries', icon: warning, color: 'warning' },
    { label: 'Call the bank', icon: warning, color: 'warning' },
    { label: 'Finish project report', icon: ellipse, color: 'light' },
    { label: 'Book flight tickets', icon: ellipse, color: 'light' },
    { label: 'Read a book', icon: caretDown, color: 'secondary' },
  ]);
  const iconsRef = useRef<(HTMLIonIconElement | null)[]>([]);

  function handleReorderStart() {
    console.log('开始重新排序');

    // 开始重新排序时隐藏图标
    iconsRef.current.forEach((icon) => {
      if (icon) icon.style.opacity = '0';
    });
  }

  function handleReorderEnd(event: ReorderEndCustomEvent) {
    console.log('从索引', event.detail.from, '拖拽到', event.detail.to);

    // 重新显示图标
    iconsRef.current.forEach((icon) => {
      if (icon) icon.style.opacity = '1';
    });

    // 完成重新排序并更新项目数据
    setItems(event.detail.complete(items));
  }

  return (
    <IonList>
      {/* 默认禁用重新排序手势，启用后可以拖拽项目 */}
      <IonReorderGroup disabled={false} onIonReorderStart={handleReorderStart} onIonReorderEnd={handleReorderEnd}>
        {items.map((item: TodoItem, i: number) => (
          <IonItem key={item.label}>
            <IonLabel>{item.label}</IonLabel>
            <IonIcon
              icon={item.icon}
              color={item.color}
              slot="end"
              ref={(el) => {
                iconsRef.current[i] = el;
              }}
            />
            <IonReorder slot="end" />
          </IonItem>
        ))}
      </IonReorderGroup>
    </IonList>
  );
}

export default Example;
```