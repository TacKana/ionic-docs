---
title: 测试
---

<head>
  <title>Ionic应用组件的Angular单元测试与端到端测试</title>
  <meta
    name="description"
    content="使用Ionic CLI创建的Angular应用会自动配置好单元测试和端到端测试环境。阅读本文以了解更多关于Ionic组件测试工具的信息。"
  />
</head>

当使用 Ionic CLI 生成 `@ionic/angular` 应用时，它会自动配置好应用的单元测试和端到端测试环境。这与 Angular CLI 使用的设置相同。有关测试 Angular 应用的详细信息，请参阅 <a href="https://angular.io/guide/testing" target="_blank">Angular 测试指南</a>。

## 测试原则

测试应用时，最好记住：测试可以揭示系统中是否存在缺陷。然而，要证明任何非平凡的系统完全没有缺陷是不可能的。因此，测试的目标不是验证代码的正确性，而是发现代码中的问题。这是一个微妙但重要的区别。

如果我们旨在证明代码是正确的，我们更可能只走代码的“快乐路径”。如果我们旨在发现问题，我们则更可能全面地执行代码，找到潜藏的错误。

同样，最好从一开始就进行应用测试。这允许在流程早期发现缺陷，此时修复它们更容易。这也允许在向系统添加新功能时，有信心地进行代码重构。

## 单元测试

单元测试在隔离环境中执行代码的单个单元（组件、页面、服务、管道等）。通过注入模拟对象（mock）来替代代码的依赖项实现隔离。模拟对象允许测试精细控制依赖项的输出。模拟对象还允许测试确定哪些依赖项被调用过以及向它们传递了什么。

编写良好的单元测试结构清晰，通过 `describe()` 回调来描述代码单元及其包含的功能。代码单元及其功能的要求通过 `it()` 回调进行测试。当阅读 `describe()` 和 `it()` 回调的描述时，它们应该构成一个有意义的短语。当嵌套的 `describe()` 和最终的 `it()` 的描述连接在一起时，它们形成一个完整描述测试用例的句子。

由于单元测试在隔离环境中执行代码，因此它们快速、健壮，并且允许实现高代码覆盖率。

### 使用模拟对象 (Mocks)

单元测试在隔离环境中执行代码模块。为方便起见，我们建议使用 Jasmine (https://jasmine.github.io/)。Jasmine 创建模拟对象（Jasmine 称之为 "spies"）来在测试时代替依赖项。当使用模拟对象时，测试可以控制对该依赖项调用返回的值，使当前测试独立于对依赖项所做的更改。这也简化了测试设置，使测试只关注被测模块内的代码。

使用模拟对象还允许测试查询模拟对象，通过 `toHaveBeenCalled*` 系列函数来确定它是否被调用以及如何被调用。测试应尽可能具体地使用这些函数，在测试方法是否被调用时，优先使用 `toHaveBeenCalledTimes` 而不是 `toHaveBeenCalled`。也就是说 `expect(mock.foo).toHaveBeenCalledTimes(1)` 比 `expect(mock.foo).toHaveBeenCalled()` 更好。在测试某些内容未被调用时，则应遵循相反的建议（`expect(mock.foo).not.toHaveBeenCalled()`）。

在 Jasmine 中有两种常见的创建模拟对象的方法。可以使用 `jasmine.createSpy` 和 `jasmine.createSpyObj` 从头构建模拟对象，或者可以使用 `spyOn()` 和 `spyOnProperty()` 将 spies 安装到现有对象上。

#### 使用 `jasmine.createSpy` 和 `jasmine.createSpyObj`

`jasmine.createSpyObj` 从头创建一个完整的模拟对象，并在创建时定义一组模拟方法。这非常有用，因为它非常简单。无需在测试中构造或注入任何东西。使用此函数的缺点是它可能创建与真实对象不匹配的对象。

`jasmine.createSpy` 类似，但它创建一个独立的模拟函数。

#### 使用 `spyOn()` 和 `spyOnProperty()`

`spyOn()` 将 spy 安装到现有对象上。使用这种技术的优点是，如果尝试监视对象上不存在的方法，则会引发异常。这防止了测试模拟不存在的方法。缺点是测试需要从一个完全成形的对象开始，这可能会增加所需的测试设置量。

`spyOnProperty()` 类似，区别在于它监视的是属性而不是方法。

### 通用测试结构

单元测试包含在 `spec` 文件中，每个实体（组件、页面、服务、管道等）对应一个 `spec` 文件。`spec` 文件与其测试的源代码放在一起，并以源代码的名称命名。例如，如果项目有一个名为 WeatherService 的服务，其代码位于 `weather.service.ts` 文件中，测试则位于同一文件夹下的 `weather.service.spec.ts` 文件中。

`spec` 文件本身包含一个 `describe` 调用来定义整体测试。在其内部嵌套其他 `describe` 调用来定义主要功能区域。每个 `describe` 调用可以包含设置和清理代码（通常通过 `beforeEach` 和 `afterEach` 调用处理）、更多的 `describe` 调用（形成功能的层次结构分解）以及定义各个测试用例的 `it` 调用。

`describe` 和 `it` 调用还包含一个描述性文本标签。在结构良好的测试中，`describe` 和 `it` 调用与其标签组合成恰当的短语，并且每个测试用例的完整标签（由 `describe` 和 `it` 标签组合而成）形成一个完整的句子。

例如：

```tsx
describe('计算', () => {
  describe('除法', () => {
    it('正确计算 4 / 2', () => {});
    it('拒绝除以零', () => {});
    ...
  });

  describe('乘法', () => {
    ...
  });
});
```

外层的 `describe` 调用表明正在测试 `计算` 服务，内层的 `describe` 调用确切说明正在测试什么功能，而 `it` 调用说明测试用例是什么。运行时，每个测试用例的完整标签是一个有意义的句子（计算 除法 拒绝除以零）。

### 页面和组件

页面就是 Angular 组件。因此，页面和组件都使用 <a href="https://angular.io/guide/testing#component-test-basics" target="_blank">Angular 的组件测试</a>指南进行测试。

由于页面和组件包含 TypeScript 代码和 HTML 模板标记，因此可以执行组件类测试和组件 DOM 测试。创建页面时，生成的模板测试如下所示：

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

  it('应该创建', () => {
    expect(component).toBeTruthy();
  });
});
```

在执行组件类测试时，通过 `component = fixture.componentInstance;` 定义的组件对象来访问组件。这是组件类的一个实例。在执行 DOM 测试时，使用 `fixture.nativeElement` 属性。这是组件的实际 `HTMLElement`，允许测试使用标准 HTML API 方法（如 `HTMLElement.querySelector`）来检查 DOM。

## 服务

服务通常分为两大类：执行计算和其他操作的实用程序服务，以及主要执行 HTTP 操作和数据操作的数据服务。

### 基本服务测试

测试大多数服务的建议方法是实例化服务，并手动为服务所具有的任何依赖项注入模拟对象。这样，代码就可以在隔离环境中进行测试。

假设有一个服务，其方法接受一个工时卡数组并计算净工资。还假设税务计算由当前服务依赖的另一个服务处理。这个工资服务可以这样测试：

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

这允许测试通过模拟设置（如 `taxServiceSpy.federalIncomeTax.and.returnValue(73.24)`）来控制各种税务计算返回的值。这使得“净工资”测试独立于税务计算逻辑。当税法发生变化时，只需要更改与税务服务相关的代码和测试。净工资的测试可以继续照常运行，因为这些测试不关心税是如何计算的，只关心数值被正确应用。

通过 `ionic g service name` 生成服务时使用的脚手架使用了 Angular 的测试实用程序并设置了一个测试模块。这样做并非绝对必要。但可以保留该代码，以便手动构建服务或按如下方式注入：

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

  it('执行某个测试，其中服务被注入', inject([PayrollService], (service: PayrollService) => {
    expect(service).toBeTruthy();
  }));

  it('执行某个测试，其中服务是手动构建的', () => {
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

  it('存在', inject([IssTrackingDataService], (service: IssTrackingDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('位置', () => {
    it('获取国际空间站当前位置', () => {
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

### 管道 (Pipes)

管道就像一个具有特定接口的服务。它是一个包含一个公共方法 `transform` 的类，该方法处理输入值（和其他可选参数）以创建在页面上呈现的输出。要测试管道：实例化管道，调用 transform 方法，并验证结果。

举一个简单的例子，看一个接收 `Person` 对象并格式化姓名的管道。为简单起见，假设一个 `Person` 包含 `id`、`firstName`、`lastName` 和 `middleInitial`。管道的要求是将姓名打印为"姓, 名 中间名首字母."，并处理名、姓或中间名首字母不存在的情况。这样的测试可能如下所示：

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

  it('存在', () => {
    expect(pipe).toBeTruthy();
  });

  it('正确格式化全名', () => {
    expect(pipe.transform(testPerson)).toBe('Adams, Douglas N.');
  });

  it('处理没有中间名首字母的情况', () => {
    delete testPerson.middleInitial;
    expect(pipe.transform(testPerson)).toBe('Adams, Douglas');
  });

  it('处理没有名的情况', () => {
    delete testPerson.firstName;
    expect(pipe.transform(testPerson)).toBe('Adams N.');
  });

  it('处理没有姓的情况', () => {
    delete testPerson.lastName;
    expect(pipe.transform(testPerson)).toBe('Douglas N.');
  });
});
```

在使用了管道的组件和页面中通过 DOM 测试来执行管道也是有益的。

## 端到端测试

端到端测试用于验证应用程序作为一个整体是否正常工作，并且通常包含与实时数据的连接。单元测试侧重于隔离的代码单元，从而允许对应用程序逻辑进行低级别测试，而端到端测试侧重于各种用户故事或使用场景，提供对应用程序整体数据流的高级测试。单元测试试图发现应用程序逻辑的问题，而端到端测试试图发现当这些独立的单元一起使用时出现的问题。端到端测试揭示应用程序整体架构的问题。

由于端到端测试执行用户故事并涵盖整个应用程序，而不是单个代码模块，因此端到端测试存在于项目中主应用程序代码之外的单独应用程序中。大多数端到端测试通过自动化常见的用户与应用交互并检查 DOM 来确定这些交互的结果来工作。

### 测试结构

当生成一个 `@ionic/angular` 应用时，会在 `e2e` 文件夹中生成一个默认的端到端测试应用。这个应用使用 <a href="http://www.protractortest.org/" target="_blank">Protractor</a> 来控制浏览器，并使用 <a href="https://jasmine.github.io/" target="_blank">Jasmine</a> 来组织和执行测试。该应用最初包含四个文件：

- `protractor.conf.js` - Protractor 配置文件
- `tsconfig.e2e.json` - 测试应用的特定 TypeScript 配置
- `src/app.po.ts` - 一个页面对象，包含导航应用、查询 DOM 元素以及在页面上操作元素的方法
- `src/app.e2e-spec.ts` - 测试脚本

#### 页面对象 (Page Objects)

端到端测试通过自动化常见的用户与应用交互、等待应用响应以及检查 DOM 来确定交互结果来工作。这涉及大量的 DOM 操作和检查。如果这些都手动完成，测试将非常脆弱且难以阅读和维护。

页面对象将单个页面的 HTML 封装在一个 TypeScript 类中，为测试脚本提供了一个与应用交互的 API。将 DOM 操作逻辑封装在页面对象中使得测试更具可读性，并且更易于理解，从而降低了测试的维护成本。创建精心设计的页面对象是创建高质量和可维护的端到端测试的关键。

##### 基础页面对象

许多测试依赖于诸如等待页面可见、在输入框中输入文本以及点击按钮等操作。执行这些操作的方法保持一致，只有用于获取相应 DOM 元素的 CSS 选择器会发生变化。因此，将此逻辑抽象到一个可以被其他页面对象使用的基础类中是有意义的。

下面是一个示例，实现了一些所有页面对象都需要支持的基本方法。

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

应用中的每个页面都有自己的页面对象类，用于抽象该页面上的元素。如果使用了基础页面对象类，创建页面对象主要涉及为特定于该页面的元素创建自定义方法。通常，这些自定义元素利用基类中的方法来执行所需的工作。

下面是一个简单但典型的登录页面的页面对象示例。请注意，许多方法（例如 `enterEMail()`）调用了基类中执行大部分工作的方法。

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

与单元测试类似，端到端测试脚本由嵌套的 `describe()` 和 `it()` 函数组成。在端到端测试中，`describe()` 函数通常表示特定场景，而 `it()` 函数表示在该场景内执行操作时应用程序应展现的特定行为。

同样类似于单元测试，`describe()` 和 `it()` 函数中使用的标签应与“describe”或“it”一起读起来有意义，并且在连接在一起形成完整测试用例时也应如此。

下面是一个示例端到端测试脚本，它执行了一些典型的登录场景。

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
    it('显示登录屏幕', () => {
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

    it('如果登录失败，显示错误消息', () => {
      login.enterEMail('test@test.com');
      login.enterPassword('bogus');
      login.clickSignIn();
      login.waitForError();
      expect(login.getErrorMessage()).toEqual('密码无效或用户没有密码。');
    });

    it('如果登录成功，导航到任务页面', () => {
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

默认配置使用与开发相同的 `environment.ts` 文件。为了更好地控制端到端测试使用的数据，通常为测试创建一个特定的环境，并将其用于测试。本节展示了一种创建此配置的可能方法。

#### 测试环境

设置测试环境包括创建一个使用专用测试后端的新环境文件，更新 `angular.json` 文件以使用该环境，并修改 `package.json` 中的 `e2e` 脚本以指定 `test` 环境。

##### 创建 `environment.e2e.ts` 文件

Angular 的 `environment.ts` 和 `environment.prod.ts` 文件通常用于存储信息，例如应用程序后端数据服务的基础 URL。创建一个 `environment.e2e.ts`，提供相同的信息，但连接到专用于测试的后端服务，而不是开发或生产后端服务。示例如下：

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

如果端到端测试以任何方式修改了数据，那么在测试完成后将数据重置为已知状态会很有帮助。一种方法是：

1.  创建一个执行清理的端点。
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