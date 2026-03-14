```html
<ion-button id="open-picker">打开</ion-button>
<ion-picker-legacy trigger="open-picker"></ion-picker-legacy>

<script>
  var picker = document.querySelector('ion-picker-legacy');

  picker.columns = [
    {
      name: 'meat',
      options: [
        {
          text: '意大利辣香肠',
          value: 'pepperoni',
        },
        {
          text: '熏火腿',
          value: 'smoked-ham',
        },
        {
          text: '香脆培根',
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
          text: '意式厚底',
          value: 'pan',
        },
        {
          text: '手抛薄底',
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
        console.log(`您选择了${value.crust.text}披萨，配料为${value.meat.text}和${value.veggies.text}`);
      },
    },
  ];
</script>
```