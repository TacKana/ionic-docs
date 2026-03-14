---
sidebar_label: 'ion-datetime'
demoUrl: '/docs/demos/api/datetime/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/datetime/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/datetime/props.md';
import Events from '@ionic-internal/component-api/v5/datetime/events.md';
import Methods from '@ionic-internal/component-api/v5/datetime/methods.md';
import Parts from '@ionic-internal/component-api/v5/datetime/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/datetime/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/datetime/slots.md';

# ion-datetime

日期时间组件从页面底部呈现一个选择器界面，方便用户选择日期和时间。该选择器显示可滚动的列，可用于单独选择年、月、日、小时和分钟值。日期时间组件类似于原生的 `datetime-local` 类型的 `input` 元素，但是，Ionic 的 Datetime 组件使得以首选格式显示日期和时间以及管理日期时间值变得容易。

## 显示和选择器格式

日期时间组件在两个位置显示值：在 `<ion-datetime>` 组件内部，以及从屏幕底部呈现的选择器界面中。下表列出了所有可以使用的格式。

| 格式 | 描述                    | 示例                      |
|------|------------------------|---------------------------|
| `YYYY` | 年，4 位数字             | `2018`                    |
| `YY`   | 年，2 位数字             | `18`                      |
| `M`    | 月                       | `1` ... `12`              |
| `MM`   | 月，带前导零             | `01` ... `12`             |
| `MMM`  | 月，简称                 | `一月`                    |
| `MMMM` | 月，全称                 | `一月`                    |
| `D`    | 日                       | `1` ... `31`              |
| `DD`   | 日，带前导零             | `01` ... `31`             |
| `DDD`  | 星期，简称               | `周五`                    |
| `DDDD` | 星期，全称               | `星期五`                  |
| `H`    | 小时，24 小时制          | `0` ... `23`              |
| `HH`   | 小时，24 小时制，带前导零 | `00` ... `23`             |
| `h`    | 小时，12 小时制          | `1` ... `12`              |
| `hh`   | 小时，12 小时制，带前导零 | `01` ... `12`             |
| `a`    | 12 小时制时间段，小写    | `am` `pm`                 |
| `A`    | 12 小时制时间段，大写    | `AM` `PM`                 |
| `m`    | 分钟                     | `1` ... `59`              |
| `mm`   | 分钟，带前导零           | `01` ... `59`             |
| `s`    | 秒                       | `1` ... `59`              |
| `ss`   | 秒，带前导零             | `01` ... `59`             |
| `Z`    | UTC 时区偏移             | `Z 或 +HH:mm 或 -HH:mm`   |

**重要提示**：关于如何使用不同的月份和星期名称，请参阅下面的[月份名称和星期名称](#月份名称和星期名称)部分。

### 显示格式

`displayFormat` 属性指定了 datetime 组件的值在组件内应该如何以格式化的文本形式打印。

下表提供了一些示例。上面提到的格式可以以任意组合传递给显示格式。

| 显示格式               | 示例                   |
|------------------------|------------------------|
| `M-YYYY`               | `6-2005`               |
| `MM/YY`                | `06/05`                |
| `MMM YYYY`             | `六月 2005`            |
| `YYYY, MMMM`           | `2005, 六月`           |
| `MMM DD, YYYY HH:mm`   | `六月 17, 2005 11:06`  |

**重要提示**：默认情况下，`ion-datetime` 将相对于用户的时区显示值。给定一个 `09:00:00+01:00` 的值，对于处于 `-04:00` 时区偏移的用户，datetime 组件会将其显示为 `04:00:00-04:00`。要更改显示以使用不同的时区，请使用下面描述的 displayTimezone 属性。

### 显示时区

`displayTimezone` 属性允许您更改默认的相对于用户本地时区显示值的行为。除了 "UTC" 之外，有效的时区值由浏览器确定，并且在大多数情况下遵循 [IANA 时区数据库](https://www.iana.org/time-zones) 的时区名称，例如 "Asia/Shanghai"、"Asia/Kolkata"、"America/New_York"。在以下示例中：

```html
<ion-datetime value="2019-10-01T15:43:40.394Z" display-timezone="utc"></ion-datetime>
```

显示的值将不会被转换，并会按照提供的样子显示（UTC）。

### 选择器格式

`pickerFormat` 属性决定选择器界面中应显示哪些列、列的顺序以及每列中使用的格式。如果未提供 `pickerFormat`，则它将使用 `displayFormat` 的值。有关一些格式示例，请参阅[显示格式](#显示格式)部分中的图表。

### 日期时间数据

从历史上看，在 JavaScript 甚至 HTML 输入中处理日期时间值一直是一个挑战。具体来说，JavaScript 的 `Date` 对象以难以正确解析日期时间字符串或格式化日期时间值而闻名。更糟糕的是，不同的浏览器和 JavaScript 版本如何解析各种日期时间字符串也存在差异，尤其是在不同区域设置下。

幸运的是，Ionic 的日期时间输入被设计为允许开发者避免常见的陷阱，使开发者能够轻松地在输入中格式化日期时间值，并为用户提供一个简单的日期时间选择器，以获得出色的用户体验。

##### ISO 8601 日期时间格式：YYYY-MM-DDTHH:mmZ

Ionic 使用 [ISO 8601 日期时间格式](https://www.w3.org/TR/NOTE-datetime) 作为其值。该值只是一个字符串，而不是使用 JavaScript 的 `Date` 对象。使用 ISO 日期时间格式可以轻松地在 JSON 对象和数据库中序列化和解析。

ISO 格式可以用作简单的年份，或仅小时和分钟，或者更详细到毫秒和时区。下面任何 ISO 格式都可以使用，并且在用户选择新值后，Ionic 将继续使用最初给定的日期时间值所使用的相同 ISO 格式。

| 描述                 | 格式                     | 日期时间值示例                 |
|----------------------|--------------------------|--------------------------------|
| 年                   | YYYY                     | 1994                           |
| 年和月               | YYYY-MM                  | 1994-12                        |
| 完整日期             | YYYY-MM-DD               | 1994-12-15                     |
| 日期和时间           | YYYY-MM-DDTHH:mm         | 1994-12-15T13:47               |
| UTC 时区             | YYYY-MM-DDTHH:mm:ssTZD   | 1994-12-15T13:47:20.789Z       |
| 时区偏移             | YYYY-MM-DDTHH:mm:ssTZD   | 1994-12-15T13:47:20.789+05:00  |
| 小时和分钟           | HH:mm                    | 13:47                          |
| 小时、分钟、秒       | HH:mm:ss                 | 13:47:20                       |

请注意，年份始终是四位数字，毫秒（如果添加）始终是三位数字，所有其他项始终是两位数字。因此，表示一月的数字始终带有前导零，例如 `01`。此外，小时始终采用 24 小时制，因此 `00` 表示 12 小时制的 `12am`，`13` 表示 `1pm`，`23` 表示 `11pm`。

另请注意，`displayFormat` 和 `pickerFormat` 都不能设置日期时间值的输出，该值是由组件的 `ngModel` 设置的值。这些格式仅用于将值显示为文本和显示选择器界面，但日期时间的值始终保存为有效的 ISO 8601 日期时间字符串。

## 最小和最大日期时间

日期在任一方向上都是无限的，因此对于用户的选择，至少应该有某种形式限制可以选择的日期。默认情况下，最大日期是当前年份的年底，最小日期是从 100 年前的年初开始。

要自定义最小和最大日期时间值，可以提供 `min` 和 `max` 组件属性，这比默认的最近 100 年更适合应用程序的用例。遵循上表中列出的相同 ISO 8601 格式，每个组件可以限制用户可以选择哪些日期。通过将 `2016` 传递给 `min` 属性，将 `2020-10-31` 传递给 `max` 属性，datetime 将限制日期选择在 2016 年初到 2020 年 10 月 31 日之间。

## 月份名称和星期名称

目前，没有一个通用的标准可以根据语言或区域设置自动选择月份名称或星期名称的正确语言/拼写。

好消息是，有一个 [Intl.DatetimeFormat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) 标准，[大多数浏览器](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#浏览器兼容性) 已经采用。

然而，目前该标准尚未被所有流行浏览器完全实现，因此 Ionic 还无法利用它。

此外，Angular 也提供了一个国际化服务，但它仍在大量开发中，因此 Ionic 目前不依赖它。

如果应用程序需要使用默认英文版本以外的月份和日期名称，当前的最佳实践是提供一个名称数组。月份名称和日期名称可以在应用程序级别配置，也可以在单个 `ion-datetime` 级别配置。

### 高级日期时间验证和操作

日期时间选择器提供了选择精确格式的简便性，并使用标准化的 [ISO 8601 日期时间格式](https://www.w3.org/TR/NOTE-datetime) 将日期时间值保存为字符串。然而，重要的是要注意 `ion-datetime` 并不试图解决验证和操作日期时间值时的所有情况。如果需要从特定格式解析日期时间值，或对其进行操作（例如，给日期增加 5 天、减去 30 分钟等），甚至将数据格式化为特定区域设置，那么我们强烈建议使用 [date-fns](https://date-fns.org) 在 JavaScript 中处理日期。

## 用法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-item>
  <ion-label>MMMM</ion-label>
  <ion-datetime displayFormat="MMMM" value="2012-12-15T13:47:20.789"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>MM DD YY</ion-label>
  <ion-datetime displayFormat="MM DD YY" placeholder="选择日期"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>已禁用</ion-label>
  <ion-datetime id="dynamicDisabled" displayFormat="MM DD YY" disabled value="1994-12-15"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>YYYY</ion-label>
  <ion-datetime
    [pickerOptions]="customPickerOptions"
    placeholder="自定义选项"
    displayFormat="YYYY"
    min="1981"
    max="2002"
  ></ion-datetime>
</ion-item>

<ion-item>
  <ion-label position="stacked">MMMM YY</ion-label>
  <ion-datetime
    displayFormat="MMMM YY"
    min="1989-06-04"
    max="2004-08-23"
    value="1994-12-15T13:47:20.789"
  ></ion-datetime>
</ion-item>

<ion-item>
  <ion-label position="floating">MM/DD/YYYY</ion-label>
  <ion-datetime
    displayFormat="MM/DD/YYYY"
    min="1994-03-14"
    max="2012-12-09"
    value="2002-09-23T15:03:46.789"
  ></ion-datetime>
</ion-item>

<ion-item>
  <ion-label position="floating">MM/DD/YYYY</ion-label>
  <ion-datetime displayFormat="MM/DD/YYYY" min="1994-03-14" max="2012-12-09"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>DDD. MMM DD, YY (自定义语言环境)</ion-label>
  <ion-datetime
    value="1995-04-15"
    min="1990-02"
    max="2000"
    [dayShortNames]="customDayShortNames"
    displayFormat="DDD. MMM DD, YY"
    monthShortNames="1月, 2月, 3月, 4月, 5月, 6月, 7月, 8月, 9月, 10月, 11月, 12月"
  ></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>D MMM YYYY H:mm</ion-label>
  <ion-datetime displayFormat="D MMM YYYY H:mm" min="1997" max="2010" value="2005-06-17T11:06Z"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>DDDD MMM D, YYYY</ion-label>
  <ion-datetime displayFormat="DDDD MMM D, YYYY" min="2005" max="2016" value="2008-09-02"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>HH:mm</ion-label>
  <ion-datetime displayFormat="HH:mm"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>h:mm a</ion-label>
  <ion-datetime displayFormat="h:mm a"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>hh:mm A (15 分钟步进)</ion-label>
  <ion-datetime displayFormat="h:mm A" minuteValues="0,15,30,45"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>闰年，夏季月份</ion-label>
  <ion-datetime
    displayFormat="MM/YYYY"
    pickerFormat="MMMM YYYY"
    monthValues="6,7,8"
    [yearValues]="customYearValues"
  ></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>特定的日/月/年</ion-label>
  <ion-datetime
    monthValues="6,7,8"
    yearValues="2014,2015"
    dayValues="01,02,03,04,05,06,08,09,10,11,12,13,14"
    displayFormat="DD/MMM/YYYY"
  ></ion-datetime>
</ion-item>
```

```tsx
@Component({...})
export class MyComponent {
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  customPickerOptions: any;

  constructor() {
    this.customPickerOptions = {
      buttons: [{
        text: '保存',
        handler: () => console.log('点击了保存！')
      }, {
        text: '记录',
        handler: () => {
          console.log('点击了记录。不关闭。');
          return false;
        }
      }]
    }
  }

}
```

</TabItem>

<TabItem value="javascript">

```html
<ion-item>
  <ion-label>MMMM</ion-label>
  <ion-datetime display-format="MMMM" value="2012-12-15T13:47:20.789"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>MM DD YY</ion-label>
  <ion-datetime display-format="MM DD YY" placeholder="选择日期"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>已禁用</ion-label>
  <ion-datetime id="dynamicDisabled" display-format="MM DD YY" disabled value="1994-12-15"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>YYYY</ion-label>
  <ion-datetime
    id="customPickerOptions"
    placeholder="自定义选项"
    display-format="YYYY"
    min="1981"
    max="2002"
  ></ion-datetime>
</ion-item>

<ion-item>
  <ion-label position="stacked">MMMM YY</ion-label>
  <ion-datetime
    display-format="MMMM YY"
    min="1989-06-04"
    max="2004-08-23"
    value="1994-12-15T13:47:20.789"
  ></ion-datetime>
</ion-item>

<ion-item>
  <ion-label position="floating">MM/DD/YYYY</ion-label>
  <ion-datetime
    display-format="MM/DD/YYYY"
    min="1994-03-14"
    max="2012-12-09"
    value="2002-09-23T15:03:46.789"
  ></ion-datetime>
</ion-item>

<ion-item>
  <ion-label position="floating">MM/DD/YYYY</ion-label>
  <ion-datetime display-format="MM/DD/YYYY" min="1994-03-14" max="2012-12-09"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>DDD. MMM DD, YY (自定义语言环境)</ion-label>
  <ion-datetime
    id="customDayShortNames"
    value="1995-04-15"
    min="1990-02"
    max="2000"
    display-format="DDD. MMM DD, YY"
    month-short-names="1月, 2月, 3月, 4月, 5月, 6月, 7月, 8月, 9月, 10月, 11月, 12月"
  ></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>D MMM YYYY H:mm</ion-label>
  <ion-datetime display-format="D MMM YYYY H:mm" min="1997" max="2010" value="2005-06-17T11:06Z"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>DDDD MMM D, YYYY</ion-label>
  <ion-datetime display-format="DDDD MMM D, YYYY" min="2005" max="2016" value="2008-09-02"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>HH:mm</ion-label>
  <ion-datetime display-format="HH:mm"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>h:mm a</ion-label>
  <ion-datetime display-format="h:mm a"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>hh:mm A (15 分钟步进)</ion-label>
  <ion-datetime display-format="h:mm A" minute-values="0,15,30,45"></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>闰年，夏季月份</ion-label>
  <ion-datetime
    id="customYearValues"
    display-format="MM/YYYY"
    picker-format="MMMM YYYY"
    month-values="6,7,8"
  ></ion-datetime>
</ion-item>

<ion-item>
  <ion-label>特定的日/月/年</ion-label>
  <ion-datetime
    month-values="6,7,8"
    year-values="2014,2015"
    day-values="01,02,03,04,05,06,08,09,10,11,12,13,14"
    display-format="DD/MMM/YYYY"
  ></ion-datetime>
</ion-item>
```

```javascript
var yearValuesArray = [2020, 2016, 2008, 2004, 2000, 1996];
var customYearValues = document.getElementById('customYearValues');
customYearValues.yearValues = yearValuesArray;

var dayShortNamesArray = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
var customDayShortNames = document.getElementById('customDayShortNames');
customDayShortNames.dayShortNames = dayShortNamesArray;

var customPickerButtons = {
  buttons: [
    {
      text: '保存',
      handler: () => console.log('点击了保存！'),
    },
    {
      text: '记录',
      handler: () => {
        console.log('点击了记录。不关闭。');
        return false;
      },
    },
  ],
};
var customPickerOptions = document.getElementById('customPickerOptions');
customPickerOptions.pickerOptions = customPickerButtons;
```

</TabItem>

<TabItem value="react">

```tsx
import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonDatetime,
  IonFooter,
} from '@ionic/react';

const customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];

const customDayShortNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

export const DateTimeExamples: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('2012-12-15T13:47:20.789');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IonDatetime 示例</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel>MMMM</IonLabel>
          <IonDatetime
            displayFormat="MMMM"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>MM DD YY</IonLabel>
          <IonDatetime
            displayFormat="MM DD YY"
            placeholder="选择日期"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>已禁用</IonLabel>
          <IonDatetime
            id="dynamicDisabled"
            displayFormat="MM DD YY"
            disabled
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>YYYY</IonLabel>
          <IonDatetime
            pickerOptions={{
              buttons: [
                {
                  text: '保存',
                  handler: () => console.log('点击了保存！'),
                },
                {
                  text: '记录',
                  handler: () => {
                    console.log('点击了记录。不关闭。');
                    return false;
                  },
                },
              ],
            }}
            placeholder="自定义选项"
            displayFormat="YYYY"
            min="1981"
            max="2002"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">MMMM YY</IonLabel>
          <IonDatetime
            displayFormat="MMMM YY"
            min="1989-06-04"
            max="2004-08-23"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">MM/DD/YYYY</IonLabel>
          <IonDatetime
            displayFormat="MM/DD/YYYY"
            min="1994-03-14"
            max="2012-12-09"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">MM/DD/YYYY</IonLabel>
          <IonDatetime
            displayFormat="MM/DD/YYYY"
            min="1994-03-14"
            max="2012-12-09"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>DDD. MMM DD, YY (自定义语言环境)</IonLabel>
          <IonDatetime
            min="1990-02"
            max="2000"
            dayShortNames={customDayShortNames}
            displayFormat="DDD. MMM DD, YY"
            monthShortNames="1月, 2月, 3月, 4月, 5月, 6月, 7月, 8月, 9月, 10月, 11月, 12月"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>D MMM YYYY H:mm</IonLabel>
          <IonDatetime
            displayFormat="D MMM YYYY H:mm"
            min="1997"
            max="2010"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>DDDD MMM D, YYYY</IonLabel>
          <IonDatetime
            displayFormat="DDDD MMM D, YYYY"
            min="2005"
            max="2016"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>HH:mm</IonLabel>
          <IonDatetime
            displayFormat="HH:mm"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>h:mm a</IonLabel>
          <IonDatetime
            displayFormat="h:mm a"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>hh:mm A (15 分钟步进)</IonLabel>
          <IonDatetime
            displayFormat="h:mm A"
            minuteValues="0,15,30,45"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>闰年，夏季月份</IonLabel>
          <IonDatetime
            displayFormat="MM/YYYY"
            pickerFormat="MMMM YYYY"
            monthValues="6,7,8"
            yearValues={customYearValues}
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>特定的日/月/年</IonLabel>
          <IonDatetime
            monthValues="6,7,8"
            yearValues="2014,2015"
            dayValues="01,02,03,04,05,06,08,09,10,11,12,13,14"
            displayFormat="DD/MMM/YYYY"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>
      </IonContent>
      <IonFooter>
        <IonToolbar>所选日期: {selectedDate ?? '(无)'}</IonToolbar>
      </IonFooter>
    </IonPage>
  );
};
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'datetime-example',
  styleUrl: 'datetime-example.css',
})
export class DatetimeExample {
  private customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  private customDayShortNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  private customPickerOptions = {
    buttons: [
      {
        text: '保存',
        handler: () => console.log('点击了保存！'),
      },
      {
        text: '记录',
        handler: () => {
          console.log('点击了记录。不关闭。');
          return false;
        },
      },
    ],
  };

  render() {
    return [
      <ion-item>
        <ion-label>MMMM</ion-label>
        <ion-datetime displayFormat="MMMM" value="2012-12-15T13:47:20.789"></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label>MM DD YY</ion-label>
        <ion-datetime displayFormat="MM DD YY" placeholder="选择日期"></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label>已禁用</ion-label>
        <ion-datetime id="dynamicDisabled" displayFormat="MM DD YY" disabled value="1994-12-15"></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label>YYYY</ion-label>
        <ion-datetime
          pickerOptions={this.customPickerOptions}
          placeholder="自定义选项"
          displayFormat="YYYY"
          min="1981"
          max="2002"
        ></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label position="stacked">MMMM YY</ion-label>
        <ion-datetime
          displayFormat="MMMM YY"
          min="1989-06-04"
          max="2004-08-23"
          value="1994-12-15T13:47:20.789"
        ></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label position="floating">MM/DD/YYYY</ion-label>
        <ion-datetime
          displayFormat="MM/DD/YYYY"
          min="1994-03-14"
          max="2012-12-09"
          value="2002-09-23T15:03:46.789"
        ></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label position="floating">MM/DD/YYYY</ion-label>
        <ion-datetime displayFormat="MM/DD/YYYY" min="1994-03-14" max="2012-12-09"></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label>DDD. MMM DD, YY (自定义语言环境)</ion-label>
        <ion-datetime
          value="1995-04-15"
          min="1990-02"
          max="2000"
          dayShortNames={this.customDayShortNames}
          displayFormat="DDD. MMM DD, YY"
          monthShortNames="1月, 2月, 3月, 4月, 5月, 6月, 7月, 8月, 9月, 10月, 11月, 12月"
        ></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label>D MMM YYYY H:mm</ion-label>
        <ion-datetime displayFormat="D MMM YYYY H:mm" min="1997" max="2010" value="2005-06-17T11:06Z"></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label>DDDD MMM D, YYYY</ion-label>
        <ion-datetime displayFormat="DDDD MMM D, YYYY" min="2005" max="2016" value="2008-09-02"></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label>HH:mm</ion-label>
        <ion-datetime displayFormat="HH:mm"></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label>h:mm a</ion-label>
        <ion-datetime displayFormat="h:mm a"></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label>hh:mm A (15 分钟步进)</ion-label>
        <ion-datetime displayFormat="h:mm A" minuteValues="0,15,30,45"></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label>闰年，夏季月份</ion-label>
        <ion-datetime
          displayFormat="MM/YYYY"
          pickerFormat="MMMM YYYY"
          monthValues="6,7,8"
          yearValues={this.customYearValues}
        ></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label>特定的日/月/年</ion-label>
        <ion-datetime
          monthValues="6,7,8"
          yearValues="2014,2015"
          dayValues="01,02,03,04,05,06,08,09,10,11,12,13,14"
          displayFormat="DD/MMM/YYYY"
        ></ion-datetime>
      </ion-item>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-item>
    <ion-label>MMMM</ion-label>
    <ion-datetime display-format="MMMM" value="2012-12-15T13:47:20.789"></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label>MM DD YY</ion-label>
    <ion-datetime display-format="MM DD YY" placeholder="选择日期"></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label>已禁用</ion-label>
    <ion-datetime id="dynamicDisabled" display-format="MM DD YY" disabled value="1994-12-15"></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label>YYYY</ion-label>
    <ion-datetime
      :picker-options="customPickerOptions"
      placeholder="自定义选项"
      display-format="YYYY"
      min="1981"
      max="2002"
    ></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label position="stacked">MMMM YY</ion-label>
    <ion-datetime
      display-format="MMMM YY"
      min="1989-06-04"
      max="2004-08-23"
      value="1994-12-15T13:47:20.789"
    ></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label position="floating">MM/DD/YYYY</ion-label>
    <ion-datetime
      display-format="MM/DD/YYYY"
      min="1994-03-14"
      max="2012-12-09"
      value="2002-09-23T15:03:46.789"
    ></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label position="floating">MM/DD/YYYY</ion-label>
    <ion-datetime display-format="MM/DD/YYYY" min="1994-03-14" max="2012-12-09"></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label>DDD. MMM DD, YY (自定义语言环境)</ion-label>
    <ion-datetime
      value="1995-04-15"
      min="1990-02"
      max="2000"
      :day-short-names="customDayShortNames"
      display-format="DDD. MMM DD, YY"
      month-short-names="1月, 2月, 3月, 4月, 5月, 6月, 7月, 8月, 9月, 10月, 11月, 12月"
    ></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label>D MMM YYYY H:mm</ion-label>
    <ion-datetime display-format="D MMM YYYY H:mm" min="1997" max="2010" value="2005-06-17T11:06Z"></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label>DDDD MMM D, YYYY</ion-label>
    <ion-datetime display-format="DDDD MMM D, YYYY" min="2005" max="2016" value="2008-09-02"></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label>HH:mm</ion-label>
    <ion-datetime display-format="HH:mm"></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label>h:mm a</ion-label>
    <ion-datetime display-format="h:mm a"></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label>hh:mm A (15 分钟步进)</ion-label>
    <ion-datetime display-format="h:mm A" minute-values="0,15,30,45"></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label>闰年，夏季月份</ion-label>
    <ion-datetime
      display-format="MM/YYYY"
      picker-format="MMMM YYYY"
      month-values="6,7,8"
      :year-values="customYearValues"
    ></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label>特定的日/月/年</ion-label>
    <ion-datetime
      month-values="6,7,8"
      year-values="2014,2015"
      day-values="01,02,03,04,05,06,08,09,10,11,12,13,14"
      display-format="DD/MMM/YYYY"
    ></ion-datetime>
  </ion-item>
</template>

<script>
  import { IonDatetime, IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonDatetime, IonItem, IonLabel },
    setup() {
      const customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
      const customDayShortNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
      const customPickerOptions = {
        buttons: [
          {
            text: '保存',
            handler: () => console.log('点击了保存！'),
          },
          {
            text: '记录',
            handler: () => {
              console.log('点击了记录。不关闭。');
              return false;
            },
          },
        ],
      };

      return {
        customYearValues,
        customDayShortNames,
        customPickerOptions,
      };
    },
  });
</script>
```

</TabItem>

</Tabs>

## 属性

<Props />

## 事件

<Events />

## 方法

<Methods />

## CSS 阴影部分

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />