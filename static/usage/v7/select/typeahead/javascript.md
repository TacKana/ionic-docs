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
   * 这是已确认的
   * 选定水果列表。它
   * 仅在模态框中的"完成"
   * 按钮被按下时更新。
   */
  var selectedFruits = [];

  /**
   * 这是选定水果的
   * 工作列表。它跟踪用户
   * 在模态框中做出的任何
   * 未提交的更改。如果用户按下
   * "取消"按钮，则此列表
   * 将重置为已确认的
   * 选定水果的值。
   */
  var workingSelectedFruits = [];

  /**
   * 根据搜索查询
   * 过滤水果列表。如果未提供查询，
   * 则返回整个列表。
   */
  function filterList(searchQuery = undefined) {
    if (searchQuery === undefined) return fruits;

    const normalizedQuery = searchQuery.toLowerCase();

    return fruits.filter((fruit) => fruit.text.toLowerCase().includes(normalizedQuery));
  }

  /**
   * 根据搜索查询，
   * 在模态框内渲染
   * 过滤后的水果列表。
   */
  function renderList(searchQuery = undefined) {
    const data = filterList(searchQuery);
    let template = '';

    data.forEach((item, index) => {
      const checked = workingSelectedFruits.includes(item.value);
      template += `
        <ion-item>
          <ion-checkbox value="${item.value}" checked="${checked}">${item.text}</ion-checkbox>
        </ion-item>
      `;
    });

    list.innerHTML = template;
  }

  /**
   * 以更易读的方式
   * 格式化选定的水果。
   * 如果只选择了 1 个水果，
   * 则显示水果名称。
   * 否则将显示
   * 选定的水果数量。
   */
  function formatData(data) {
    if (data.length === 1) {
      const fruit = fruits.find((fruit) => fruit.value === data[0]);
      return fruit.text;
    }

    return `${data.length} 项`;
  }

  /**
   * 重置所有工作更改
   * 并关闭模态框。
   */
  function cancelChanges() {
    workingSelectedFruits = [...selectedFruits];
    modal.dismiss(undefined, 'cancel');
  }

  /**
   * 将选定的水果
   * 返回给父页面。
   */
  function confirmChanges() {
    selectedFruits = [...workingSelectedFruits];
    modal.dismiss(selectedFruits);
  }

  // 监听复选框的所有 ionChange 事件
  modal.addEventListener('ionChange', (event) => {
    if (event.target.tagName !== 'ION-CHECKBOX') {
      return;
    }

    const { checked, value } = event.detail;

    if (checked) {
      workingSelectedFruits = [...workingSelectedFruits, value];
    } else {
      workingSelectedFruits = workingSelectedFruits.filter((fruit) => fruit !== value);
    }
  });

  /**
   * 当用户在搜索栏中输入时，
   * 我们需要用过滤后的列表
   * 更新视图。
   */
  searchbar.addEventListener('ionInput', (event) => {
    renderList(event.target.value);
  });

  /**
   * 当模态框即将关闭时，
   * 用选定的水果
   * 更新父页面。
   */
  modal.addEventListener('ionModalWillDismiss', (event) => {
    const { data } = event.detail;

    if (data === undefined) return;

    const selectedText = formatData(data);

    selectedFruitsText.innerText = selectedText;
  });

  /**
   * 当模态框完全关闭后，我们需要
   * 重置列表的过滤状态。
   */
  modal.addEventListener('ionModalDidDismiss', (event) => {
    searchbar.value = undefined;
    renderList();
  });

  renderList();
</script>
```