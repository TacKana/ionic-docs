```html
<ion-button onclick="openPicker()">打开</ion-button>

<script>
  async function openPicker() {
    const picker = await pickerController.create({
      columns: [
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
      ],
      buttons: [
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
      ],
    });
    await picker.present();
  }
</script>
```