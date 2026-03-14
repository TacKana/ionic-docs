```html
<ion-button onclick="picker.isOpen = true">打开</ion-button>
<ion-picker></ion-picker>

<script>
  var picker = document.querySelector('ion-picker');

  picker.columns = [
    {
      name: 'languages',
      options: [
        {
          text: 'JavaScript',
          value: 'javascript',
        },
        {
          text: 'TypeScript',
          value: 'typescript',
        },
        {
          text: 'Rust',
          value: 'rust',
        },
        {
          text: 'C#',
          value: 'c#',
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
        console.log(`您选择了：${value.languages.value}`);
      },
    },
  ];

  picker.addEventListener('ionPickerDidDismiss', (event) => {
    picker.isOpen = false;
  });
</script>
```