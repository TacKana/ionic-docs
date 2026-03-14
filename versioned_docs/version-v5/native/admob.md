---
sidebar_label: 'AdMob'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# AdMob

最完整的 AdMob 插件，支持 [Tappx](http://www.tappx.com/?h=dec334d63287772de859bdb4e977fce6) 广告。
使用最新的 Google AdMob SDK 通过广告来变现您的应用和游戏。通过此插件，您可以轻松展示 AdMob 广告！

**支持功能：**

- 横幅广告（顶部和底部）
- 插页式广告
- 激励视频广告
- [Tappx](http://www.tappx.com/?h=dec334d63287772de859bdb4e977fce6) 广告

<p>
  <a href="https://github.com/appfeel/admob-google-cordova" target="_blank" rel="noopener" className="git-link">github.com/appfeel/admob-google-cordova</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，您无法承担数小时排查问题的时间。Ionic 专家为社区插件和高级插件提供优质咨询服务。</p>
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
      $ npm install cordova-admob {'\n'}$ npm install @awesome-cordova-plugins/admob {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-admob {'\n'}$ npm install @awesome-cordova-plugins/admob {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版包含由 Ionic 团队完全支持并维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，如果您对此插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS
- 浏览器

## 使用方式

### React

[了解如何在 React 中使用 Ionic Native 组件](../native-community.md#react)

### Angular

**注意：** 包名为 `io.ionic.starter` 的应用不会展示任何广告。这是新建 `ionic` 应用的默认包名。请确保重命名包名以便广告能够显示。

```tsx
import { Admob, AdmobOptions } from '@awesome-cordova-plugins/admob';


constructor(private admob: Admob) {
    // AdMob 选项配置
    const admobOptions: AdmobOptions = {
      bannerAdId: 'XXX-XXXX-XXXX',
      interstitialAdId: 'XXX-XXXX-XXXX',
      rewardedAdId: 'XXX-XXXX-XXXX',
      isTesting: true,
      autoShowBanner: false,
      autoShowInterstitial: false,
      autoShowRewarded: false,
      adSize: this.admob.AD_SIZE.BANNER
    };

    // 设置 AdMob 选项
    this.admob.setOptions(admobOptions)
      .then(() => console.log('AdMob 选项已成功设置'))
      .catch(err => console.error('设置 AdMob 选项时出错:', err));
}



// （可选）预加载横幅广告，使其准备好随时展示
this.admob.createBannerView()
  .then(() => console.log('横幅广告已加载'))
  .catch(err => console.error('加载横幅广告时出错:', err));


// 展示横幅广告（必须先调用 createBannerView 且 onAdLoaded() 事件已触发）
this.admob.onAdLoaded().subscribe((ad) => {
  if (ad.adType === this.admob.AD_TYPE.BANNER) {
    this.admob.showBannerAd()
      .then(() => console.log('横幅广告已展示'))
      .catch(err => console.error('展示横幅广告时出错:', err));
  }
});


// 隐藏横幅广告，但不销毁，以便后续再次展示
// 如需隐藏并销毁横幅广告，请参见 destroyBannerView
this.admob.showBannerAd(false)
  .then(() => console.log('横幅广告已隐藏'))
  .catch(err => console.error('隐藏横幅广告时出错:', err));



// 请求插页式广告，以便稍后展示
// 可通过选项参数自动展示，详见文档
this.admob.requestInterstitialAd()
  .then(() => console.log('插页式广告已加载'))
  .catch(err => console.error('加载插页式广告时出错:', err));


// 展示插页式广告（必须先调用 requestInterstitialAd）
this.admob.onAdLoaded().subscribe((ad) => {
  if (ad.adType === this.admob.AD_TYPE.INTERSTITIAL) {
    this.admob.showInterstitialAd()
      .then(() => console.log('插页式广告已展示'))
      .catch(err => console.error('展示插页式广告时出错:', err));
  }
});


// 请求激励视频广告
this.admob.requestRewardedAd()
  .then(() => console.log('激励视频广告已加载'))
  .catch(err => console.error('加载激励视频广告时出错:', err));


// 展示激励视频广告（必须先调用 requestRewardedAd）
this.admob.onAdLoaded().subscribe((ad) => {
  if (ad.adType === this.admob.AD_TYPE.REWARDED) {
    this.admob.showRewardedAd()
      .then(() => console.log('激励视频广告已展示'))
      .catch(err => console.error('展示激励视频广告时出错:', err));
  }
});


// 隐藏并销毁横幅或插页式广告
this.admob.destroyBannerView()
  .then(() => console.log('横幅或插页式广告已销毁'))
  .catch(err => console.error('销毁横幅或插页式广告时出错:', err));



// 广告加载完成事件
this.admob.onAdLoaded().subscribe((ad) => {
  if (ad.adType === this.admob.AD_TYPE.BANNER) {
    console.log('横幅广告已加载');
    this.admob.showBannerAd();
  } else if (ad.adType === this.admob.AD_TYPE.INTERSTITIAL) {
    console.log('插页式广告已加载');
    this.admob.showInterstitialAd();
  } else if (ad.adType === this.admob.AD_TYPE.REWARDED) {
    console.log('激励视频广告已加载');
    this.admob.showRewardedAd();
  }
});



// 广告加载失败事件
this.admob.onAdFailedToLoad().subscribe(err => console.log('加载广告时出错:', err));



// 插页式广告打开事件
this.admob.onAdOpened().subscribe(() => console.log('插页式广告已打开'));



// 插页式广告关闭事件
this.admob.onAdClosed().subscribe(() => console.log('插页式广告已关闭'));



// 广告被点击并离开应用事件
this.admob.onAdLeftApplication().subscribe(() => console.log('广告已离开应用'));



// 用户获得奖励事件
this.admob.onRewardedAd().subscribe(() => console.log('用户已获得奖励'));



// 激励视频广告开始播放事件
this.admob.onRewardedAdVideoStarted().subscribe(() => console.log('激励视频广告开始播放'));



// 激励视频广告播放完成事件
this.admob.onRewardedAdVideoCompleted().subscribe(() => console.log('激励视频广告播放完成'));

```