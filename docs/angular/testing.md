---
title: 测试
---

<head>
  <title>Ionic应用组件的 Angular 单元测试与端到端测试</title>
  <meta
    name="description"
    content="使用 Ionic 创建的 Angular 应用会自动配置好单元测试和端到端测试环境。继续阅读，了解更多关于 Ionic 组件测试工具的信息。"
  />
</head>

使用 Ionic CLI 生成 `@ionic/angular` 应用时，会自动配置好单元测试和端到端测试环境。这与 Angular CLI 使用的配置相同。关于测试 Angular 应用的详细信息，请参考 <a href="https://angular.io/guide/testing" target="_blank">Angular 测试指南</a>。

## 测试原则

测试应用时，需要记住：测试可以揭示系统中是否存在缺陷，但无法证明任何一个非平凡的系统是完全没有缺陷的。因此，测试的目标不是为了验证代码的正确性，而是为了发现代码中的问题。这是一个微妙但很重要的区别。

如果我们试图证明代码是正确的，往往会倾向于只走“快乐路径”。但如果我们以发现问题为目标，则更可能全面地测试代码，找出其中潜藏的 Bug。

此外，最好从项目一开始就进行测试。这样可以在早期发现问题，修复起来也更容易。同时，当系统添加新功能时，也能更有信心地进行代码重构。

## 单元测试

单元测试是在隔离环境下执行代码的单一单元（如组件、页面、服务、管道等）。隔离是通过注入模拟对象（mock objects）来替代代码的真实依赖项实现的。模拟对象让测试能够精细控制依赖项的返回值，也可以用来验证哪些依赖项被调用过以及传入了什么参数。

编写良好的单元测试会通过 `describe()` 回调函数来描述被测试的代码单元及其功能。代码单元的需求和功能则通过 `it()` 回调函数进行测试。当我们将 `describe()` 和 `it()` 的描述文本连起来读时，它们应该构成一个有意义的短语。将嵌套的 `describe()` 和最终的 `it()` 描述拼接起来，就形成了一个完整描述测试用例的句子。

由于单元测试在隔离环境中执行代码，因此运行速度快、结果稳定，并且可以实现很高的代码覆盖率。

### 使用模拟对象

单元测试是在隔离环境中测试代码模块。为此，我们推荐使用 Jasmine (https://jasmine.github.io/)。Jasmine 可以创建模拟对象（在 Jasmine 中称为 "spies"）来在测试时代替真实的依赖项。使用模拟对象时，测试可以控制对这些依赖项调用的返回值，使当前测试不受依赖项本身变更的影响。这也简化了测试设置，让测试只需关注被测模块内部的代码。

使用模拟对象还允许测试通过 `toHaveBeenCalled*` 系列函数来查询该模拟对象是否被调用以及如何被调用。测试应尽可能具体地使用这些函数，在验证方法是否被调用时，优先使用 `toHaveBeenCalledTimes` 而不是 `toHaveBeenCalled`。也就是说，`expect(mock.foo).toHaveBeenCalledTimes(1)` 优于 `expect(mock.foo).toHaveBeenCalled()`。但在验证某个方法**未被**调用时，则应采用相反的建议（即使用 `expect(mock.foo).not.toHaveBeenCalled()`）。

在 Jasmine 中创建模拟对象有两种常用方法。可以从头开始使用 `jasmine.createSpy` 和 `jasmine.createSpyObj` 构建模拟对象，也可以使用 `spyOn()` 和 `spyOnProperty()` 在现有对象上安装 spies。

#### 使用 `jasmine.createSpy` 和 `jasmine.createSpyObj`

`jasmine.createSpyObj` 从头开始创建一个完整的模拟对象，并在创建时定义一组模拟方法。它的优点是非常简单，无需在测试中构建或注入任何东西。缺点是使用此函数创建的对象可能与真实对象不匹配。

`jasmine.createSpy` 类似，但它创建一个独立的模拟函数。

#### 使用 `spyOn()` 和 `spyOnProperty()`

`spyOn()` 将一个 spy 安装到现有对象上。这种技术的优点是，如果尝试监听一个在对象上不存在的方法，会抛出异常。这可以防止测试模拟不存在的方法。缺点是需要一个已完全成形的对象作为起点，这可能会增加测试设置的工作量。

`spyOnProperty()` 与此类似，区别在于它监听的是属性而不是方法。

### 通用测试结构

单元测试放在 `spec` 文件中，每个实体（组件、页面、服务、管道等）对应一个 `spec` 文件。`spec` 文件与它们所测试的源代码文件放在同一目录下，并以源文件命名。例如，如果项目中有一个名为 WeatherService 的服务，其代码位于 `weather.service.ts` 文件中，那么测试代码就位于同一文件夹下的 `weather.service.spec.ts` 文件中。

`spec` 文件本身包含一个外层的 `describe` 调用来定义整体测试。其内部嵌套着其他的 `describe` 调用，用于定义主要的功能区域。每个 `describe` 调用可以包含设置和清理代码（通常通过 `beforeEach` 和 `afterEach` 处理）、更多的 `describe` 调用以形成层次化的功能分解，以及定义单个测试用例的 `it` 调用。

`describe` 和 `it` 调用都包含一个描述性的文本标签。在编写良好的测试中，`describe` 和 `it` 调用与它们的标签组合起来构成恰当的短语，而通过组合 `describe` 和 `it` 标签形成的每个测试用例的完整标签，则构成一个完整的句子。

例如：

```tsx
describe('计算服务', () => {
  describe('除法功能', () => {
    it('能够正确计算 4 / 2', () => {});
    it('会拒绝除以零的操作', () => {});
    ...
  });

  describe('乘法功能', () => {
    ...
  });
});
```

外层 `describe` 说明正在测试 `计算服务`，内层 `describe` 明确说明了正在测试的具体功能，而 `it` 则描述了测试用例是什么。运行时，每个测试用例的完整标签是一个有意义的句子（计算服务 除法功能 会拒绝除以零的操作）。

### 页面和组件

页面本质上是 Angular 组件。因此，页面和组件都应遵循 <a href="https://angular.io/guide/testing#component-test-basics">Angular 的组件测试</a>指南进行测试。

由于页面和组件包含 TypeScript 代码和 HTML 模板标记，因此可以同时进行组件类测试和组件 DOM 测试。创建页面时，生成的模板测试如下所示：

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

  it('应该成功创建组件', () => {
    expect(component).toBeTruthy();
  });
});
```

进行组件类测试时，通过 `component = fixture.componentInstance;` 定义的组件对象来访问组件实例。进行 DOM 测试时，则使用 `fixture.nativeElement` 属性。这是组件的实际 `HTMLElement`，允许测试使用标准的 HTML API 方法（如 `HTMLElement.querySelector`）来检查 DOM。

## 服务

服务通常可以分为两大类：实用工具服务（执行计算和其他操作）和数据服务（主要执行 HTTP 操作和数据操作）。

### 基础服务测试

测试大多数服务的建议方法是：实例化服务，并手动为其依赖项注入模拟对象。这样，就可以在隔离环境中测试代码。

假设有一个服务，它包含一个方法，该方法接收一组工时记录卡并计算净工资。再假设税务计算是由另一个服务处理的，并且当前服务依赖于它。这个工资服务的测试可以这样写：

```tsx
import { PayrollService } from './payroll.service';

describe('PayrollService', () => {
  let service: PayrollService;
  let taxServiceSpy;

   beforeEach(() => {
     taxServiceSpy = jasmine.createSpyObj('TaxService', {
       federalIncomeTax: 0,       // 联邦所得税
       stateIncomeTax: 0,         // 州所得税
       socialSecurity: 0,         // 社会保障税
       medicare: 0                // 医疗保险税
     });
     service = new PayrollService(taxServiceSpy);
   });

   describe('净工资计算', () => {
     ...
   });
});
```

这种方式允许测试通过模拟设置（如 `taxServiceSpy.federalIncomeTax.and.returnValue(73.24)`）来控制各项税务计算的返回值。这使得“净工资”测试独立于税务计算逻辑。当税法变更时，只需要修改与税务服务相关的代码和测试。净工资的测试可以继续照常运行，因为这些测试不关心税是怎么算的，只关心数值是否被正确应用。

通过 `ionic g service name` 生成服务时，创建的基础代码会使用 Angular 的测试工具并设置一个测试模块。但这并非绝对必要。不过，可以保留这些代码，以便手动构建服务或像下面这样注入服务：

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

  it('通过注入方式进行测试', inject([PayrollService], (service: PayrollService) => {
    expect(service).toBeTruthy();
  }));

  it('通过手动构建方式进行测试', () => {
    const service = new PayrollService(taxServiceSpy);
    expect(service).toBeTruthy();
  });
});
```

#### 测试 HTTP 数据服务

大多数执行 HTTP 操作的服务会使用 Angular 的 HttpClient 服务。对于此类测试，建议使用 Angular 的 `HttpClientTestingModule`。关于此模块的详细文档，请参阅 Angular 的 <a href="https://angular.io/guide/http#testing-http-requests" target="_blank">测试 HTTP 请求</a>指南。

此类测试的基本设置如下所示：

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

  it('服务实例存在', inject([IssTrackingDataService], (service: IssTrackingDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('位置信息', () => {
    it('能够获取国际空间站的当前位置', () => {
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

管道（Pipe）类似于具有特定接口的服务。它是一个包含一个公共方法 `transform` 的类，该方法用于处理输入值（以及其它可选参数），以生成渲染到页面上的输出。测试管道的方法是：实例化管道，调用 transform 方法，并验证结果。

举一个简单的例子，假设有一个管道接收一个 `Person` 对象并格式化其姓名。为简化起见，假设一个 `Person` 对象包含 `id`、`firstName`、`lastName` 和 `middleInitial`。该管道的要求是将姓名格式化为“姓, 名 中间名缩写”的形式，并处理名、姓或中间名缩写不存在的情况。这样的测试可能如下所示：

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

  it('管道实例存在', () => {
    expect(pipe).toBeTruthy();
  });

  it('能正确格式化全名', () => {
    expect(pipe.transform(testPerson)).toBeEqual('Adams, Douglas N.');
  });

  it('能处理没有中间名缩写的情况', () => {
    delete testPerson.middleInitial;
    expect(pipe.transform(testPerson)).toBeEqual('Adams, Douglas');
  });

  it('能处理没有名的情况', () => {
    delete testPerson.firstName;
    expect(pipe.transform(testPerson)).toBeEqual('Adams N.');
  });

  it('能处理没有姓的情况', () => {
    delete testPerson.lastName;
    expect(pipe.transform(testPerson)).toBeEqual('Douglas N.');
  });
});
```

此外，在使用该管道的组件和页面中通过 DOM 测试来验证管道也是有益的。

## 端到端测试

端到端测试用于验证整个应用是否按预期工作，通常包含与真实数据的连接。单元测试侧重于隔离的代码单元，对应用逻辑进行底层测试；而端到端测试则关注不同的用户故事或使用场景，对数据在整个应用中的流动进行高层测试。单元测试试图发现应用逻辑的问题，端到端测试则试图发现各个单元协同工作时出现的问题。端到端测试有助于发现应用整体架构中的问题。

由于端到端测试执行的是用户故事并覆盖整个应用，而不是单个代码模块，因此端到端测试存在于项目中一个独立的应用里，与主应用的代码分开。大多数端到端测试通过自动化模拟用户与应用进行交互，并检查 DOM 来确定这些交互的结果。

### 测试结构

当生成一个 `@ionic/angular` 应用时，会在 `e2e` 文件夹中生成一个默认的端到端测试应用。这个测试应用使用 <a href="">Protractor</a> 来控制浏览器，并使用 <a href="">Jasmine</a> 来组织和执行测试。该应用初始包含四个文件：

- `protractor.conf.js` - Protractor 配置文件
- `tsconfig.e2e.json` - 针对测试应用的特定 TypeScript 配置
- `src/app.po.ts` - 一个页面对象（Page Object），包含导航、查询 DOM 元素以及操作页面元素的方法
- `src/app.e2e-spec.ts` - 测试脚本

#### 页面对象

端到端测试通过自动化模拟用户与应用进行交互，等待应用响应，然后检查 DOM 来确定交互结果。这涉及大量的 DOM 操作和检查。如果全部手动完成，测试将非常脆弱，且难以阅读和维护。

页面对象将单个页面的 HTML 封装在一个 TypeScript 类中，为测试脚本提供了与应用交互的 API。将 DOM 操作逻辑封装在页面对象中，使测试更具可读性，更容易理解，从而降低测试的维护成本。创建精心设计的页面对象是编写高质量、可维护的端到端测试的关键。

##### 基础页面对象

许多测试依赖于一些操作，例如等待页面可见、在输入框中输入文本以及点击按钮。执行这些操作的方法基本一致，只有用于获取相应 DOM 元素的 CSS 选择器会发生变化。因此，将这些逻辑抽象到一个可以被其他页面对象继承的基类中是很有意义的。

下面是一个示例，实现了一些所有页面对象都可能需要支持的基本方法。

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

##### 每个页面的抽象

应用中的每个页面都应该有自己的页面对象类，用于抽象该页面上的元素。如果使用了基础页面对象类，创建页面对象主要就是为该页面特有的元素创建自定义方法。通常，这些自定义方法会利用基类中的方法来执行所需的工作。

下面是一个简单但典型的登录页面的页面对象示例。请注意，许多方法（如 `enterEMail()`）都调用了基类中执行主要工作的通用方法。

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

与单元测试类似，端到端测试脚本也由嵌套的 `describe()` 和 `it()` 函数组成。在端到端测试中，`describe()` 函数通常表示特定的场景，而 `it()` 函数则表示在该场景下执行操作时应用应该表现出的特定行为。

同样类似于单元测试，`describe()` 和 `it()` 函数中使用的标签，无论是单独与 "describe" 或 "it" 组合，还是拼接在一起形成完整的测试用例描述时，都应该具有明确的含义。

以下是一个示例端到端测试脚本，它执行了一些典型的登录场景。

```tsx
import { AppPage } from '../page-objects/pages/app.po';
import { AboutPage } from '../page-objects/pages/about.po';
import { CustomersPage } from '../page-objects/pages/customers.po';
import { LoginPage } from '../page-objects/pages/login.po';
import { MenuPage } from '../page-objects/pages/menu.po';
import { TasksPage } from '../page-objects/pages/tasks.po';

describe('登录流程', () => {
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
    it('应该显示登录页面', () => {
      expect(login.rootElement().isDisplayed()).toEqual(true);
    });

    it('允许在应用内导航到“关于”页面', () => {
      menu.clickAbout();
      about.waitUntilVisible();
      login.waitUntilInvisible();
    });

    it('不允许在应用内导航到“任务”页面', () => {
      menu.clickTasks();
      app.waitForPageNavigation();
      expect(login.rootElement().isDisplayed()).toEqual(true);
    });

    it('不允许在应用内导航到“客户”页面', () => {
      menu.clickCustomers();
      app.waitForPageNavigation();
      expect(login.rootElement().isDisplayed()).toEqual(true);
    });

    it('登录失败时显示错误信息', () => {
      login.enterEMail('test@test.com');
      login.enterPassword('bogus');
      login.clickSignIn();
      login.waitForError();
      expect(login.getErrorMessage()).toEqual('密码无效或用户未设置密码。');
    });

    it('登录成功后导航到“任务”页面', () => {
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

    it('允许导航到“客户”页面', () => {
      menu.clickCustomers();
      customers.waitUntilVisible();
      tasks.waitUntilInvisible();
    });

    it('允许导航到“关于”页面', () => {
      menu.clickAbout();
      about.waitUntilVisible();
      tasks.waitUntilInvisible();
    });

    it('允许导航回“任务”页面', () => {
      menu.clickAbout();
      tasks.waitUntilInvisible();
      menu.clickTasks();
      tasks.waitUntilVisible();
    });
  });
});
```

### 配置

默认配置使用与开发环境相同的 `environment.ts` 文件。为了更好地控制端到端测试使用的数据，通常可以为测试创建一个特定的环境文件，并让测试使用该环境。本节介绍一种可能的配置方法。

#### 测试环境

设置测试环境包括：创建一个使用专用测试后端的新环境文件，更新 `angular.json` 文件以使用该环境，并修改 `package.json` 中的 `e2e` 脚本以指定 `test` 环境。

##### 创建 `environment.e2e.ts` 文件

Angular 的 `environment.ts` 和 `environment.prod.ts` 文件通常用于存储信息，例如应用后端数据服务的基础 URL。创建一个 `environment.e2e.ts` 文件，提供相同的信息，但连接到专用于测试的后端服务，而不是开发或生产后端服务。示例如下：

```tsx
export const environment = {
  production: false,
  databaseURL: 'https://e2e-test-api.my-great-app.com',
  projectId: 'my-great-app-e2e',
};
```

##### 修改 `angular.json` 文件

需要修改 `angular.json` 文件以使用此文件。这是一个分层过程。按照下面的 XPath 列表添加所需的配置。

在 `/projects/app/architect/build/configurations` 路径下添加一个名为 `test` 的配置，用于进行文件替换：

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

在 `/projects/app/architect/serve/configurations` 路径下添加一个名为 `test` 的配置，将浏览器目标指向上面定义的 `test` 构建配置。

```json
"test": {
  "browserTarget": "app:build:test"
}
```

在 `/projects/app-e2e/architect/e2e/configurations` 路径下添加一个名为 `test` 的配置，将开发服务器目标指向上面定义的 `test` 服务配置。

```json
"test": {
  "devServerTarget": "app:serve:test"
}
```

##### 修改 `package.json` 文件

修改 `package.json` 文件，使 `npm run e2e` 命令使用 `test` 配置。

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

如果端到端测试以任何方式修改了数据，那么在测试完成后将数据重置为已知状态会很有帮助。一种方法是：

1.  创建一个执行清理操作的端点。
2.  在 `protractor.conf.js` 文件导出的 `config` 对象中添加一个 `onCleanUp()` 函数。

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