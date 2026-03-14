```tsx
import React, { useState } from 'react';
import { IonItem, IonList, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';

interface Food {
  id: number;
  name: string;
  type: string;
}

const foods: Food[] = [
  {
    id: 1,
    name: 'Apples',
    type: 'fruit',
  },
  {
    id: 2,
    name: 'Carrots',
    type: 'vegetable',
  },
  {
    id: 3,
    name: 'Cupcakes',
    type: 'dessert',
  },
];

const compareWith = (o1: Food, o2: Food) => {
  return o1 && o2 ? o1.id === o2.id : o1 === o2;
};

function Example() {
  const [currentFood, setCurrentFood] = useState('');

  return (
    <IonList>
      <IonItem>
        <IonSelect
          placeholder="选择食物"
          compareWith={compareWith}
          onIonChange={(ev) => setCurrentFood(JSON.stringify(ev.detail.value))}
        >
          {foods.map((food) => (
            <IonSelectOption key={food.id} value={food}>
              {food.name}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>
      <IonItem lines="none">
        <IonLabel>当前选择: {currentFood}</IonLabel>
      </IonItem>
    </IonList>
  );
}
export default Example;
```