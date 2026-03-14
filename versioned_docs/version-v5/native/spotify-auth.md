---
sidebar_label: 'Spotify 认证'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Spotify Auth

用于 Spotify 认证的 Cordova 插件

> https://github.com/Festify/cordova-spotify-oauth

<p>
  <a href="https://github.com/Festify/cordova-spotify-oauth" target="_blank" rel="noopener" className="git-link">github.com/Festify/cordova-spotify-oauth</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在构建一个严肃的项目，你无法承受花费数小时进行故障排除。Ionic 的专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-spotify-oauth {'\n'}$ npm install @awesome-cordova-plugins/spotify-auth {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-spotify-oauth {'\n'}$ npm install @awesome-cordova-plugins/spotify-auth {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
       Ionic 企业版提供 Ionic 团队完全支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或者，如果你对此插件的企业版感兴趣，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 用法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { SpotifyAuth } from '@awesome-cordova-plugins/spotify-auth/ngx';

// [...]

constructor(private spotifyAuth: SpotifyAuth) { }

// [...]

const config = {
  clientId: "&lt;SPOTIFY CLIENT ID>",
  redirectUrl: "&lt;REDIRECT URL，必须与认证端点及 Spotify 开发者控制台设置匹配>",
  scopes: ["streaming"], // 所有权限范围请参见 Spotify 开发者控制台
  tokenExchangeUrl: "&lt;令牌交换 HTTP 端点的 URL>",
  tokenRefreshUrl: "&lt;令牌刷新 HTTP 端点的 URL>",
};

...

this.spotifyAuth.authorize(config)
  .then(({ accessToken, expiresAt }) => {
    console.log(`获取到访问令牌：${accessToken}!`);
    console.log(`它将在 ${expiresAt - Date.now()} 毫秒后过期。`);
  });

// [...]

this.spotifyAuth.forget();

// [...]
```