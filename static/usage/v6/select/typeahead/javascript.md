```html
<ion-content color="light">
  <div class="container">
    <ion-list inset="true">
      <ion-item button="true" detail="false" id="select-fruits">
        <ion-label>喜爱的水果</ion-label>
        <div slot="end" id="selected-fruits">0 项</div>
      </ion-item>
    </ion-list>
  </div>
</ion-content>

<ion-modal trigger="select-fruits">
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button onclick="cancelChanges()">取消</ion-button>
      </ion-buttons>
      <ion-title>喜爱的水果</ion-title>
      <ion-buttons slot="end">
        <ion-button onclick="confirmChanges()">完成</ion-button>
      </ion-buttons>
    </ion-toolbar>
    <ion-toolbar>
      <ion-searchbar></ion-searchbar>
    </ion-toolbar>
  </ion-header>
  <ion-content color="light" class="ion-padding">
    <ion-list id="modal-list" inset="true"> </ion-list>
  </ion-content>
</ion-modal>

<script>
  const list = document.querySelector('ion-list#modal-list');
  const modal = document.querySelector('ion-modal');
  const searchbar = document.querySelector('ion-searchbar');
  const selectedFruitsText = document.querySelector('#selected-fruits');
  const fruits = [
    { text: 'Apple', value: 'apple' },
    { text: 'Apricot', value: 'apricot' },
    { text: 'Banana', value: 'banana' },
    { text: 'Blackberry', value: 'blackberry' },
    { text: 'Blueberry', value: 'blueberry' },
    { text: 'Cherry', value: 'cherry' },
    { text: 'Cranberry', value: 'cranberry' },
    { text: 'Grape', value: 'grape' },
    { text: 'Grapefruit', value: 'grapefruit' },
    { text: 'Guava', value: 'guava' },
    { text: 'Jackfruit', value: 'jackfruit' },
    { text: 'Lime', value: 'lime' },
    { text: 'Mango', value: 'mango' },
    { text: 'Nectarine', value: 'nectarine' },
    { text: 'Orange', value: 'orange' },
    { text: 'Papaya', value: 'papaya' },
    { text: 'Passionfruit', value: 'passionfruit' },
    { text: 'Peach', value: 'peach' },
    { text: 'Pear', value: 'pear' },
    { text: 'Plantain', value: 'plantain' },
    { text: 'Plum', value: 'plum' },
    { text: 'Pineapple', value: 'pineapple' },
    { text: 'Pomegranate', value: 'pomegranate' },
    { text: 'Raspberry', value: 'raspberry' },
    { text: 'Strawberry', value: 'strawberry' },
  ];

  /**
   * 这是已确认选中的水果列表。
   * 只有在模态框中点击"完成"按钮后才会更新。
   */
  var selectedFruits = [];

  /**
   * 这是正在操作的选择水果列表。
   * 它跟踪用户在模态框中进行的任何未提交的更改。
   * 如果用户点击"取消"按钮，则会重置为已确认选中水果的值。
   */
  var workingSelectedFruits = [];

  /**
   * 根据搜索查询筛选水果列表。
   * 如果未提供查询，则返回完整列表。
   */
  function filterList(searchQuery = undefined) {
    if (searchQuery === undefined) return fruits;

    const normalizedQuery = searchQuery.toLowerCase();

    return fruits.filter((fruit) => fruit.text.toLowerCase().includes(normalizedQuery));
  }

  /**
   * 根据搜索查询在模态框内渲染筛选后的水果列表。
   */
  function renderList(searchQuery = undefined) {
    const data = filterList(searchQuery);
    let template = '';

    data.forEach((item, index) => {
      const checked = workingSelectedFruits.includes(item.value);
      template += `
        <ion-item>
          <ion-label>${item.text}</ion-label>
          <ion-checkbox slot="end" value="${item.value}" checked="${checked}"></ion-checkbox>
        </ion-item>
      `;
    });

    list.innerHTML = template;
  }

  /**
   * 以更易于阅读的方式格式化选中的水果。
   * 如果只选中了1种水果，则显示水果名称。
   * 否则显示选中的水果数量。
   */
  function formatData(data) {
    if (data.length === 1) {
      const fruit = fruits.find((fruit) => fruit.value === data[0]);
      return fruit.text;
    }

    return `${data.length} 项`;
  }

  /**
   * 重置所有正在进行的更改并关闭模态框。
   */
  function cancelChanges() {
    workingSelectedFruits = [...selectedFruits];
    modal.dismiss(undefined, 'cancel');
  }

  /**
   * 将选中的水果返回给父页面。
   */
  function confirmChanges() {
    selectedFruits = [...workingSelectedFruits];
    modal.dismiss(selectedFruits);
  }

  // 监听来自复选框的所有 ionChange 事件
  modal.addEventListener('ionChange', (ev) => {
    if (ev.target.tagName !== 'ION-CHECKBOX') {
      return;
    }

    const { checked, value } = ev.detail;

    if (checked) {
      workingSelectedFruits = [...workingSelectedFruits, value];
    } else {
      workingSelectedFruits = workingSelectedFruits.filter((fruit) => fruit !== value);
    }
  });

  /**
   * 当用户在搜索栏中输入时，
   * 我们需要用筛选后的列表更新视图。
   */
  searchbar.addEventListener('ionInput', (ev) => {
    renderList(ev.target.value);
  });

  /**
   * 当模态框即将关闭时，
   * 用选中的水果更新父页面。
   */
  modal.addEventListener('ionModalWillDismiss', (ev) => {
    const { data } = ev.detail;

    if (data === undefined) return;

    const selectedText = formatData(data);

    selectedFruitsText.innerText = selectedText;
  });

  /**
   * 当模态框完全关闭后，我们需要重置列表的筛选状态。
   */
  modal.addEventListener('ionModalDidDismiss', (ev) => {
    searchbar.value = undefined;
    renderList();
  });

  renderList();
</script>
```