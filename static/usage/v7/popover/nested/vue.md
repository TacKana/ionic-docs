```html
<template>
  <ion-button id="popover-button">打开菜单</ion-button>
  <ion-popover trigger="popover-button" :dismiss-on-select="true">
    <ion-content>
      <ion-list>
        <ion-item :button="true" :detail="false">选项 1</ion-item>
        <ion-item :button="true" :detail="false">选项 2</ion-item>
        <ion-item :button="true" id="nested-trigger">更多选项...</ion-item>

        <ion-popover trigger="nested-trigger" :dismiss-on-select="true" side="end">
          <ion-content>
            <ion-list>
              <ion-item :button="true" :detail="false">嵌套选项</ion-item>
            </ion-list>
          </ion-content>
        </ion-popover>
      </ion-list>
    </ion-content>
  </ion-popover>
</template>

<script setup lang="ts">
  import { IonButton, IonItem, IonList, IonPopover } from '@ionic/vue';
</script>
```