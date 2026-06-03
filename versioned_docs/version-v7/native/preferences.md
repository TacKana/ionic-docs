---
title: Preferences Capacitor 插件 API
description: Preferences API 提供一个简单的键/值持久化存储，用于轻量级数据。
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/preferences/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/preferences/src/definitions.ts
sidebar_label: Preferences
translated: true
source_hash: 5f5b5cdb
---
# @capacitor/preferences

Preferences API 提供一个简单的键/值持久化存储，用于轻量级数据。

移动操作系统可能会定期清除 `window.localStorage` 中设置的数据，因此应使用此 API 代替。当作为 Progressive Web App 运行时，此 API 将回退到使用 `localStorage`。

此插件在 iOS 上使用 [`UserDefaults`](https://developer.apple.com/documentation/foundation/userdefaults)，在 Android 上使用 [`SharedPreferences`](https://developer.android.com/reference/android/content/SharedPreferences)。如果卸载应用，存储的数据将被清除。

**注意**：此 API _不_ 应用于本地数据库。如果您的应用存储大量数据、具有高读/写负载或需要复杂查询，我们建议使用基于 SQLite 的解决方案。一种此类解决方案是 [Ionic Secure Storage](https://ionic.io/docs/secure-storage)，它是一个基于 SQLite 的引擎，具有完整的加密支持。[Capacitor Community](https://github.com/capacitor-community/) 也构建了许多其他存储引擎。

## 安装

```bash
npm install @capacitor/preferences
npx cap sync
```

## Apple 隐私清单要求

Apple 规定应用开发者现在必须为 API 使用指定已批准的原因，以增强用户隐私。到 2024 年 5 月 1 日，在向 App Store Connect 提交应用时需要包含这些原因。

在应用中使用此特定插件时，您必须在 `/ios/App` 中创建 `PrivacyInfo.xcprivacy` 文件或使用 VS Code 扩展生成它，并指定使用原因。

有关如何执行此操作的详细步骤，请参阅 [Capacitor 文档](https://capacitorjs.com/docs/ios/privacy-manifest)。

**对于此插件，所需的字典键是 [NSPrivacyAccessedAPICategoryUserDefaults](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api#4278401)，推荐的原因是 [CA92.1](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api#4278401)。**

### 示例 PrivacyInfo.xcprivacy

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>NSPrivacyAccessedAPITypes</key>
    <array>
      
      <dict>
        <key>NSPrivacyAccessedAPIType</key>
        <string>NSPrivacyAccessedAPICategoryUserDefaults</string>
        <key>NSPrivacyAccessedAPITypeReasons</key>
        <array>
          <string>CA92.1</string>
        </array>
      </dict>
    </array>
  </dict>
</plist>
```

## 示例插件用法

```typescript
import { Preferences } from '@capacitor/preferences';

const setName = async () => {
  await Preferences.set({
    key: 'name',
    value: 'Max',
  });
};

const checkName = async () => {
  const { value } = await Preferences.get({ key: 'name' });

  console.log(`Hello ${value}!`);
};

const removeName = async () => {
  await Preferences.remove({ key: 'name' });
};
```

## 使用 JSON

Preferences API 只支持字符串值。但是，您可以在调用 `set()` 之前使用 `JSON.stringify` 序列化对象，然后对 `get()` 返回的值使用 `JSON.parse`。

此方法也可用于存储非字符串值，如数字和布尔值。

## API

<docgen-index>

* [`configure(...)`](#configure)
* [`get(...)`](#get)
* [`set(...)`](#set)
* [`remove(...)`](#remove)
* [`clear()`](#clear)
* [`keys()`](#keys)
* [`migrate()`](#migrate)
* [`removeOld()`](#removeold)
* [Interfaces](#接口)

</docgen-index>

<docgen-api>


### configure(...)

```typescript
configure(options: ConfigureOptions) => Promise<void>
```

在运行时配置首选项插件。

值为 `undefined` 的选项将不会被使用。

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#configureoptions">ConfigureOptions</a></code> |

**自版本：** 1.0.0

--------------------


### get(...)

```typescript
get(options: GetOptions) => Promise<GetResult>
```

从首选项中获取给定键的值。

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code><a href="#getoptions">GetOptions</a></code> |

**返回：** <code>Promise&lt;<a href="#getresult">GetResult</a>&gt;</code>

**自版本：** 1.0.0

--------------------


### set(...)

```typescript
set(options: SetOptions) => Promise<void>
```

在首选项中为给定键设置值。

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code><a href="#setoptions">SetOptions</a></code> |

**自版本：** 1.0.0

--------------------


### remove(...)

```typescript
remove(options: RemoveOptions) => Promise<void>
```

从首选项中移除给定键的值（如果有）。

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code><a href="#removeoptions">RemoveOptions</a></code> |

**自版本：** 1.0.0

--------------------


### clear()

```typescript
clear() => Promise<void>
```

清除首选项中的所有键和值。

**自版本：** 1.0.0

--------------------


### keys()

```typescript
keys() => Promise<KeysResult>
```

返回首选项中已知键的列表。

**返回：** <code>Promise&lt;<a href="#keysresult">KeysResult</a>&gt;</code>

**自版本：** 1.0.0

--------------------


### migrate()

```typescript
migrate() => Promise<MigrateResult>
```

从 Capacitor 2 Storage 插件迁移数据。

此操作是非破坏性的。它不会移除旧数据，且仅在键尚未设置时写入新数据。要在迁移后移除旧数据，请调用 removeOld()。

**返回：** <code>Promise&lt;<a href="#migrateresult">MigrateResult</a>&gt;</code>

**自版本：** 1.0.0

--------------------


### removeOld()

```typescript
removeOld() => Promise<void>
```

从 Capacitor 2 Storage 插件中移除带有 `_cap_` 前缀的旧数据。

**自版本：** 1.1.0

--------------------


### 接口


#### ConfigureOptions

| 属性        | 类型                | 描述                                                                                                                                                                                                                                                                                                                                              | 默认值                       | 自版本 |
| ----------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ----- |
| **`group`** | <code>string</code> | 设置首选项组。首选项组用于组织键/值对。使用值 'NativeStorage' 可提供与 [`cordova-plugin-nativestorage`](https://www.npmjs.com/package/cordova-plugin-nativestorage) 的向后兼容性。警告：使用 'NativeStorage' 组时，`clear()` 方法可能删除非预期的值。 | <code>CapacitorStorage</code> | 1.0.0 |


#### GetResult

| 属性        | 类型                        | 描述                                                                                                                       | 自版本 |
| ----------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`value`** | <code>string \| null</code> | 与给定键关联的首选项值。如果之前未设置值或已移除值，则为 `null`。 | 1.0.0 |


#### GetOptions

| 属性      | 类型                | 描述                                       | 自版本 |
| --------- | ------------------- | ------------------------------------------------- | ----- |
| **`key`** | <code>string</code> | 要从首选项中检索其值的键。 | 1.0.0 |


#### SetOptions

| 属性        | 类型                | 描述                                                   | 自版本 |
| ----------- | ------------------- | ------------------------------------------------------------- | ----- |
| **`key`**   | <code>string</code> | 与正在设置的值关联的键。 | 1.0.0 |
| **`value`** | <code>string</code> | 要在首选项中设置的值。      | 1.0.0 |


#### RemoveOptions

| 属性      | 类型                | 描述                                     | 自版本 |
| --------- | ------------------- | ----------------------------------------------- | ----- |
| **`key`** | <code>string</code> | 要从首选项中移除其值的键。 | 1.0.0 |


#### KeysResult

| 属性       | 类型                  | 描述                    | 自版本 |
| ---------- | --------------------- | ------------------------------ | ----- |
| **`keys`** | <code>string[]</code> | 首选项中的已知键。 | 1.0.0 |


#### MigrateResult

| 属性           | 类型                  | 描述                                                                                                                           | 自版本 |
| -------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`migrated`** | <code>string[]</code> | 已迁移的键数组。                                                                                                  | 1.0.0 |
| **`existing`** | <code>string[]</code> | 已在 Capacitor 2 Preferences 插件中有值且已迁移或以其他方式存在于首选项中的键数组。 | 1.0.0 |

</docgen-api>
