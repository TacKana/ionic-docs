# 术语表

<div id="what-is">

<section id="android-sdk">
  <a href="#android-sdk">
    <h3>Android SDK</h3>
  </a>
  <p>
    <a href="http://developer.android.com/sdk/index.html" target="_blank">
      Android SDK
    </a>{' '}
    是为 Google Android 平台构建应用而开发的软件开发工具包。它包含用于构建、测试和调试 Android 应用程序的工具。
  </p>
</section>

<section id="android-studio">
  <a href="#android-studio">
    <h3>Android Studio</h3>
  </a>
  <p>
    <a href="https://developer.android.com/studio/" target="_blank">
      Android Studio
    </a>{' '}
    是用于原生 Android 应用开发的官方集成开发环境（IDE）。
  </p>
</section>

<section id="autoprefixer">
  <a href="#autoprefixer">
    <h3>Autoprefixer</h3>
  </a>
  <p>
    <a href="https://github.com/postcss/autoprefixer" target="_blank">
      Autoprefixer
    </a>{' '}
    是一个为手写 Sass/CSS 代码添加特定于厂商的前缀的工具。这确保了你编写的标准化 CSS 规则将在所有支持的浏览器上应用。例如，无需了解各种浏览器使用的每一种 flexbox 语法，autoprefixer 允许你只写 <code>display: flex;</code>，它会自动插入正确的 CSS。
  </p>
</section>

<section id="bundling">
  <a href="#bundling">
    <h3>打包（Bundling）</h3>
  </a>
  <p>
    打包是获取应用的依赖项（你编写的代码加上已安装的 npm 模块）并将其编译/转译成一个单独文件的过程。
  </p>
</section>

<section id="capacitor">
  <a href="#capacitor">
    <h3>Capacitor</h3>
  </a>
  <p>
    <a href="https://capacitorjs.com/" target="_blank">
      Capacitor
    </a>{' '}
    是一个开源的跨平台应用运行时，允许基于 Web 的应用在 iOS、Android、Electron 和 Web 上原生运行。将这些应用称为"原生渐进式 Web 应用"是很有帮助的，它们代表了超越传统混合应用思维的下一步演进。Capacitor 由 Ionic 公司创建并积极开发/支持。
  </p>
</section>

<!-- cspell:disable -->

<section id="cli">
  <a href="#cli">
    <h3>CLI</h3>
  </a>
  <p>
    CLI，即<strong>命</strong>令<strong>行</strong>接<strong>口</strong>，是一种用于与程序交互的基于文本的界面。Mac 用户常用的命令行应用是 Terminal 应用，Windows 用户通常使用 Command Prompt。Ionic 社区通常使用此术语来指代{' '}
    <a href="https://ionicframework.com/docs/cli">Ionic 的 CLI</a>。Ionic 的 CLI 可用于多种用途，例如创建应用的生产构建、运行开发服务器以及访问{' '}
    <a href="https://ionic.io/appflow" target="_blank">
      Ionic 商业服务
    </a>
    。
  </p>
</section>

<!-- cspell:enable -->

<section id="commonjs">
  <a href="#commonjs">
    <h3>CommonJS</h3>
  </a>
  <p>
    <a href="https://webpack.github.io/docs/commonjs.html" target="_blank">
      CommonJS
    </a>{' '}
    是一个定义 JavaScript API 标准格式的组织。他们已经定义了 JavaScript 模块和包的标准。
  </p>
</section>

<section id="cordova">
  <a href="#cordova">
    <h3>Cordova</h3>
  </a>
  <p>
    <a href="https://cordova.apache.org" target="_blank">
      Apache Cordova
    </a>{' '}
    是一个开源移动应用开发框架，将标准 HTML/CSS/JS 转换为完整的原生应用。它提供了用于访问原生设备功能（如摄像头或加速度计）的 JavaScript API。Cordova 包含用于将 Web 应用打包到 iOS、Android 和 Windows Phone 所需的构建工具。
  </p>
</section>

<section id="cors">
  <a href="#cors">
    <h3>CORS</h3>
  </a>
  <p>
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target="_blank">
      CORS
    </a>{' '}
    （跨源资源共享）是一种用于服务器控制客户端对 Web 资产访问的机制。有关更多信息，请参阅{' '}
    <a href="../troubleshooting/cors">CORS 常见问题解答</a>。
  </p>
</section>

<section id="css-variables">
  <a href="#css-variables">
    <h3>CSS 变量</h3>
  </a>
  <p>
    你可能熟悉 Sass 中的变量。{' '}
    <a href="https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care" target="_blank">
      CSS 变量
    </a>{' '}
    实现了相同的功能，但内置于浏览器中。CSS 变量在所有常青浏览器中均可用。
  </p>
</section>

<section id="decorators">
  <a href="#decorators">
    <h3>装饰器（Decorators）</h3>
  </a>
  <p>
    装饰器是返回函数的表达式。它们允许你获取现有函数并扩展其行为。使用 TypeScript，你还可以装饰<i>类</i>和<i>参数</i>。当你装饰一个<strong>类</strong>时，你是在包装和扩展其构造函数的行为。换句话说，装饰器会在构造函数被调用时添加一些功能，然后返回原始构造函数。当你装饰一个<strong>参数</strong>时，你是在包装传递给该参数的参数。装饰器会在参数传递给方法时添加功能，然后返回原始参数。
  </p>
</section>

<section id="es5">
  <a href="#es5">
    <h3>ES5</h3>
  </a>
  <p>
    ES5 指的是 EcmaScript 第 5 版。简单来说，ES5 是当今开发者最熟悉的 JavaScript 版本。
  </p>
</section>

<section id="es2015-es6">
  <a href="#es2015-es6">
    <h3>ES2015/ES6</h3>
  </a>
  <p>
    JavaScript 的这一版本引入了大量新功能，包括类、模块、迭代器和 Promise。常青浏览器（Chrome、Safari、Firefox 和 Edge）完全支持 ES6，但要在旧版浏览器中使用 ES6 功能，需要使用诸如 <a href="#babel">Babel</a> 和 <a href="#typescript">TypeScript</a> 之类的工具将 ES6 代码<a href="#transpiler">转译</a>为 ES5。
  </p>
</section>

<section id="es2016-es7">
  <a href="#es2016-es7">
    <h3>ES2016/ES7</h3>
  </a>
  <p>
    JavaScript 的这个版本为语言添加了许多新功能，包括 <code>Array.includes</code> 和指数运算符。所有常青浏览器（Chrome、Safari、Firefox 和 Edge）完全支持此版本的 JavaScript。
  </p>
</section>

<section id="es2017-es8">
  <a href="#es2017-es8">
    <h3>ES2017/ES8</h3>
  </a>
  <p>
    JavaScript 的这个版本是最新标准。它目前处于成为新官方标准前的最后阶段。此规范包括 Async/Await（已在所有常青浏览器中实现）和共享内存/原子操作。
  </p>
</section>

<section id="genymotion">
  <a href="#genymotion">
    <h3>Genymotion</h3>
  </a>
  <p>
    Genymotion 是一个第三方 Android 模拟器。它速度极快，对于在 Android 上快速测试你的应用非常有用。查看我们的 <a href="../developing/tips#using-genymotion-android">Genymotion 资源部分</a>了解更多信息。
  </p>
</section>

<section id="git">
  <a href="#git">
    <h3>Git</h3>
  </a>
  <p>
    <a href="https://git-scm.com/" target="_blank">
      Git
    </a>{' '}
    是一个用于管理代码的分布式版本控制系统。它允许开发团队向同一项目贡献代码而不会引起代码冲突。
  </p>
</section>

<section id="gulp">
  <a href="#gulp">
    <h3>Gulp</h3>
  </a>
  <p>
    <a href="http://gulpjs.com/" target="_blank">
      Gulp
    </a>{' '}
    是一个用于运行任务的工具，可用于构建你的应用。常见的构建任务包括将 <a href="#es2015-es6">ES6</a> 转译为 <a href="#es5">ES5</a>、将 <a href="#sass">Sass</a> 转换为 CSS、压缩代码以及合并文件。
  </p>
</section>

<section id="es-modules">
  <a href="#es-modules">
    <h3>ES 模块</h3>
  </a>
  <p>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import" target="_blank">
      ES 模块
    </a>{' '}
    将模块的概念原生引入 JavaScript。使用模块后，类和变量不再处于全局作用域中，必须显式导入到你的项目中才能使用。这使得更容易理解代码的来源，并增加了功能的模块化和分区化。
  </p>
</section>

<section id="ionicons">
  <a href="#ionicons">
    <h3>Ionicons</h3>
  </a>
  <p>
    <a href="https://ionic.io/ionicons/" target="_blank">
      Ionicons
    </a>{' '}
    是一个由 Ionic 创建和使用的开源图标集。它包括 1:1 的 iOS 和 Material Design 图标，以及常用的社交/应用图标。Ionicons 默认包含在 Ionic 发行版中，但也可以在任何项目中使用。
  </p>
</section>

<section id="karma">
  <a href="#karma">
    <h3>Karma</h3>
  </a>
  <p>
    <a href="https://karma-runner.github.io/latest/index.html" target="_blank">
      Karma
    </a>{' '}
    是一个测试运行器，将在真实浏览器中运行应用的测试。它在真实浏览器中执行用任何测试框架编写的测试用例。Karma 最初是为与 Angular 1 一起使用而编写的。
  </p>
</section>

<section id="module">
  <a href="#module">
    <h3>模块（Module）</h3>
  </a>
  <p>
    JavaScript 中的模块是小型、独立、可重用的代码片段，它们彼此之间以及与全局作用域相互隔离。
  </p>
</section>

<section id="monorepo">
  <a href="#monorepo">
    <h3>Monorepo（单仓库）</h3>
  </a>
  <p>
    <strong>Monorepo</strong> 是一个包含多个项目的单一 git 仓库。优点包括更简单的组织、共享的工具和依赖项，以及与团队成员的更好的协作。
  </p>
</section>

<section id="livereload">
  <a href="#livereload">
    <h3>实时重载（Live Reload）</h3>
  </a>
  <p>
    <strong>实时重载</strong>是一种工具，当检测到应用中的更改时，它会自动重新加载浏览器或{' '}
    <a href="../core-concepts/webview">Web View</a>。在某些情况下，它可以在无需重新加载整个窗口的情况下替换应用的部分内容。有关更多信息，请参阅{' '}
    <a href="../cli/livereload">Live Reload 文档</a>。
  </p>
</section>

<section id="node">
  <a href="#node">
    <h3>Node</h3>
  </a>
  <p>
    <a href="https://nodejs.org/" target="_blank">
      Node
    </a>{' '}
    是一个运行时环境，允许 JavaScript 在服务器端编写。除了用于 Web 服务外，node 还经常用于构建开发者工具，例如 <a href="#cli">Ionic CLI</a>。
  </p>
</section>

<section id="npm">
  <a href="#npm">
    <h3>npm</h3>
  </a>
  <p>
    <a href="https://www.npmjs.com/" target="_blank">
      npm
    </a>{' '}
    是 <a href="#node">node</a> 的包管理器。它允许开发者安装、共享和打包 node 模块。Ionic 及其许多依赖项都可以通过 npm 安装。
  </p>
</section>

<section id="observable">
  <a href="#observable">
    <h3>Observable（可观察对象）</h3>
  </a>
  <p>
    可观察对象是一种发出事件（或通知）的对象。观察者是一种监听这些事件并在收到事件时执行某些操作的对象。它们共同创建了一种可用于异步编程的模式。
  </p>
</section>

<section id="package-id">
  <a href="#package-id">
    <h3>包 ID</h3>
  </a>
  <p>
    Apple 称之为<strong>Bundle ID</strong>，Android 称之为<strong>Application ID</strong>，<strong>包 ID</strong>用于标识发布到 App Store/Play Store 的应用。它是一个使用{' '}
    <a href="https://en.wikipedia.org/wiki/Reverse_domain_name_notation" target="_blank">
      反向域名表示法
    </a>
    格式化的字符串。
  </p>
</section>

<section id="polyfill">
  <a href="#polyfill">
    <h3>Polyfill</h3>
  </a>
  <p>
    <a href="https://remysharp.com/2010/10/08/what-is-a-polyfill" target="_blank">
      Polyfill
    </a>{' '}
    是一段代码，用于向浏览器添加功能并标准化浏览器差异。这类似于 <a href="#shim">shim</a>，但 shim 有其自己的 API，而 polyfill 允许使用浏览器的预期 API。
  </p>
</section>

<section id="protractor">
  <a href="#protractor">
    <h3>Protractor</h3>
  </a>
  <p>
    <a href="https://angular.github.io/protractor/#/" target="_blank">
      Protractor
    </a>{' '}
    是一个由 Angular 团队编写和维护的测试框架。Protractor 可以与测试运行器（如 Karma）一起用于端到端测试。测试运行器允许你快速且程序化地验证代码质量。
  </p>
</section>

<section id="sass">
  <a href="#sass">
    <h3>Sass</h3>
  </a>
  <p>
    Sass 是一种编译为 CSS 的样式表语言，Ionic 使用它。Sass 就像 CSS，但具有额外的功能，如{' '}
    <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variables_" target="_blank">
      变量
    </a>
    、<a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins" target="_blank">
      混合宏
    </a>和 <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_10" target="_blank">
      循环
    </a>。
  </p>
</section>

<section id="scoped">
  <a href="#scoped">
    <h3>作用域封装（Scoped Encapsulation）</h3>
  </a>
  <p>
    使用作用域封装的组件会在运行时通过向每个样式追加一个 data 属性来自动限定其 CSS 的范围。在 CSS 中覆盖作用域选择器需要{' '}
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity" target="_blank">
      更高特异性
    </a>{' '}
    的选择器。作用域组件也可以使用{' '}
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank">
      CSS 自定义属性
    </a>
    进行样式设置。
  </p>
</section>

<section id="shadow">
  <a href="#shadow">
    <h3>Shadow DOM</h3>
  </a>
  <p>
    <a href="https://developers.google.com/web/fundamentals/web-components/shadowdom" target="_blank">
      Shadow DOM
    </a>{' '}
    是一种原生的浏览器解决方案，用于组件的 DOM 和样式封装。它保护组件免受其周围环境的影响。要外部样式化 Shadow DOM 组件的内部元素，必须使用{' '}
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank">
      CSS 自定义属性
    </a>{' '}
    或{' '}
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part" target="_blank">
      CSS 阴影部分
    </a>
    。
  </p>
</section>

<section id="shim">
  <a href="#shim">
    <h3>Shim</h3>
  </a>
  <p>
    Shim 是一段用于标准化跨浏览器 API 的代码。Shim 可以有自己的 API，隐藏浏览器特定的实现细节，对最终用户透明。
  </p>
</section>

<section id="transpiler">
  <a href="#transpiler">
    <h3>转译器（Transpiler）</h3>
  </a>
  <p>
    转译是在执行之前将代码从一种语言转换为另一种语言的过程。通常，转译器会将一种高级语言转换为另一种高级语言。在 Ionic Framework 中，最常见的<em>转译</em>类型是将 <a href="#es2015-es6">ES2015/ES6</a>（<a href="#typescript">TypeScript</a>）转换为 <a href="#es5">ES5</a>（传统 JavaScript）。
  </p>
</section>

<section id="typescript">
  <a href="#typescript">
    <h3>TypeScript</h3>
  </a>
  <p>
    <a href="http://www.typescriptlang.org" target="_blank">
      TypeScript
    </a>{' '}
    是 JavaScript 的超集，这意味着它提供 JavaScript，以及许多额外功能，如{' '}
    <a href="http://www.typescriptlang.org/Handbook#basic-types" target="_blank">
      类型声明
    </a>{' '}
    和{' '}
    <a href="http://www.typescriptlang.org/Handbook#interfaces" target="_blank">
      接口
    </a>
    。虽然 Ionic 是使用 TypeScript 构建的，但用它来构建 Ionic 应用是完全可选的。
  </p>
</section>

<section id="unit-tests">
  <a href="#unit-tests">
    <h3>单元测试</h3>
  </a>
  <p>
    单元测试和单元测试是一种测试小段代码以查看它们是否按预期行为的方法。单元测试框架包括 Jasmine、Mocha、QUnit 等。
  </p>
</section>

<section id="webpack">
  <a href="#webpack">
    <h3>Webpack</h3>
  </a>
  <p>
    <a href="https://webpack.github.io/" target="_blank">
      Webpack
    </a>{' '}
    将 JavaScript 模块和其他资源打包在一起。它可以用于创建仅在需要时加载的单个或多个"块"。Webpack 可用于将许多文件和依赖项打包成一个文件或其他类型。
  </p>
</section>

<section id="web-standards">
  <a href="#web-standards">
    <h3>Web 标准</h3>
  </a>
  <p>
    <a href="https://www.w3.org/" target="_blank">
      万维网联盟
    </a>{' '}
    （W3C）是 Web 的标准组织。行业领导者和公众共同制定{' '}
    <a href="https://www.w3.org/standards/" target="_blank">
      Web 标准
    </a>
    ，这是一组定义 Web 平台的协议、规范和技术。
  </p>
</section>

<section id="xcode">
  <a href="#xcode">
    <h3>Xcode</h3>
  </a>
  <p>
    <a href="https://developer.apple.com/xcode/" target="_blank">
      Xcode
    </a>{' '}
    是一个 Apple 的 IDE（集成开发环境），用于在 Apple 操作系统（macOS、iOS、watchOS 和 tvOS）上进行软件开发，并为其他语言和平台提供了扩展。
  </p>
</section>

</div>
