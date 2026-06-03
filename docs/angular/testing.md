---
title: 测试
---

<head>
  <title>Ionic 应用组件的 Angular 单元测试和端到端测试</title>
  <meta
    name="description"
    content="使用 Ionic 创建的 Angular 应用会自动设置为单元测试和端到端测试。阅读以了解更多关于 Ionic 组件测试工具的信息。"
  />
</head>

当使用 Ionic CLI 生成 `@ionic/angular` 应用时，它会自动设置为应用的单元测试和端到端测试。这与 Angular CLI 使用的设置相同。有关测试 Angular 应用的详细信息，请参考 <a href="https://angular.io/guide/testing" target="_blank">Angular 测试指南</a>。

## 测试原则

在测试应用时，最好记住测试可以显示系统中是否存在缺陷。然而，无法证明任何非平凡系统完全无缺陷。因此，测试的目的不是验证代码正确，而是发现代码中的问题。这是一个微妙但重要的区别。

如果我们旨在证明代码是正确的，我们更可能只走代码的"快乐路径"。如果我们旨在发现问题，我们更可能更全面地执行代码并找到隐藏在那里的 bug。

还最好从项目一开始就开始测试应用。这样可以在过程中尽早发现缺陷，此时修复它们更容易。这也允许在向系统添加新功能时自信地重构代码。

## 单元测试

单元测试在系统其他部分隔离的情况下测试单个代码单元（组件、页面、服务、管道等）。通过注入模拟对象代替代码的依赖项来实现隔离。模拟对象允许测试对依赖项的输出进行细粒度控制。模拟还允许测试确定哪些依赖项已被调用以及传递了什么参数。

编写良好的单元测试通过 `describe()` 回调来描述代码单元及其包含的功能。代码单元及其功能的需求通过 `it()` 回调进行测试。当阅读 `describe()` 和 `it()` 回调的描述时，它们应作为一个短语有意义。当嵌套的 `describe()` 和最终的 `it()` 的描述连接在一起时，它们形成一个完整描述测试用例的句子。

由于单元测试在隔离中执行代码，它们快速、稳健，并允许实现高代码覆盖率。

### 使用模拟

单元测试在隔离中执行代码模块。为方便起见，我们建议使用 Jasmine (https://jasmine.github.io/)。Jasmine 创建模拟对象（Jasmine 称之为"spies"）来在测试时代替依赖项。当使用模拟对象时，测试可以控制对该依赖项的调用所返回的值，使当前测试独立于对依赖项的更改。这也使测试设置更简单，使测试只关注被测试模块中的代码。

使用模拟还允许测试查询模拟对象，通过 `toHaveBeenCalled*` 函数集确定它是否被调用以及如何被调用。测试应尽可能具体地使用这些函数，在测试方法被调用时优先使用 `toHaveBeenCalledTimes` 而不是 `toHaveBeenCalled`。即 `expect(mock.foo).toHaveBeenCalledTimes(1)` 优于 `expect(mock.foo).toHaveBeenCalled()`。在测试某物未被调用时应遵循相反的建议（`expect(mock.foo).not.toHaveBeenCalled()`）。

在 Jasmine 中创建模拟对象有两种常见方式。可以使用 `jasmine.createSpy` 和 `jasmine.createSpyObj` 从头构建模拟对象，或者可以使用 `spyOn()` 和 `spyOnProperty()` 将 spies 安装到现有对象上。

#### 使用 `jasmine.createSpy` 和 `jasmine.createSpyObj`

`jasmine.createSpyObj` 从头创建一个完整的模拟对象，在创建时定义一组模拟方法。这很有用，因为它非常简单。无需构建或注入任何内容到测试中。使用此函数的缺点是它允许创建可能与真实对象不匹配的对象。

`jasmine.createSpy` 类似，但它创建一个独立的模拟函数。

#### 使用 `spyOn()` 和 `spyOnProperty()`

`spyOn()` 将 spy 安装到现有对象上。使用此技术的优点是，如果尝试 spy 的对象上不存在的方法，则会引发异常。这防止了测试模拟不存在的方法。缺点是测试需要一个完整形成的对象，这可能会增加所需的测试设置量。

`spyOnProperty()` 类似，区别在于它 spy 的是属性而不是方法。

### 通用测试结构

单元测试包含在 `spec` 文件中，每个实体（组件、页面、服务、管道等）对应一个 `spec` 文件。`spec` 文件与它们测试的源代码并存且同名。例如，如果项目有一个名为 WeatherService 的服务，其代码位于 `weather.service.ts` 文件中，测试位于 `weather.service.spec.ts` 文件中。这两个文件位于同一文件夹中。

`spec` 文件本身包含一个 `describe` 调用来定义整体测试。其内部嵌套定义了主要功能区域的其他 `describe` 调用。每个 `describe` 调用可以包含设置和拆卸代码（通常通过 `beforeEach` 和 `afterEach` 调用处理）、更多形成功能层次分解的 `describe` 调用，以及定义单个测试用例的 `it` 调用。

`describe` 和 `it` 调用还包含描述性文本标签。在编写良好的测试中，`describe` 和 `it` 调用与其标签结合形成恰当的短语，每个测试用例的完整标签（通过组合 `describe` 和 `it` 标签形成）创建一个完整的句子。

例如：

```tsx
describe('Calculation', () => {
  describe('divide', () => {
    it('calculates 4 / 2 properly' () => {});
    it('cowardly refuses to divide by zero' () => {});
    ...
  });

  describe('multiply', () => {
    ...
  });
});
```

外层的 `describe` 调用说明正在测试 `Calculation` 服务，内层的 `describe` 调用说明具体测试什么功能，`it` 调用说明测试用例是什么。运行时，每个测试用例的完整标签是一个有意义的句子（Calculation divide cowardly refuses to divide by zero）。

### 页面和组件

页面就是 Angular 组件。因此，页面和组件都使用 <a href="https://angular.io/guide/testing#component-test-basics">Angular 的组件测试</a>指南进行测试。

由于页面和组件包含 TypeScript 代码和 HTML 模板标记，因此可以执行组件类测试和组件 DOM 测试。当创建页面时，生成的模板测试如下所示：

```tsx
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPage } from './tabs.page';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

在执行组件类测试时，通过 `component = fixture.componentInstance;` 定义的组件对象访问组件。这是组件类的一个实例。在执行 DOM 测试时，使用 `fixture.nativeElement` 属性。这是组件的实际 `HTMLElement`，允许测试使用标准 HTML API 方法（如 `HTMLElement.querySelector`）来检查 DOM。

## 服务

服务通常分为两大类：执行计算和其他操作的实用程序服务，以及主要执行 HTTP 操作和数据操作的数据服务。

### 基本服务测试

测试大多数服务的建议方法是实例化服务并手动为其任何依赖项注入模拟。这样，代码可以在隔离中测试。

假设有一个服务，其方法接受一个计时卡数组并计算净工资。还假设税务计算通过当前服务依赖的另一个服务处理。这个工资服务可以这样测试：

```tsx
import { PayrollService } from './payroll.service';

describe('PayrollService', () => {
  let service: PayrollService;
  let taxServiceSpy;

   beforeEach(() => {
     taxServiceSpy = jasmine.createSpyObj('TaxService', {
       federalIncomeTax: 0,
       stateIncomeTax: 0,
       socialSecurity: 0,
       medicare: 0
     });
     service = new PayrollService(taxServiceSpy);
   });

   describe('net pay calculations', () => {
     ...
   });
});
```

这允许测试通过模拟设置（如 `taxServiceSpy.federalIncomeTax.and.returnValue(73.24)`）控制各种税务计算返回的值。这使得"净工资"测试独立于税务计算逻辑。当税法改变时，只需要更改与税务服务相关的代码和测试。净工资的测试可以继续按原样运行，因为这些测试不关心税是如何计算的，只关心值是否正确应用。

通过 `ionic g service name` 生成服务时使用的脚手架使用 Angular 的测试工具并设置一个测试模块。这样做并不是严格必需的。但可以保留该代码，允许手动构建服务或如下方式注入：

```tsx
import { TestBed, inject } from '@angular/core/testing';

import { PayrollService } from './payroll.service';
import { TaxService } from './tax.service';

describe('PayrolService', () => {
  let taxServiceSpy;

  beforeEach(() => {
    taxServiceSpy = jasmine.createSpyObj('TaxService', {
      federalIncomeTax: 0,
      stateIncomeTax: 0,
      socialSecurity: 0,
      medicare: 0,
    });
    TestBed.configureTestingModule({
      providers: [PayrollService, { provide: TaxService, useValue: taxServiceSpy }],
    });
  });

  it('does some test where it is injected', inject([PayrollService], (service: PayrollService) => {
    expect(service).toBeTruthy();
  }));

  it('does some test where it is manually built', () => {
    const service = new PayrollService(taxServiceSpy);
    expect(service).toBeTruthy();
  });
});
```

#### 测试 HTTP 数据服务

大多数执行 HTTP 操作的服务将使用 Angular 的 HttpClient 服务来执行这些操作。对于此类测试，建议使用 Angular 的 `HttpClientTestingModule`。有关此模块的详细文档，请参阅 Angular 的 <a href="https://angular.io/guide/http#testing-http-requests" target="_blank">Angular 测试 HTTP 请求</a>指南。

此类测试的基本设置如下：

```tsx
import { HttpBackend, HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { IssTrackingDataService } from './iss-tracking-data.service';

describe('IssTrackingDataService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let issTrackingDataService: IssTrackingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IssTrackingDataService],
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    issTrackingDataService = new IssTrackingDataService(httpClient);
  });

  it('exists', inject([IssTrackingDataService], (service: IssTrackingDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('location', () => {
    it('gets the location of the ISS now', () => {
      issTrackingDataService.location().subscribe((x) => {
        expect(x).toEqual({ longitude: -138.1719, latitude: 44.4423 });
      });
      const req = httpTestingController.expectOne('http://api.open-notify.org/iss-now.json');
      expect(req.request.method).toEqual('GET');
      req.flush({
        iss_position: { longitude: '-138.1719', latitude: '44.4423' },
        timestamp: 1525950644,
        message: 'success',
      });
      httpTestingController.verify();
    });
  });
});
```

### 管道

管道就像一个具有特定定义接口的服务。它是一个包含一个公共方法 `transform` 的类，该方法处理输入值（和其他可选参数）以创建在页面上渲染的输出。要测试管道：实例化管道，调用 transform 方法，并验证结果。

举个简单的例子，让我们看一个接受 `Person` 对象并格式化名称的管道。为简单起见，假设一个 `Person` 由 `id`、`firstName`、`lastName` 和 `middleInitial` 组成。管道的要求是将名称打印为"Last, First M."，并处理名字、姓氏或中间名不存在的情况。这样的测试可能如下：

```tsx
import { NamePipe } from './name.pipe';

import { Person } from '../../models/person';

describe('NamePipe', () => {
  let pipe: NamePipe;
  let testPerson: Person;

  beforeEach(() => {
    pipe = new NamePipe();
    testPerson = {
      id: 42,
      firstName: 'Douglas',
      lastName: 'Adams',
      middleInitial: 'N',
    };
  });

  it('exists', () => {
    expect(pipe).toBeTruthy();
  });

  it('formats a full name properly', () => {
    expect(pipe.transform(testPerson)).toBeEqual('Adams, Douglas N.');
  });

  it('handles having no middle initial', () => {
    delete testPerson.middleInitial;
    expect(pipe.transform(testPerson)).toBeEqual('Adams, Douglas');
  });

  it('handles having no first name', () => {
    delete testPerson.firstName;
    expect(pipe.transform(testPerson)).toBeEqual('Adams N.');
  });

  it('handles having no last name', () => {
    delete testPerson.lastName;
    expect(pipe.transform(testPerson)).toBeEqual('Douglas N.');
  });
});
```

在使用管道的组件和页面中通过 DOM 测试来练习管道也是有益的。

## 端到端测试

端到端测试用于验证应用作为整体是否正常工作，通常包括连接到实时数据。单元测试关注隔离的代码单元，允许对应用逻辑进行低级测试，而端到端测试则关注各种用户故事或使用场景，提供对整个应用中数据流动的高级测试。单元测试试图发现应用逻辑的问题，而端到端测试试图发现当这些单独单元一起使用时出现的问题。端到端测试发现应用整体架构中的问题。

由于端到端测试执行用户故事并覆盖整个应用而非单个代码模块，端到端测试存在于项目中主应用代码之外的独立应用中。大多数端到端测试通过自动化常见的用户与应用交互并检查 DOM 来确定这些交互的结果。

### 测试结构

当生成 `@ionic/angular` 应用时，会在 `e2e` 文件夹中生成一个默认的端到端测试应用。此应用使用 <a href="">Protractor</a> 来控制浏览器，使用 <a href="">Jasmine</a> 来结构和执行测试。该应用最初由四个文件组成：

- `protractor.conf.js` - Protractor 配置文件
- `tsconfig.e2e.json` - 测试应用的特定 TypeScript 配置
- `src/app.po.ts` - 包含导航应用、查询 DOM 元素和操作页面上元素的方法的页面对象
- `src/app.e2e-spec.ts` - 测试脚本

#### 页面对象

端到端测试通过自动化常见的用户与应用交互、等待应用响应以及检查 DOM 来确定交互结果。这涉及大量的 DOM 操作和检查。如果都手动完成，测试将非常脆弱且难以阅读和维护。

页面对象将单个页面的 HTML 封装在 TypeScript 类中，提供测试脚本用于与应用交互的 API。将 DOM 操作逻辑封装在页面对象中使测试更易读、更容易理解，降低了测试的维护成本。创建精心设计的页面对象是创建高质量和可维护的端到端测试的关键。

##### 基础页面对象

许多测试依赖于诸如等待页面可见、在输入框中输入文本和点击按钮等操作。用于执行这些操作的方法保持一致，只有用于获取适当 DOM 元素的 CSS 选择器会变化。因此，将此逻辑抽象为可由其他页面对象使用的基础类是有意义的。

以下是一个实现所有页面对象需要支持的几个基本方法的示例。

```tsx
import { browser, by, element, ExpectedConditions } from 'protractor';

export class PageObjectBase {
  private path: string;
  protected tag: string;

  constructor(tag: string, path: string) {
    this.tag = tag;
    this.path = path;
  }

  load() {
    return browser.get(this.path);
  }

  rootElement() {
    return element(by.css(this.tag));
  }

  waitUntilInvisible() {
    browser.wait(ExpectedConditions.invisibilityOf(this.rootElement()), 3000);
  }

  waitUntilPresent() {
    browser.wait(ExpectedConditions.presenceOf(this.rootElement()), 3000);
  }

  waitUntilNotPresent() {
    browser.wait(ExpectedConditions.not(ExpectedConditions.presenceOf(this.rootElement())), 3000);
  }

  waitUntilVisible() {
    browser.wait(ExpectedConditions.visibilityOf(this.rootElement()), 3000);
  }

  getTitle() {
    return element(by.css(`${this.tag} ion-title`)).getText();
  }

  protected enterInputText(sel: string, text: string) {
    const el = element(by.css(`${this.tag} ${sel}`));
    const inp = el.element(by.css('input'));
    inp.sendKeys(text);
  }

  protected enterTextareaText(sel: string, text: string) {
    const el = element(by.css(`${this.tag} ${sel}`));
    const inp = el.element(by.css('textarea'));
    inp.sendKeys(text);
  }

  protected clickButton(sel: string) {
    const el = element(by.css(`${this.tag} ${sel}`));
    browser.wait(ExpectedConditions.elementToBeClickable(el));
    el.click();
  }
}
```

##### 逐页抽象

应用中的每个页面都有自己的页面对象类，用于抽象该页面上的元素。如果使用了基础页面对象类，创建页面对象主要涉及为特定于该页面的元素创建自定义方法。通常，这些自定义元素利用基类中的方法来执行所需的工作。

以下是一个简单但典型的登录页面的页面对象示例。请注意，许多方法（如 `enterEMail()`）调用基类中执行大部分工作的方法。

```tsx
import { browser, by, element, ExpectedConditions } from 'protractor';
import { PageObjectBase } from './base.po';

export class LoginPage extends PageObjectBase {
  constructor() {
    super('app-login', '/login');
  }

  waitForError() {
    browser.wait(ExpectedConditions.presenceOf(element(by.css('.error'))), 3000);
  }

  getErrorMessage() {
    return element(by.css('.error')).getText();
  }

  enterEMail(email: string) {
    this.enterInputText('#email-input', email);
  }

  enterPassword(password: string) {
    this.enterInputText('#password-input', password);
  }

  clickSignIn() {
    this.clickButton('#signin-button');
  }
}
```

#### 测试脚本

与单元测试类似，端到端测试脚本由嵌套的 `describe()` 和 `it()` 函数组成。在端到端测试中，`describe()` 函数通常表示特定场景，而 `it()` 函数表示在该场景中执行操作时应用应表现出的特定行为。

也与单元测试类似，`describe()` 和 `it()` 函数中使用的标签在单独阅读"describe"或"it"时以及连接在一起形成完整测试用例时都应有意义。

以下是一个示例端到端测试脚本，执行一些典型的登录场景。

```tsx
import { AppPage } from '../page-objects/pages/app.po';
import { AboutPage } from '../page-objects/pages/about.po';
import { CustomersPage } from '../page-objects/pages/customers.po';
import { LoginPage } from '../page-objects/pages/login.po';
import { MenuPage } from '../page-objects/pages/menu.po';
import { TasksPage } from '../page-objects/pages/tasks.po';

describe('Login', () => {
  const about = new AboutPage();
  const app = new AppPage();
  const customers = new CustomersPage();
  const login = new LoginPage();
  const menu = new MenuPage();
  const tasks = new TasksPage();

  beforeEach(() => {
    app.load();
  });

  describe('before logged in', () => {
    it('displays the login screen', () => {
      expect(login.rootElement().isDisplayed()).toEqual(true);
    });

    it('allows in-app navigation to about', () => {
      menu.clickAbout();
      about.waitUntilVisible();
      login.waitUntilInvisible();
    });

    it('does not allow in-app navigation to tasks', () => {
      menu.clickTasks();
      app.waitForPageNavigation();
      expect(login.rootElement().isDisplayed()).toEqual(true);
    });

    it('does not allow in-app navigation to customers', () => {
      menu.clickCustomers();
      app.waitForPageNavigation();
      expect(login.rootElement().isDisplayed()).toEqual(true);
    });

    it('displays an error message if the login fails', () => {
      login.enterEMail('test@test.com');
      login.enterPassword('bogus');
      login.clickSignIn();
      login.waitForError();
      expect(login.getErrorMessage()).toEqual('The password is invalid or the user does not have a password.');
    });

    it('navigates to the tasks page if the login succeeds', () => {
      login.enterEMail('test@test.com');
      login.enterPassword('testtest');
      login.clickSignIn();
      tasks.waitUntilVisible();
    });
  });

  describe('once logged in', () => {
    beforeEach(() => {
      tasks.waitUntilVisible();
    });

    it('allows navigation to the customers page', () => {
      menu.clickCustomers();
      customers.waitUntilVisible();
      tasks.waitUntilInvisible();
    });

    it('allows navigation to the about page', () => {
      menu.clickAbout();
      about.waitUntilVisible();
      tasks.waitUntilInvisible();
    });

    it('allows navigation back to the tasks page', () => {
      menu.clickAbout();
      tasks.waitUntilInvisible();
      menu.clickTasks();
      tasks.waitUntilVisible();
    });
  });
});
```

### 配置

默认配置使用与开发相同的 `environment.ts` 文件。为了更好地控制端到端测试使用的数据，通常有益的做法是创建一个特定的测试环境并在测试中使用该环境。本节展示了一种创建此配置的可能方法。

#### 测试环境

设置测试环境涉及创建一个使用专用测试后端的新环境文件、更新 `angular.json` 文件以使用该环境，以及修改 `package.json` 中的 `e2e` 脚本以指定 `test` 环境。

##### 创建 `environment.e2e.ts` 文件

Angular 的 `environment.ts` 和 `environment.prod.ts` 文件通常用于存储诸如应用后端数据服务的基础 URL 等信息。创建一个 `environment.e2e.ts`，提供相同的信息，但连接到专用于测试的后端服务，而非开发或生产后端服务。示例如下：

```tsx
export const environment = {
  production: false,
  databaseURL: 'https://e2e-test-api.my-great-app.com',
  projectId: 'my-great-app-e2e',
};
```

##### 修改 `angular.json` 文件

需要修改 `angular.json` 文件以使用此文件。这是一个分层过程。按照下面列出的 XPaths 添加所需的配置。

在 `/projects/app/architect/build/configurations` 添加一个名为 `test` 的配置，执行文件替换：

```json
"test": {
  "fileReplacements": [
    {
      "replace": "src/environments/environment.ts",
      "with": "src/environments/environment.e2e.ts"
    }
  ]
}
```

在 `/projects/app/architect/serve/configurations` 添加一个名为 `test` 的配置，将浏览器目标指向上面定义的 `test` 构建配置。

```json
"test": {
  "browserTarget": "app:build:test"
}
```

在 `/projects/app-e2e/architect/e2e/configurations` 添加一个名为 `test` 的配置，将开发服务器目标指向上面定义的 `test` 服务配置。

```json
"test": {
  "devServerTarget": "app:serve:test"
}
```

##### 修改 `package.json` 文件

修改 `package.json` 文件，使 `npm run e2e` 使用 `test` 配置。

```json
"scripts": {
  "e2e": "ng e2e --configuration=test",
  "lint": "ng lint",
  "ng": "ng",
  "start": "ng serve",
  "test": "ng test",
  "test:dev": "ng test --browsers=ChromeHeadlessCI",
  "test:ci": "ng test --no-watch --browsers=ChromeHeadlessCI"
},
```

#### 测试清理

如果端到端测试以任何方式修改了数据，在测试完成后将数据重置为已知状态是有帮助的。一种方法是：

1. 创建一个执行清理的端点。
2. 在 `protractor.conf.js` 文件导出的 `config` 对象中添加一个 `onCleanUp()` 函数。

示例如下：

```javascript
onCleanUp() {
  const axios = require('axios');
  return axios
    .post(
      'https://e2e-test-api.my-great-app.com/purgeDatabase',
      {}
    )
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err));
}
```
