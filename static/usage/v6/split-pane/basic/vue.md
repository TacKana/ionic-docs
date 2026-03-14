```html
<template>
  <ion-split-pane when="xs" content-id="main">
    <ion-menu content-id="main">
      <ion-header>
        <ion-toolbar color="tertiary">
          <ion-title>菜单</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding"> 菜单内容 </ion-content>
    </ion-menu>

    <div class="ion-page" id="main">
      <ion-header>
        <ion-toolbar>
          <ion-title>主视图</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding"> 主视图内容 </ion-content>
    </div>
  </ion-split-pane>
</template>

<script lang="ts">
  import { IonContent, IonHeader, IonMenu, IonSplitPane, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonContent, IonHeader, IonMenu, IonSplitPane, IonTitle, IonToolbar },
  });
</script>
```