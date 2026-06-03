---
title: 测试
sidebar_label: 测试
---

# 测试

当使用 Ionic CLI 生成 `@ionic/angular` 应用时，它会自动为应用设置单元测试和端到端测试。这与 Angular CLI 使用的设置相同。有关测试 Angular 应用的详细信息，请参阅 <a href="https://angular.io/guide/testing" target="_blank">Angular 测试指南</a>。

## 测试原则

测试应用时，最好记住测试可以显示系统中是否存在缺陷。然而，要证明任何非平凡系统完全没有缺陷是不可能的。因此，测试的目标不是验证代码是否正确，而是发现代码中的问题。这是一个微妙但重要的区别。

如果我们试图证明代码是正确的，我们更可能只沿着代码的"快乐路径"进行测试。如果我们试图发现问题，我们更可能更全面地执行代码，找到潜伏在那里的错误。

最好从一开始就开始测试应用。这样可以在过程早期发现缺陷，此时它们更容易修复。这也允许在向系统添加新功能时，有信心地进行代码重构。

## 单元测试

单元测试在隔离环境中测试单个代码单元（组件、页面、服务、管道等），与系统的其他部分隔离。隔离是通过注入模拟对象来代替代码的依赖项实现的。模拟对象允许测试对依赖项的输出进行细粒度控制。模拟还允许测试确定哪些依赖项被调用以及传递了什么参数。

编写良好的单元测试的结构是：通过 `describe()` 回调来描述代码单元及其包含的功能。通过 `it()` 回调来测试代码单元及其功能的需求。当 `describe()` 和 `it()` 回调的描述被阅读时，它们构成一个有意义的短语。当嵌套的 `describe()` 和最终的 `it()` 的描述被连接起来时，它们形成一个完整描述测试用例的句子。

由于单元测试在隔离中执行代码，因此它们快速、健壮，并允许实现高代码覆盖率。

### 使用模拟

单元测试在隔离中测试代码模块。为方便起见，我们建议使用 Jasmine (https://jasmine.github.io/)。Jasmine 创建模拟对象（Jasmine 称之为"spies"）来在测试时替代依赖项。使用模拟对象时，测试可以控制对该依赖项的调用返回的值，使当前测试不受对依赖项的更改影响。这也简化了测试设置，使测试只关注被测模块中的代码。

使用模拟还允许测试查询模拟，以确定它是否被调用以及如何被调用，通过 `toHaveBeenCalled*` 系列函数实现。测试应尽可能具体地使用这些函数，在测试方法是否被调用时，优先使用 `toHaveBeenCalledTimes` 而不是 `toHaveBeenCalled`。也就是说 `expect(mock.foo).toHaveBeenCalledTimes(1)` 优于 `expect(mock.foo).toHaveBeenCalled()`。在测试某些内容不应该被调用时，则应遵循相反的建议（`expect(mock.foo).not.toHaveBeenCalled()`）。

在 Jasmine 中创建模拟对象有两种常见方式。可以使用 `jasmine.createSpy` 和 `jasmine.createSpyObj` 从头开始构建模拟对象，也可以使用 `spyOn()` 和 `spyOnProperty()` 将 spies 安装到现有对象上。

#### 使用 `jasmine.createSpy` 和 `jasmine.createSpyObj`

`jasmine.createSpyObj` 从头开始创建一个完整的模拟对象，在创建时定义一组模拟方法。这很有用，因为它非常简单。无需构造或注入任何内容到测试中。使用此函数的缺点是它允许创建可能与实际对象不匹配的对象。

`jasmine.createSpy` 类似，但它创建一个独立的模拟函数。

#### 使用 `spyOn()` 和 `spyOnProperty()`

`spyOn()` 将 spy 安装到现有对象上。使用此技术的优点是，如果尝试 spy 对象上不存在的方法，则会引发异常。这防止了测试模拟不存在的方法。缺点是该测试需要从一个完全成形的对象开始，这可能会增加所需的测试设置量。

`spyOnProperty()` 类似，不同之处在于它 spy 的是属性而不是方法。

### 通用测试结构

单元测试包含在 `spec` 文件中，每个实体（组件、页面、服务、管道等）对应一个 `spec` 文件。`spec` 文件与它们所测试的源文件并列存放，并以源文件命名。例如，如果项目有一个名为 WeatherService 的服务，其代码位于 `weather.service.ts` 文件中，测试代码则位于 `weather.service.spec.ts` 文件中。这两个文件位于同一文件夹中。

`spec` 文件本身包含一个定义整体测试的 `describe` 调用。在其内部是定义主要功能区域的其他 `describe` 调用。每个 `describe` 调用可以包含设置和拆卸代码（通常通过 `beforeEach` 和 `afterEach` 调用处理）、更多形成功能层次结构的 `describe` 调用，以及定义单个测试用例的 `it` 调用。

`describe` 和 `it` 调用还包含一个描述性文本标签。在编写良好的测试中，`describe` 和 `it` 调用与其标签组合形成恰当的短语，每个测试用例的完整标签（由 `describe` 和 `it` 标签组合而成）形成一个完整的句子。

例如：

```tsx
describe('Calculation', () => {
  describe('divide', () => {
    it('正确计算 4 / 2', () => {});
    it('拒绝除以零', () => {});
    ...
  });

  describe('multiply', () => {
    ...
  });
});
```

外层的 `describe` 调用声明正在测试 `Calculation` 服务，内层的 `describe` 调用声明正在测试的具体功能，`it` 调用声明测试用例。运行时，每个测试用例的完整标签是一个有意义的句子（Calculation 拒绝除以零）。

### 页面和组件

页面就是 Angular 组件。因此，页面和组件都使用 <a href="https://angular.io/guide/testing#component-test-basics">Angular 的组件测试</a>指南进行测试。

由于页面和组件包含 TypeScript 代码和 HTML 模板标记，因此可以同时进行组件类测试和组件 DOM 测试。创建页面时，生成的模板测试如下所示：

```tsx
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPage } from './tabs.page';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TabsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('应该被创建', () => {
    expect(component).toBeTruthy();
  });
});
```

在进行组件类测试时，通过 `component = fixture.componentInstance;` 定义的组件对象来访问组件。这是组件类的一个实例。在进行 DOM 测试时，使用 `fixture.nativeElement` 属性。这是组件的实际 `HTMLElement`，允许测试使用标准的 HTML API 方法（如 `HTMLElement.querySelector`）来检查 DOM。

## 服务

服务通常分为两大类：执行计算和其他操作的实用服务，以及主要执行 HTTP 操作和数据操作的数据服务。

### 基础服务测试

建议的测试大多数服务的方法是实例化服务，并手动为该服务所依赖的任何依赖项注入模拟。这样，代码可以在隔离环境中进行测试。

假设有一个服务，其方法接受一个工时卡数组并计算净工资。再假设税务计算由当前服务所依赖的另一个服务处理。这个工资服务可以这样测试：

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

   describe('净工资计算', () => {
     ...
   });
});
```

这允许测试通过模拟设置（如 `taxServiceSpy.federalIncomeTax.and.returnValue(73.24)`）来控制各项税务计算返回的值。这使得"净工资"测试独立于税务计算逻辑。当税法变更时，只需要更改税务服务相关的代码和测试。净工资的测试可以继续按原样运行，因为这些测试不关心税款是如何计算的，只关心数值是否正确应用。

通过 `ionic g service name` 生成服务时使用的脚手架会使用 Angular 的测试工具并设置一个测试模块。这并非严格必要。但是，可以保留这些代码，以便手动构建服务或像这样注入：

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

  it('执行注入测试', inject([PayrollService], (service: PayrollService) => {
    expect(service).toBeTruthy();
  }));

  it('执行手动构建测试', () => {
    const service = new PayrollService(taxServiceSpy);
    expect(service).toBeTruthy();
  });
});
```

#### 测试 HTTP 数据服务

大多数执行 HTTP 操作的服务会使用 Angular 的 HttpClient 服务来执行这些操作。对于此类测试，建议使用 Angular 的 `HttpClientTestingModule`。有关此模块的详细文档，请参阅 Angular 的 <a href="https://angular.io/guide/http#testing-http-requests" target="_blank">Angular 测试 HTTP 请求</a>指南。

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

  it('存在检查', inject([IssTrackingDataService], (service: IssTrackingDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('location', () => {
    it('获取 ISS 当前位置', () => {
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

管道就像一个具有特定定义接口的服务。它是一个包含一个公共方法 `transform` 的类，该方法操作输入值（和其他可选参数）以创建在页面上渲染的输出。测试管道的方法：实例化管道，调用 transform 方法，并验证结果。

作为一个简单示例，让我们看一个接受 `Person` 对象并格式化名称的管道。为简单起见，假设 `Person` 由 `id`、`firstName`、`lastName` 和 `middleInitial` 组成。管道的要求是打印为"姓, 名 M."格式，并处理名字、姓氏或中间名不存在的情况。这样的测试可能如下所示：

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

  it('存在检查', () => {
    expect(pipe).toBeTruthy();
  });

  it('正确格式化完整名称', () => {
    expect(pipe.transform(testPerson)).toBeEqual('Adams, Douglas N.');
  });

  it('处理没有中间名的情况', () => {
    delete testPerson.middleInitial;
    expect(pipe.transform(testPerson)).toBeEqual('Adams, Douglas');
  });

  it('处理没有名字的情况', () => {
    delete testPerson.firstName;
    expect(pipe.transform(testPerson)).toBeEqual('Adams N.');
  });

  it('处理没有姓氏的情况', () => {
    delete testPerson.lastName;
    expect(pipe.transform(testPerson)).toBeEqual('Douglas N.');
  });
});
```

在使用管道的组件和页面中通过 DOM 测试来演练管道也是有益的。

## 端到端测试

端到端测试用于验证应用作为一个整体是否正常工作，通常包括与实时数据的连接。单元测试侧重于隔离的代码单元，从而允许对应用逻辑进行低级测试；而端到端测试则侧重于各种用户故事或使用场景，提供对应用中数据整体流程的高级测试。单元测试试图发现应用逻辑中的问题，而端到端测试则试图发现当这些独立单元一起使用时出现的问题。端到端测试可以发现应用整体架构中的问题。

由于端到端测试演练用户故事并覆盖整个应用而不是单个代码模块，因此端到端测试存在于项目中主应用代码之外的单独应用中。大多数端到端测试通过自动化常见的用户与应用交互并检查 DOM 来确定这些交互的结果来进行测试。

### 测试结构

当生成 `@ionic/angular` 应用时，会在 `e2e` 文件夹中生成一个默认的端到端测试应用。该应用使用 <a href="">Protractor</a> 来控制浏览器，使用 <a href="">Jasmine</a> 来组织和执行测试。该应用最初包含四个文件：

- `protractor.conf.js` - Protractor 配置文件
- `tsconfig.e2e.json` - 测试应用的特定 TypeScript 配置
- `src/app.po.ts` - 一个页面对象，包含导航应用、查询 DOM 元素和操作页面上元素的方法
- `src/app.e2e-spec.ts` - 一个测试脚本

#### 页面对象

端到端测试通过自动化常见的用户与应用交互、等待应用响应以及检查 DOM 来确定交互的结果来工作。这涉及大量的 DOM 操作和检查。如果所有这些都手动完成，测试将非常脆弱且难以阅读和维护。

页面对象将单个页面的 HTML 封装在一个 TypeScript 类中，为测试脚本提供与应用交互的 API。将 DOM 操作逻辑封装在页面对象中，使测试更具可读性且更容易理解，降低了测试的维护成本。创建精心设计的页面对象是创建高质量和可维护的端到端测试的关键。

##### 基础页面对象

许多测试依赖于等待页面可见、在输入框中输入文本和点击按钮等操作。用于执行这些操作的方法保持一致，只有用于获取相应 DOM 元素的 CSS 选择器会变化。因此，将这些逻辑抽象到一个可以被其他页面对象使用的基类中是有意义的。

以下是一个示例，实现了一些所有页面对象都需要支持的基本方法。

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

##### 每页抽象

应用中的每个页面都有其自己的页面对象类，用于抽象该页面上的元素。如果使用了基础页面对象类，创建页面对象主要涉及为特定页面的元素创建自定义方法。通常，这些自定义元素利用基类中的方法来执行所需的工作。

以下是一个简单但典型的登录页面的页面对象示例。请注意，许多方法（如 `enterEMail()`）调用了基类中执行主要工作的方法。

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

与单元测试类似，端到端测试脚本由嵌套的 `describe()` 和 `it()` 函数组成。在端到端测试中，`describe()` 函数通常表示特定场景，`it()` 函数表示在该场景中执行操作时应用应表现出的特定行为。

与单元测试类似，`describe()` 和 `it()` 函数中使用的标签在阅读时应该既能在各自上下文中通顺，又能在连接在一起形成完整测试用例时通顺。

以下是一个示例端到端测试脚本，演练了一些典型的登录场景。

```tsx
import { AppPage } from '../page-objects/pages/app.po';
import { AboutPage } from '../page-objects/pages/about.po';
import { CustomersPage } from '../page-objects/pages/customers.po';
import { LoginPage } from '../page-objects/pages/login.po';
import { MenuPage } from '../page-objects/pages/menu.po';
import { TasksPage } from '../page-objects/pages/tasks.po';

describe('登录', () => {
  const about = new AboutPage();
  const app = new AppPage();
  const customers = new CustomersPage();
  const login = new LoginPage();
  const menu = new MenuPage();
  const tasks = new TasksPage();

  beforeEach(() => {
    app.load();
  });

  describe('登录前', () => {
    it('显示登录界面', () => {
      expect(login.rootElement().isDisplayed()).toEqual(true);
    });

    it('允许应用内导航到关于页面', () => {
      menu.clickAbout();
      about.waitUntilVisible();
      login.waitUntilInvisible();
    });

    it('不允许应用内导航到任务页面', () => {
      menu.clickTasks();
      app.waitForPageNavigation();
      expect(login.rootElement().isDisplayed()).toEqual(true);
    });

    it('不允许应用内导航到客户页面', () => {
      menu.clickCustomers();
      app.waitForPageNavigation();
      expect(login.rootElement().isDisplayed()).toEqual(true);
    });

    it('登录失败时显示错误消息', () => {
      login.enterEMail('test@test.com');
      login.enterPassword('bogus');
      login.clickSignIn();
      login.waitForError();
      expect(login.getErrorMessage()).toEqual('密码无效或用户没有密码。');
    });

    it('登录成功后导航到任务页面', () => {
      login.enterEMail('test@test.com');
      login.enterPassword('testtest');
      login.clickSignIn();
      tasks.waitUntilVisible();
    });
  });

  describe('登录后', () => {
    beforeEach(() => {
      tasks.waitUntilVisible();
    });

    it('允许导航到客户页面', () => {
      menu.clickCustomers();
      customers.waitUntilVisible();
      tasks.waitUntilInvisible();
    });

    it('允许导航到关于页面', () => {
      menu.clickAbout();
      about.waitUntilVisible();
      tasks.waitUntilInvisible();
    });

    it('允许导航回任务页面', () => {
      menu.clickAbout();
      tasks.waitUntilInvisible();
      menu.clickTasks();
      tasks.waitUntilVisible();
    });
  });
});
```

### 配置

默认配置使用与开发相同的 `environment.ts` 文件。为了更好地控制端到端测试使用的数据，通常创建一个专门的测试环境并在测试中使用该环境。本节展示了一种创建此配置的可能方法。

#### 测试环境

设置测试环境涉及创建一个使用专用测试后端的新环境文件，更新 `angular.json` 文件以使用该环境，并修改 `package.json` 中的 `e2e` 脚本以指定 `test` 环境。

##### 创建 `environment.e2e.ts` 文件

Angular 的 `environment.ts` 和 `environment.prod.ts` 文件通常用于存储信息，例如应用后端数据服务的基础 URL。创建一个 `environment.e2e.ts` 文件，提供相同的信息，但连接到专门用于测试的后端服务，而不是开发或生产后端服务。以下是一个示例：

```tsx
export const environment = {
  production: false,
  databaseURL: 'https://e2e-test-api.my-great-app.com',
  projectId: 'my-great-app-e2e',
};
```

##### 修改 `angular.json` 文件

需要修改 `angular.json` 文件以使用此文件。这是一个分层过程。按照下面列出的 XPaths 添加所需的配置。

在 `/projects/app/architect/build/configurations` 下添加一个名为 `test` 的配置，执行文件替换：

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

在 `/projects/app/architect/serve/configurations` 下添加一个名为 `test` 的配置，将浏览器目标指向上面定义的 `test` 构建配置。

```json
            "test": {
              "browserTarget": "app:build:test"
            }
```

在 `/projects/app-e2e/architect/e2e/configurations` 下添加一个名为 `test` 的配置，将 dev server 目标指向上面定义的 `test` serve 配置。

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

如果端到端测试以任何方式修改了数据，在测试完成后将数据重置为已知状态是有帮助的。实现此目的的一种方法是：

1. 创建一个执行清理的端点。
2. 将 `onCleanUp()` 函数添加到由 `protractor.conf.js` 文件导出的 `config` 对象中。

以下是一个示例：

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
