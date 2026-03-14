```html
<template>
  <ion-textarea
    placeholder="输入文本，离开文本区域，再返回，然后输入以清除内容"
    :clear-on-edit="true"
  ></ion-textarea>
</template>

<script>
  import { IonTextarea } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonTextarea },
  });
</script>
```