```html
<template>
  <ion-list>
    <!-- 默认情况下重新排序手势是禁用的，启用它即可拖放项目 -->
    <ion-reorder-group :disabled="false" @ionItemReorder="handleReorder($event)">
      <ion-reorder>
        <ion-item>
          <ion-label> Item 1 </ion-label>
        </ion-item>
      </ion-reorder>

      <ion-reorder>
        <ion-item>
          <ion-label> Item 2 </ion-label>
        </ion-item>
      </ion-reorder>

      <ion-reorder>
        <ion-item>
          <ion-label> Item 3 </ion-label>
        </ion-item>
      </ion-reorder>

      <ion-reorder>
        <ion-item>
          <ion-label> Item 4 </ion-label>
        </ion-item>
      </ion-reorder>

      <ion-reorder>
        <ion-item>
          <ion-label> Item 5 </ion-label>
        </ion-item>
      </ion-reorder>
    </ion-reorder-group>
  </ion-list>
</template>

<script lang="ts">
  import { IonItem, IonLabel, IonList, IonReorder, IonReorderGroup } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonList, IonReorder, IonReorderGroup },
    setup() {
      const handleReorder = (event: CustomEvent) => {
        // `from`和`to`属性分别包含拖拽开始和结束时项目的索引
        console.log('从索引', event.detail.from, '拖拽到', event.detail.to);

        // 完成重新排序，并根据手势结束位置在DOM中定位项目
        // 此方法也可以由重新排序组直接调用
        event.detail.complete();
      };

      return { handleReorder };
    },
  });
</script>
```