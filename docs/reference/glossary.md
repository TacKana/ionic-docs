---
title: 术语表
---

<head>
  <title>API 术语表：术语与定义 | Ionic Framework</title>
  <meta
    name="description"
    content="Ionic 是面向 Web 开发者的平台。查看我们的 API 术语表，了解应用构建相关的术语和关键词定义，以便更好地理解 Ionic 的各项能力。"
  />
</head>

<div id="what-is">

<section id="a11y">
  <a href="#a11y">
    <h3>无障碍辅助 (Accessibility)</h3>
  </a>
  <p>
    <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility" target="_blank">无障碍辅助 (Accessibility, 简称 a11y)</a> 是一种让尽可能多的人都能使用内容的实践，即使用户的能力有限。这包括残障人士、使用移动设备的人群以及网络连接缓慢的用户。开发内容时，应尽可能达到技术允许范围内的最高无障碍标准。
  </p>
</section>

<section id="android-sdk">
  <a href="#android-sdk">
    <h3>Android SDK</h3>
  </a>
  <p>
    <a href="http://developer.android.com/sdk/index.html" target="_blank">Android SDK</a> 是为 Google Android 平台开发者构建的软件开发工具包。它包含了构建、测试和调试 Android 应用程序所需的工具。
  </p>
</section>

<section id="android-studio">
  <a href="#android-studio">
    <h3>Android Studio</h3>
  </a>
  <p>
    <a href="https://developer.android.com/studio/" target="_blank">Android Studio</a> 是用于原生 Android 应用开发的官方集成开发环境 (IDE)。
  </p>
</section>

<section id="autoprefixer">
  <a href="#autoprefixer">
    <h3>Autoprefixer</h3>
  </a>
  <p>
    <a href="https://github.com/postcss/autoprefixer" target="_blank">Autoprefixer</a> 是一个为手写的 Sass/CSS 代码添加特定于浏览器的厂商前缀的工具。这可以确保你编写的标准化 CSS 规则能够在所有支持的浏览器中生效。例如，你无需了解不同浏览器下 flexbox 的各种语法，autoprefixer 允许你只需编写 <code>display: flex;</code>，它就会自动填入正确的 CSS。
  </p>
</section>

<section id="bundling">
  <a href="#bundling">
    <h3>打包 (Bundling)</h3>
  </a>
  <p>
    打包是将应用的依赖项（你编写的代码以及已安装的 npm 模块）进行编译/转译，并将它们合并成一个单一文件的过程。
  </p>
</section>

<section id="capacitor">
  <a href="#capacitor">
    <h3>Capacitor</h3>
  </a>
  <p>
    <a href="https://capacitorjs.com/" target="_blank">Capacitor</a> 是一个开源的跨平台应用运行时环境，它允许基于 Web 的应用在 iOS、Android、Electron 和 Web 上原生运行。我们将这些应用称为“原生渐进式 Web 应用 (Native Progressive Web Apps)”会很有帮助，它们代表了超越传统混合应用理念的下一代演进。Capacitor 由 Ionic 公司创建并积极开发/维护。
  </p>
</section>

<!-- cspell:disable -->

<section id="cli">
  <a href="#cli">
    <h3>CLI</h3>
  </a>
  <p>
    CLI，即<strong>命令行界面 (Command-Line Interface)</strong>，是一种用于与程序交互的基于文本的界面。Mac 用户常用的命令行应用是终端 (Terminal)，而 Windows 用户通常使用命令提示符 (Command Prompt)。Ionic 社区常用此术语来指代 <a href="https://ionicframework.com/docs/cli">Ionic 的命令行工具</a>。Ionic 的命令行工具可用于多种任务，例如构建用于生产环境的应用、运行开发服务器，以及访问 <a href="https://ionic.io/appflow" target="_blank">Ionic 商业服务</a>。
  </p>
</section>

<!-- cspell:enable -->

<section id="commonjs">
  <a href="#commonjs">
    <h3>CommonJS</h3>
  </a>
  <p>
    <a href="https://webpack.github.io/docs/commonjs.html" target="_blank">CommonJS</a> 是一个定义 JavaScript API 标准格式的组织。他们为 JavaScript 模块和包定义了标准。
  </p>
</section>

<section id="cordova">
  <a href="#cordova">
    <h3>Cordova</h3>
  </a>
  <p>
    <a href="https://cordova.apache.org" target="_blank">Apache Cordova</a> 是一个开源的移动应用开发框架，它可以将标准的 HTML/CSS/JS 转换为功能完备的原生应用。它提供了用于访问原生设备功能（如摄像头或加速度计）的 JavaScript API。Cordova 包含了将 Web 应用打包到 iOS、Android 和 Windows Phone 所需的构建工具。
  </p>
</section>

<section id="cors">
  <a href="#cors">
    <h3>CORS</h3>
  </a>
  <p>
    <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS" target="_blank">CORS</a> (跨域资源共享) 是一种用于服务器控制客户端对 Web 资源访问的机制。更多信息请参阅 <a href="../troubleshooting/cors">CORS 常见问题</a>。
  </p>
</section>

<section id="css-variables">
  <a href="#css-variables">
    <h3>CSS 变量 (CSS Variables)</h3>
  </a>
  <p>
    你可能已经熟悉 Sass 中的变量。<a href="https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care" target="_blank">CSS 变量</a>实现了相同的功能，但它是内置于浏览器中的。所有主流浏览器 (Evergreen Browsers) 都支持 CSS 变量。
  </p>
</section>

<section id="decorators">
  <a href="#decorators">
    <h3>装饰器 (Decorators)</h3>
  </a>
  <p>
    装饰器是返回函数的表达式。它们允许你接收一个现有函数，并扩展其行为。使用 TypeScript，你还可以装饰<em>类</em>和<em>参数</em>。当你装饰一个<strong>类</strong>时，你是在包装和扩展其构造函数的行为。换句话说，装饰器会在构造函数被调用时添加一些功能，然后返回原始的构造函数。当你装饰一个<strong>参数</strong>时，你是在包装传递给该参数的参数值。装饰器会在参数被传递给方法时添加功能，然后返回原始的参数。
  </p>
</section>

<section id="es5">
  <a href="#es5">
    <h3>ES5</h3>
  </a>
  <p>
    ES5 指的是 ECMAScript 第五版。简单来说，ES5 是目前开发者最熟悉的 JavaScript 版本。
  </p>
</section>

<section id="es2015-es6">
  <a href="#es2015-es6">
    <h3>ES2015/ES6</h3>
  </a>
  <p>
    这个 JavaScript 版本引入了大量新特性，包括类 (classes)、模块 (modules)、迭代器 (iterators) 和 Promise。主流浏览器 (Chrome, Safari, Firefox, Edge) 完全支持 ES6，但为了在较旧的浏览器中使用 ES6 特性，需要使用像 <a href="#babel">Babel</a> 和 <a href="#typescript">TypeScript</a> 这样的工具将 ES6 代码<a href="#transpiler">转译 (transpile)</a> 为 ES5。
  </p>
</section>

<section id="es2016-es7">
  <a href="#es2016-es7">
    <h3>ES2016/ES7</h3>
  </a>
  <p>
    这个 JavaScript 版本为语言增加了一些新特性，例如 <code>Array.includes</code> 和指数操作符。所有主流浏览器都完全支持此版本的 JavaScript。
  </p>
</section>

<section id="es2017-es8">
  <a href="#es2017-es8">
    <h3>ES2017/ES8</h3>
  </a>
  <p>
    这个 JavaScript 版本是最新的标准，目前正处于成为新官方标准前的最终阶段。该规范包含了 Async/Await (所有主流浏览器均已支持) 和共享内存/原子操作 (shared memory/atomics)。
  </p>
</section>

<section id="genymotion">
  <a href="#genymotion">
    <h3>Genymotion</h3>
  </a>
  <p>
    Genymotion 是一款第三方的 Android 模拟器。它运行速度极快，对于在 Android 上快速测试你的应用非常有用。请查阅我们关于 Genymotion 的<a href="../developing/tips#using-genymotion-android">资源章节</a>以了解更多信息。
  </p>
</section>

<section id="git">
  <a href="#git">
    <h3>Git</h3>
  </a>
  <p>
    <a href="https://git-scm.com/" target="_blank">Git</a> 是一个用于代码管理的分布式版本控制系统。它允许开发团队向同一个项目贡献代码而不会引起代码冲突。
  </p>
</section>

<section id="gulp">
  <a href="#gulp">
    <h3>Gulp</h3>
  </a>
  <p>
    <a href="http://gulpjs.com/" target="_blank">Gulp</a> 是一个用于运行任务的工具，可以用来构建你的应用。常见的构建任务包括将 <a href="#es2015-es6">ES6</a> 转译为 <a href="#es5">ES5</a>、将 <a href="#sass">Sass</a> 转换为 CSS、压缩代码以及合并文件。
  </p>
</section>

<section id="es-modules">
  <a href="#es-modules">
    <h3>ES 模块 (ES Modules)</h3>
  </a>
  <p>
    <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import" target="_blank">ES 模块</a>将模块的概念原生地带入了 JavaScript。有了模块，类和变量不再处于全局作用域，必须显式地导入到项目中才能使用。这使得理解代码的来源变得更加容易，并增强了代码的模块化和功能隔离。
  </p>
</section>

<section id="ionicons">
  <a href="#ionicons">
    <h3>Ionicons</h3>
  </a>
  <p>
    <a href="https://ionic.io/ionicons/" target="_blank">Ionicons</a> 是一个由 Ionic 创建并使用、开源的图标库。它包含了 1:1 比例的 iOS 和 Material Design 图标，以及常用的社交/应用程序图标。Ionicons 默认包含在 Ionic 的发行版中，但它们也可以在任何项目中使用。
  </p>
</section>

<section id="karma">
  <a href="#karma">
    <h3>Karma</h3>
  </a>
  <p>
    <a href="https://karma-runner.github.io/latest/index.html" target="_blank">Karma</a> 是一个测试运行器 (test runner)，它会在真实的浏览器中运行应用的测试。它会在真实浏览器中执行使用任何测试框架编写的测试用例。Karma 最初是为配合 Angular 1 使用而编写的。
  </p>
</section>

<section id="module">
  <a href="#module">
    <h3>模块 (Module)</h3>
  </a>
  <p>
    JavaScript 中的模块是小型、独立、可复用的代码片段，它们之间相互隔离，并且与全局作用域隔离。
  </p>
</section>

<section id="monorepo">
  <a href="#monorepo">
    <h3>单仓库 (Monorepo)</h3>
  </a>
  <p>
    <strong>单仓库 (monorepo)</strong> 是一个包含多个项目的单一 Git 仓库。其优点包括组织更简单、共享工具和依赖项，以及与团队成员协作更顺畅。
  </p>
</section>

<section id="livereload">
  <a href="#livereload">
    <h3>实时重载 (Live Reload)</h3>
  </a>
  <p>
    <strong>实时重载 (Live Reload)</strong> 是一种工具，当检测到你的应用发生变化时，它会自动重新加载浏览器或 <a href="../core-concepts/webview">Web 视图</a>。在某些情况下，它可以替换应用的某些部分，而无需重新加载整个窗口。请参阅 <a href="../cli/livereload">Live Reload 文档</a>了解更多信息。
  </p>
</section>

<section id="node">
  <a href="#node">
    <h3>Node</h3>
  </a>
  <p>
    <a href="https://nodejs.org/" target="_blank">Node</a> 是一个允许在服务器端编写 JavaScript 的运行时环境。除了用于 Web 服务，Node 也常用于构建开发工具，例如 <a href="#cli">Ionic CLI</a>。
  </p>
</section>

<section id="npm">
  <a href="#npm">
    <h3>npm</h3>
  </a>
  <p>
    <a href="https://www.npmjs.com/" target="_blank">npm</a> 是 <a href="#node">node</a> 的包管理器。它允许开发者安装、分享和打包 node 模块。Ionic 及其许多依赖项都可以通过 npm 安装。
  </p>
</section>

<section id="observable">
  <a href="#observable">
    <h3>Observable</h3>
  </a>
  <p>
    Observable 是一个发出事件（或通知）的对象。Observer 是一个监听这些事件，并在接收到事件时执行某些操作的对象。它们共同构成了一种可用于异步编程的模式。
  </p>
</section>

<section id="package-id">
  <a href="#package-id">
    <h3>包 ID (Package ID)</h3>
  </a>
  <p>
    苹果公司称之为 <strong>Bundle ID</strong>，Android 称之为 <strong>Application ID</strong>，<strong>包 ID (Package ID)</strong> 用于标识发布到 App Store/Play Store 的应用。它是一个采用 <a href="https://en.wikipedia.org/wiki/Reverse_domain_name_notation" target="_blank">反向域名表示法</a> 格式的字符串。
  </p>
</section>

<section id="polyfill">
  <a href="#polyfill">
    <h3>Polyfill</h3>
  </a>
  <p>
    <a href="https://remysharp.com/2010/10/08/what-is-a-polyfill" target="_blank">Polyfill</a> 是一段代码，用于向浏览器添加功能并标准化浏览器间的差异。这类似于 <a href="#shim">shim</a>，但不同之处在于 shim 有自己的 API，而 polyfill 则允许使用浏览器预期的 API。
  </p>
</section>

<section id="protractor">
  <a href="#protractor">
    <h3>Protractor</h3>
  </a>
  <p>
    <a href="https://angular.github.io/protractor/#/" target="_blank">Protractor</a> 是一个由 Angular 团队为 Angular 编写和维护的测试框架。Protractor 可以与 Karma 等测试运行器配合使用，进行端到端测试。测试运行器允许你快速、自动化地验证代码质量。
  </p>
</section>

<section id="sass">
  <a href="#sass">
    <h3>Sass</h3>
  </a>
  <p>
    Sass 是一种编译为 CSS 的样式表语言，被 Ionic 所使用。Sass 类似于 CSS，但具有额外的功能，例如<a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variables_" target="_blank">变量 (variables)</a>、<a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins" target="_blank">混合宏 (mixins)</a> 和 <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_10" target="_blank">循环 (loops)</a>。
  </p>
</section>

<section id="scoped">
  <a href="#scoped">
    <h3>作用域封装 (Scoped Encapsulation)</h3>
  </a>
  <p>
    使用作用域封装的组件会在运行时通过为每个样式附加一个 data 属性来自动限定其 CSS 的作用域。在 CSS 中覆盖作用域选择器需要<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity" target="_blank">更高特异性 (higher specificity)</a> 的选择器。也可以使用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_variables" target="_blank">CSS 自定义属性 (CSS Custom Properties)</a> 来为作用域组件设置样式。
  </p>
</section>

<section id="shadow">
  <a href="#shadow">
    <h3>Shadow DOM</h3>
  </a>
  <p>
    <a href="https://developers.google.com/web/fundamentals/web-components/shadowdom" target="_blank">Shadow DOM</a> 是浏览器原生提供的用于封装组件的 DOM 和样式的解决方案。它保护组件不受其周围环境的影响。要外部设置 Shadow DOM 组件内部元素的样式，你必须使用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_variables" target="_blank">CSS 自定义属性</a> 或 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/::part" target="_blank">CSS Shadow Parts</a>。
  </p>
</section>

<section id="shim">
  <a href="#shim">
    <h3>Shim</h3>
  </a>
  <p>
    Shim 是一段用于在不同浏览器之间标准化 API 的代码。Shim 可以拥有自己的 API，向最终用户隐藏特定于浏览器的实现细节。
  </p>
</section>

<section id="transpiler">
  <a href="#transpiler">
    <h3>转译器 (Transpiler)</h3>
  </a>
  <p>
    转译是在代码执行之前，将其从一种语言转换为另一种语言的过程。通常，转译器会将一种高级语言转换为另一种高级语言。在 Ionic Framework 中，最常见的<em>转译</em>类型是将 <a href="#es2015-es6">ES2015/ES6</a> (<a href="#typescript">TypeScript</a>) 转换为 <a href="#es5">ES5</a> (传统 JavaScript)。
  </p>
</section>

<section id="typescript">
  <a href="#typescript">
    <h3>TypeScript</h3>
  </a>
  <p>
    <a href="http://www.typescriptlang.org" target="_blank">TypeScript</a> 是 JavaScript 的一个超集，这意味着它在提供 JavaScript 的同时，还提供了许多额外的特性，例如<a href="http://www.typescriptlang.org/Handbook#basic-types" target="_blank">类型声明 (type declarations)</a> 和<a href="http://www.typescriptlang.org/Handbook#interfaces" target="_blank">接口 (interfaces)</a>。尽管 Ionic 本身是使用 TypeScript 构建的，但使用 TypeScript 来构建 Ionic 应用完全是可选的。
  </p>
</section>

<section id="unit-tests">
  <a href="#unit-tests">
    <h3>单元测试 (Unit Tests)</h3>
  </a>
  <p>
    单元测试是一种测试小段代码以验证其行为是否符合预期的方法。单元测试框架包括 Jasmine、Mocha、QUnit 等等。
  </p>
</section>

<section id="webpack">
  <a href="#webpack">
    <h3>Webpack</h3>
  </a>
  <p>
    <a href="https://webpack.github.io/" target="_blank">Webpack</a> 将 JavaScript 模块和其他资源打包在一起。它可以用于创建单个或多个“代码块 (chunks)”，这些代码块仅在需要时才被加载。Webpack 可用于将许多文件和依赖项打包成一个文件或其他类型。
  </p>
</section>

<section id="web-standards">
  <a href="#web-standards">
    <h3>Web 标准 (Web Standards)</h3>
  </a>
  <p>
    <a href="https://www.w3.org/" target="_blank">万维网联盟 (W3C)</a> 是 Web 领域的标准组织。行业领导者和公众共同合作，制定<a href="https://www.w3.org/standards/" target="_blank">Web 标准</a>，这是一组定义 Web 平台的协议、规范和技术。
  </p>
</section>

<section id="xcode">
  <a href="#xcode">
    <h3>Xcode</h3>
  </a>
  <p>
    <a href="https://developer.apple.com/xcode/" target="_blank">Xcode</a> 是 Apple 的集成开发环境 (IDE)，用于在 Apple 操作系统 (macOS, iOS, watchOS 和 tvOS) 上进行软件开发，并提供对其他语言和平台的扩展支持。
  </p>
</section>

</div>