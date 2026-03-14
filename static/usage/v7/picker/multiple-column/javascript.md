```html
<ion-button id="open-picker">打开</ion-button>
<ion-picker trigger="open-picker"></ion-picker>

<script>
  var picker = document.querySelector('ion-picker');

  picker.columns = [
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
          text: '平底锅式',
          value: 'pan',
        },
        {
          text: '手抛式',
          value: 'hand-tossed',
        },
        {
          text: '芝心卷边',
          value: 'stuffed-crust',
        },
      ],
    },
  ];

  picker.buttons = [
    {
      text: '取消',
      role: 'cancel',
    },
    {
      text: '确认',
      handler: (value) => {
        console.log(`您选择了 ${value.crust.text} 披萨，配料为 ${value.meat.text} 和 ${value.veggies.text}`);
      },
    },
  ];
</script>
```