```html
<template>
  <ion-button @click="openPicker()">打开</ion-button>
</template>

<script>
  import { IonButton, pickerController } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton },
    data() {
      return {
        message: '',
      };
    },
    methods: {
      async openPicker() {
        const picker = await pickerController.create({
          columns: [
            {
              name: 'meat',
              options: [
                {
                  text: '意大利辣香肠',
                  value: 'pepperoni',
                },
                {
                  text: '烟熏火腿',
                  value: 'smoked-ham',
                },
                {
                  text: '酥脆培根',
                  value: 'bacon',
                },
              ],
            },
            {
              name: 'veggies',
              options: [
                {
                  text: '红洋葱',
                  value: 'red-onion',
                },
                {
                  text: '彩椒',
                  value: 'peppers',
                },
                {
                  text: '黑橄榄',
                  value: 'black-olives',
                },
              ],
            },
            {
              name: 'crust',
              options: [
                {
                  text: '平底锅烤',
                  value: 'pan',
                },
                {
                  text: '手抛饼底',
                  value: 'hand-tossed',
                },
                {
                  text: '芝心饼边',
                  value: 'stuffed-crust',
                },
              ],
            },
          ],
          buttons: [
            {
              text: '取消',
              role: 'cancel',
            },
            {
              text: '确认',
              handler: (value) => {
                window.alert(
                  `您选择了${value.crust.text}披萨，配料为${value.meat.text}和${value.veggies.text}`
                );
              },
            },
          ],
        });
        await picker.present();
      },
    },
  });
</script>
```