---
title: 'Android 权限 | Android 设备与 Ionic 应用权限'
description: '该插件旨在支持 Android 新版权限检查机制。了解如何在您的 Ionic 应用中安装和使用 Android 设备权限。'
sidebar_label: 'Android 权限'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Android 权限

该插件旨在支持 Android 新版权限检查机制。

您可以在此处查看所有权限：https://developer.android.com/reference/android/Manifest.permission.html

<p>
  <a href="https://github.com/NeoLSN/cordova-plugin-android-permissions" target="_blank" el="noopener" className="git-link">github.com/NeoLSN/cordova-plugin-android-permissions</a>
</p>

<h2>遇到 Cordova 问题无法解决？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个严肃的项目，绝对承受不起数小时的问题排查。Ionic 的专家为社区插件和高级插件提供优质咨询服务。</p>
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
      $ npm install cordova-plugin-android-permissions {'\n'}$ npm install @awesome-cordova-plugins/android-permissions{' '}
      {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-android-permissions {'\n'}$ npm install
      @awesome-cordova-plugins/android-permissions {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供 Ionic 团队全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，如果您对该插件的企业版感兴趣，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android

## 使用方法

### React

[了解更多在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';


constructor(private androidPermissions: AndroidPermissions) { }

...

this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
  result => console.log('Has permission?',result.hasPermission),
  err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
);

this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);

```

Android 26 及以上版本注意事项：由于 Android 26 对权限处理机制的变更（权限在需要使用时才请求，而非在应用运行时），如果您的应用不包含任何使用特定权限的功能（例如其他 Ionic Native 插件），那么 `requestPermission()` 和 `requestPermissions()` 将立即解析，不会向用户显示权限请求提示。因此，在请求某个权限之前，您必须包含一个使用该功能的相关函数。