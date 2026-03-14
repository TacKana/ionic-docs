```html
<template>
  <ion-item-group>
    <ion-item-divider>
      <ion-label> 水果类 </ion-label>
    </ion-item-divider>

    <ion-item-sliding>
      <ion-item>
        <ion-label> 葡萄 </ion-label>
      </ion-item>
      <ion-item-options>
        <ion-item-option> 收藏 </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item>
        <ion-label> 苹果 </ion-label>
      </ion-item>
      <ion-item-options>
        <ion-item-option> 收藏 </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item lines="none">
        <ion-label> 香蕉 </ion-label>
      </ion-item>
      <ion-item-options>
        <ion-item-option> 收藏 </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-item-group>

  <ion-item-group>
    <ion-item-divider>
      <ion-label> 蔬菜类 </ion-label>
    </ion-item-divider>

    <ion-item-sliding>
      <ion-item>
        <ion-label> 胡萝卜 </ion-label>
      </ion-item>
      <ion-item-options>
        <ion-item-option> 收藏 </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item>
        <ion-label> 西兰花 </ion-label>
      </ion-item>
      <ion-item-options>
        <ion-item-option> 收藏 </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item lines="none">
        <ion-label> 芹菜 </ion-label>
      </ion-item>
      <ion-item-options>
        <ion-item-option> 收藏 </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-item-group>
</template>

<script setup lang="ts">
  import {
    IonItem,
    IonItemDivider,
    IonItemGroup,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
  } from '@ionic/vue';
</script>
```