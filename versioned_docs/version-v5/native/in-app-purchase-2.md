---
sidebar_label: '应用内购买 2'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 应用内购买 2

支持 iOS、Android、Windows、macOS 和 Xbox 的应用内购买功能。

## 功能特性

|                      | iOS | Android | win-8 | win-10/uwp | mac |
| -------------------- | --- | ------- | ----- | ---------- | --- |
| 消耗型商品           | ✅  | ✅      | ✅    | ✅         | ✅  |
| 非消耗型商品         | ✅  | ✅      | ✅    | ✅         | ✅  |
| 订阅                 | ✅  | ✅      | ✅    | ✅         | ✅  |
| 恢复购买             | ✅  | ✅      | ✅    | ✅         | ✅  |
| 收据验证             | ✅  | ✅      |       | ✅         | ✅  |
| 可下载内容           | ✅  |         |       |            | ✅  |
| 推广价格             | ✅  | ✅      |       | ✅         | ✅  |

支持平台：

- **iOS** 7.0 或更高版本
- **Android** 2.2 (API 级别 8) 或更高版本
  - 需要 Google Play 客户端版本 3.9.16 或更高
- **Windows** 应用商店/Phone 8.1 或更高版本
- **Windows 10 Mobile**
- **macOS** 版本 10
- **Xbox One**
  - (以及任何支持微软 UWP 的平台)

<p>
  <a href="https://github.com/j3k0/cordova-plugin-purchase" target="_blank" rel="noopener" className="git-link">github.com/j3k0/cordova-plugin-purchase</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个严肃的项目，您不能花费数小时进行故障排除。Ionic 专家为社区插件和高级插件提供专业的咨询服务。</p>
    <DocsButton className="native-ee-detail">立即联系我们！</DocsButton>
  </div>
</DocsCard>

<h2 id="installation">
  <a href="#installation">安装</a>
</h2>
<Tabs
  groupId="runtime"
  defaultValue="Capacitor"
  values={[
    { value: 'Capacitor', label: 'Capacitor' },
    { value: 'Cordova', label: 'Cordova' },
    { value: 'Enterprise', label: '企业版' },
  ]}
>
  <TabItem value="Capacitor">
    <CodeBlock className="language-shell">
      $ npm install cordova-plugin-purchase {'\n'}$ npm install @awesome-cordova-plugins/in-app-purchase-2 {'\n'}$ ionic
      cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-purchase {'\n'}$ npm install @awesome-cordova-plugins/in-app-purchase-2{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版包含 Ionic 团队提供全面支持和维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，如果您对本插件的企业版感兴趣，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持平台

- iOS
- Android
- Windows

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { InAppPurchase2 } from '@awesome-cordova-plugins/in-app-purchase-2/ngx';

constructor(public platform: Platform, private store: InAppPurchase2) {
  platform.ready().then(() => {
   this.store.register({
     id: "my_product_id",
     type: this.store.NON_RENEWING_SUBSCRIPTION,
   });
   this.store.when("my_product_id")
     .approved(p => p.verify())
     .verified(p => p.finish());
   this.store.refresh();
  });
}

...

this.store.order("my_product_id");

```

## 完整示例

```tsx
 // 平台就绪后
 this.store.verbosity = this.store.DEBUG;
 this.store.register({
   id: "my_product_id",
   type: this.store.PAID_SUBSCRIPTION,
 });

 // 为特定商品注册事件处理程序
 this.store.when("my_product_id").registered( (product: IAPProduct) => {
   console.log('已注册: ' + JSON.stringify(product));
 });

 // 更新
 this.store.when("my_product_id").updated( (product: IAPProduct) => {
   console.log('已更新' + JSON.stringify(product));
 });

 // 用户关闭了原生购买对话框
 this.store.when("my_product_id").cancelled( (product) => {
     console.error('购买已取消');
 });

 // 跟踪所有商店错误
 this.store.error( (err) => {
   console.error('商店错误 ' + JSON.stringify(err));
 });

 // 仅在商店就绪可用时执行代码
 this.store.ready(() =>  {
   console.log('商店已就绪');
   console.log('商品: ' + JSON.stringify(this.store.products));
   console.log(JSON.stringify(this.store.get("my_product_id")));
 });

 // 刷新应用内商品状态
 this.store.refresh();

 ...

 // 进行购买
 this.store.order("my_product_id");

```

## 设计理念

该 API 主要基于事件机制。作为此插件的使用者，您需要为您注册的商品注册监听器以响应其状态变化。

监听机制的核心是 `when()` 方法。它允许您使用查询机制来监听一个或一组商品的变更：

```tsx
this.store.when('product').updated(refreshScreen); // 匹配任何商品
this.store.when('full_version').owned(unlockApp); // 匹配特定商品
this.store.when('subscription').approved(serverCheck); // 匹配所有订阅
this.store.when('downloadable content').downloaded(showContent);
```

每当商品的任何字段发生变更（例如其 `owned` 状态）时，都会触发 `updated` 事件。

此事件提供了一种通用方式来跟踪购买状态，在需要时解锁功能，并相应地刷新您的视图。

## 注册商品

在代码中使用商品之前，商店需要了解商品的类型和标识符。

请在首次调用 `store.refresh()` 之前使用 `store.register()` 定义它们。

注册后，您可以使用 `store.get()` 来检索 `IAPProduct` 对象。

```tsx
 this.store.register({
   id: "my_consumable1",
   type: this.store.CONSUMABLE
 });
 ...
 const p = this.store.get("my_consumable1");
```

商品的 `id` 和 `type` 必须与您在 Apple、Google 或 Microsoft 开发者控制台中定义的商品匹配。

从 [wiki](https://github.com/j3k0/cordova-plugin-purchase/wiki) 了解更多信息。

## 显示商品

在您注册商品后，除了它们的 `id`、`type` 和可选的 `alias` 之外，其他信息并不清楚。

当您执行首次 `store.refresh()` 调用时，将联系平台服务器加载已注册商品的信息：人类可读的 `title` 和 `description`、`price` 等。

这不是可选的步骤，商店所有者要求您必须按照从其服务器检索到的信息显示商品详情：不允许硬编码价格和标题！这对您也很方便，因为您可以更改商品价格，并知道它会立即反映在客户设备上。

请注意，当第一个需要这些信息的视图出现在屏幕上时，这些信息可能还不可用。对您来说，最佳选择是让您的视图监控商品的变更。

## 购买

#### 发起购买

使用 `store.order("some_product_id")` 方法发起购买。

商店将管理内部购买流程。它将以下列方式结束：

- 触发 `approved` 事件。商品进入 `APPROVED` 状态。
- 触发 `cancelled` 事件。商品返回 `VALID` 状态。
- 触发 `error` 事件。商品返回 `VALID` 状态。

有关商品状态的详细信息，请参阅产品生命周期部分。

#### 完成购买

交易批准后，商品仍未拥有：商店需要确认购买已交付才能关闭交易。

要确认交付，您需要使用 `product.finish()` 方法。

#### 使用示例

在初始化期间：

```tsx
this.store.when('extra_chapter').approved((product: IAPProduct) => {
  // 下载功能
  app.downloadExtraChapter().then(() => product.finish());
});
```

当点击购买按钮时：

```tsx
this.store.order('extra_chapter');
```

#### 未完成的购买

如果您的应用无法交付内容，`product.finish()` 将不会被调用。

别担心：下次您调用 `store.refresh()` 时（很可能是在应用下次启动时），`approved` 事件将再次触发。待处理的交易是持久性的。

#### 简单情况

在最简单的情况下，当：

- 购买交付仅为本地操作；
- 您不想（或不需要）实现收据验证；

您可能只想自动完成所有购买。您可以这样做：

```js
this.store.when('product').approved((p: IAPProduct) => p.finish());
```

注意："product" 查询将匹配任何购买（有关查询的更多详细信息，请参阅 "queries"）。

## 收据验证

为了获取有关购买的最新信息（以防购买被取消或订阅续订），您应该实现服务器端收据验证。

这也可以保护您免受某些用户在设备上使用 "免费应用内购买" 应用进行的虚假 "购买" 的影响。

当购买被商店批准后，它会附带交易信息（请参阅 `product.transaction` 属性）。

要验证购买，您需要做三件事：

- 配置验证器。
- 在 `approved` 事件中，调用 `product.verify()`，在完成交易之前。
- 当交易 `verified` 时完成交易。

**顺便一提**：这是一个许多用户难以应对的功能，因此作为此插件的作者，我们可以将其作为一项服务提供给您：https://billing.fovea.cc/
（在您开始赚大钱之前是免费的）

#### 使用验证 URL 的示例

```js
this.store.validator = 'https://billing.fovea.cc/';

this.store
  .when('my stuff')
  .approved((p: IAPProduct) => p.verify())
  .verified((p: IAPProduct) => p.finish());
```

## 订阅

对于订阅，您必须实现远程收据验证。

当收据验证器返回 `store.PURCHASE_EXPIRED` 错误代码时，订阅将自动失去其 `owned` 状态。

通常，您将通过以下方式启用和禁用对内容的访问。

```tsx
this.store.when('my_subcription').updated((product: IAPProduct) => {
  if (product.owned) app.subscriberMode();
  else app.guestMode();
});
```

## 产品生命周期

在应用程序执行期间，商品会改变状态。

下图展示了商品可能经历的不同状态。

```
REGISTERED +--> INVALID
           |
           +--> VALID +--> REQUESTED +--> INITIATED +-+
                                                      |
                ^      +------------------------------+
                |      |
                |      |             +--> DOWNLOADING +--> DOWNLOADED +
                |      |             |                                |
                |      +--> APPROVED +--------------------------------+--> FINISHED +--> OWNED
                |                                                             |
                +-------------------------------------------------------------+

#### 注意

 - 完成后，消耗型商品将返回 `VALID` 状态，而其他商品将进入 `OWNED` 状态。
 - 购买过程中的任何错误都会使商品返回 `VALID` 状态。
 - 在应用程序启动期间，商品可能会立即从 `REGISTERED` 变为 `APPROVED` 或 `OWNED`，例如，如果它们是已购买的非消耗型商品或未过期的订阅。
 - 非续订订阅是仅 iOS 商品。请参阅 [iOS 非续订订阅文档](https://github.com/j3k0/cordova-plugin-purchase/blob/master/doc/ios.md#non-renewing) 获取详细解释。

## 事件

 - `loaded(IAPProduct)`
   - 当从商店加载商品数据时调用。
 - `updated(IAPProduct)`
   - 当商品发生任何更改时调用。
 - `error(err)`
   - 当订单失败时调用。
   - `err` 参数是一个错误对象
 - `approved(IAPProduct)`
   - 当商品订单被批准时调用。
 - `owned(IAPProduct)`
   - 当拥有非消耗型商品或订阅时调用。
 - `cancelled(IAPProduct)`
   - 当用户取消商品订单时调用。
 - `refunded(IAPProduct)`
   - 当用户退款订单时调用。
 - 实际上，所有其他产品状态都有对应的 Promise
   - `registered`、`valid`、`invalid`、`requested`、
     `initiated` 和 `finished`
 - `verified(IAPProduct)`
   - 当收据验证成功时调用
 - `unverified(IAPProduct)`
   - 当收据验证失败时调用
 - `expired(IAPProduct)`
   - 当验证发现订阅已过期时调用
 - `downloading(IAPProduct, progress, time_remaining)`
   - 当内容下载开始时调用
 - `downloaded(IAPProduct)`
   - 当内容下载成功完成时调用

## 了解更多

 - [GitHub](https://github.com/j3k0/cordova-plugin-purchase)
 - [GitBook](https://purchase.cordova.fovea.cc/)
 - [Wiki](https://github.com/j3k0/cordova-plugin-purchase/wiki)
 - [API 参考](https://github.com/j3k0/cordova-plugin-purchase/blob/master/doc/api.md)

## 技术支持或问题

如果您有疑问或需要集成应用内购买的帮助，请在 [GitHub 上提交问题](https://github.com/j3k0/cordova-plugin-purchase/issues) 或发送电子邮件至 _support@fovea.cc_。

@interfaces
IAPProduct
IAPProductOptions
IAPProductEvents
```