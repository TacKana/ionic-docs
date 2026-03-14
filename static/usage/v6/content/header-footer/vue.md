```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title> 页眉 </ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <h1>标题 1</h1>
    <h2>标题 2</h2>
    <h3>标题 3</h3>
    <h4>标题 4</h4>
    <h5>标题 5</h5>
    <h6>标题 6</h6>

    <p>这里是一小段关于内容的描述。不多不少，仅此而已。</p>
  </ion-content>
  <ion-footer>
    <ion-toolbar>
      <ion-title> 页脚 </ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<script lang="ts">
  import { IonContent, IonFooter, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonContent, IonFooter, IonHeader, IonTitle, IonToolbar },
  });
</script>
```