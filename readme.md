# Angular

- npm install -g @angular/cli

- components
    - selector  
        - ex:  in html the selectors are <h1>,div,span,img,p  - pre-define

- ng new TaskMan --no-standalone --routing --ssr-false or ng new taskM --no-standalone --routing

- ng new my-angular-app
- ng serve


- npm install -g typescript

# angular application developement
- Creating Angular application
- Steps to create 
    -   install node js will install npm also
    -   Install the typescript - npm install -g typescript
    -   install the IDE (VS)

    - Angular cli - command line interface which is used to create the deveolpe the build and deploy yje angular
    - by using Ang CLI, we are also to generate the components,directives , pipes,services etc. with scafflod options

    - When we do the first time installation 
    - > npm install -g @angular/cli
    - ng --version  - Check the angular version which was installed
    - If we have already installed, and we want to update the version
    - npm uninstall -g @angular/cli  - Uninstall the ang from system
    - npm cache verlfy     - Clear the cache

    - Npm install the latest versoion -  npm install -g @angular/cli

# How to create an angular application
- two ways
    - ng new <applicationnanme>

# By creating workspace
- Workspace provides a platform for handling multiple projects.
- It provides a global library or repository for handling multiple project at once
- ng new my-angular-workspace --createApplication=false

- ng new my-angular-workspace --no-create-application

# After creating a workspace , It will create following file system 
- 1 node_modules   : It contains all the libraries that are required to build angular application
- 2 tsconfig.json  : It configures the rules for typescript, and also it defines env for typescript to build angular application
- 3 package.json  : It contains the lib info of project
- 4 packegae-lock.json  :It contains metadata about every dependency that installed in project
- 5 angular.json  : It creates initial env for the workspace . here once we create an application it  automatically configures
Stylesheets, script files, test files

- 6 gitignore  : git is a SCM

- 7 .editorconfig  :  

# Angular application Execution Flow:
- 1 Create a workspace     > ng new <workspaceName> --no-create-application
- 2 create the project that we want to build  > ng generate application <appName>  
- 3 Execute the application   > ng serve --project=<appName>

Note: one we execute above command it will open/ the project will run on a port i.e  4200
        http://localhost:4200

4. Execution starts from
    index.html => <app-root></app-root> => component => (HTML+CSS)

# In Angular execution we have to consider two things
- UI    => index.html => <app-root></app-root> => component => (HTML+CSS)
- Business => main.ts => AppModule => AppComponent => index.html

- Babel uses AOT(Ahead Of Time) machineism, which is used to convert static DOM(Document Object Model) into Dynamic DOM, the process of converting is known as "bootstrapping"
- 

# Angular Project File System:
- Every project in angular is having a folder i.e. "src" which means it contains the source code to build the project.

- app: It contains the application resources to build the angular project like
    - modules
    - components
    - directives
    - services
    - pipes etc.

- assets: This folder contains static resources like image,text,pdf,word etc.

- index.html: It is the starting page for angular application
- main.ts: It is the entry point, from here application will get compile and process
- style.css: It is used to provide global styles for the angular components.

# Angular building blocks:
- Angular is a comp based framework or platform.
- Every angular application development must involve following things

    - Modules : Modules is used to improve the modularity for building angular application. a module will contains components, pipes, directives,services etc
    EX: NareshIT
        - Trainer
            - 3 pages
            - 1 form
        - Admin
        - HR
        - CourseSchedule

    - Factory : It is nothing pre-defined functions.
    - Services : Serviec is a collection factories.
    - Templates : It is a HTML. 
    - Pipes : It is used to transform the data.
    - Directives :  It is a speical components
    - Routing : SPA
    - Metadata : It contains information about What we are developing
    -

# Components in Angular:
- Component in angular is a basic building block to build angular applications.
- Every components is combination of 3 files
    - Presentation   - It is nothing design of the page, It can be implemented by using HTML, and we have file (*.component.html)
    - Styles  - These are used to provide good Graphical interface or Styles for the HTML tags. It can be implemented by using CSS/Bootstrap.
        - We have a file extension i.e *.component.css   
    - Business logic
        -  These are used to write business logic, like getting the data, submitting the data to the server, performing calculation etc
        - Here we have a file extension i.e *.component.ts

- A Component In Angular is a typescript class, which can be created with the help of @Component() decorator.- 
- Every building block of angular like comp, service, pipe,module ect is a typescript class, inorder to differentiate we use Decorators
- Component   - @Component()
- Services    - @Injectable()
- Module      - @NgModule()
- Pipes       - @Pipe()  etc.

- Decorator : A decorator in angular is used to differentiate the angular elements and it is used to maintain the metadata
- @Component() decorator is having following metadata like
    - selector: It is used to load the HTML
    - template: It is used to create the design
    - styles: it is used to provide structure we have two options

# To design/develop the above structure we have two options
    - Inline components
        - If we have HTML, CSS and Typescript all at one place or in one single file i.e Inline Components
        - We can reduce the number of requests to the server.
        - This machanism is not good for reusability, extension,testing


    - Code behind Components
        - Here we are going to implement by using diffirent files like
        UI    - component.html
        Styles    - component.css
        Logic    - component.ts


- To work with the component we use to follow below steps
    - Create a typescript class file and use @component() decorator.
    - Register the component in any one module(app.module.ts)
     declaration: [
        AppComponent,
        EmployeeComponent
     ]
    - Bootstrap the Component
        bootstrap: [EmployeeComponent]
    - Use the selector in index.html
        <body>
            <app-employee></app-employee>
        <body>
    - Execute the project
        > ng serve --project=ComponentsDemo


# Code Behind Components:
- in this technique we are creating HTML,CSS and Typescript files separatly
- 

Note: We are able to create components by using Angular CLI Command like
    > ng generate component Register

    aligs > ng g c netflixMain

    ng g c netflixRegister --skip-tests

Example with Multiple Components:
    - Create a folder in components folder "Netflix
    - Create the components
     NetflixHeader          -  > ng generate component NetflixHeader
     NetflixMain            -  > ng g c NetflixMain
     NetflixRegister        -  > ng g c NetflixRegister --skip-tests (This commonnd will remove the spec.ts file)
     NetflixIndex           -  > ng g c NetflixIndex --skip-tests 
     


# Data Binding in Angular:
- It is a technique which is used to bind the data with the UI.
- 
- Employee
 - Eno    -  101
 - Ename  -  Siru
 - JOB    -  Trainer

- It is used to access the data from data source and display in the UI(HTML), when user modify the value from UI, then it has to be updated back to the data source.

- In Javascript/JQuery to do the Data binding we use DOM(Document Object Model) Manupulations and Events etc. can be used and its is very difficult.
- In Angular to perform the DATA Binding we have two approches
    - MVC(Model - View - Controller)
    - MVVM(Model View - View Model)

facebook - JSP 
 - Insta reels on FB
 - 

- What is MVC and What is design pattern - A design pattern is solution for commenly addressing problems with existing technologies.

- MVC is a design pattern -  It was introduced in 1970s.
- It is mainly used for code seperation and also reusability concerns.
- MVC is used In various technologies
 JAVa    - Spring MVC
 php      - Code Igniter
 Python   - Django, Flask
 Ruby      - Ruby on Rails
 JS         - Angular, Spine


- Models are used to represent the data.
- View is used to present the data, In Angular upto 13 version we have "IVY" View engine was there, now from 14 and 15 we have
"Babel"
- Controller is used to define the application specific logic, and It is also used to handle the Incoming requests.
- Using MVC we Have two ways to do the data binding
 - One-Way Data Binding
  - It is the Process of getting the data from Model(Variable) and Binding With UI.
   - Interpolation Syntax  - {{}}
    - It is used the data binding expression like "{{}}"
    - it is used to bind the direct data to the HTML tags
    - But if we want to bind it to bind it to the properties of the HTML then it is not a good programming practice.
   - Property Binding      - []
    -   We can access any HTML element property by using property binding and assign the value dynamically.
    -   Here we can access only the properties which are the part of HTML
   - Attribute Binding     - []


   - What is the difference bt Property Binding and Attribute Binding?
    - Attributes are immutable, can't change according to state and situation.
    - Properties ar mutable, can change according to the state and situation.

    - EX. <img src="" class=""/>        => img.src         = [src]
    - <table height="400px">           => table.style.height     = [attr.height]


 - Two-Way Data Binding:
    # Attribute Binding:
        -    It allows to bind any dynamic value to the element attribute.
        - These attributes are defined by using "attr"
        - syntax:
            - [attr.attributeName] = "dynamicvalue"
             - <table [attr.height] = "tableHeight>

        Note:
        Above 3 machinisms like
         - Interpolation
         - Property Binding
         - Attribute Binding those are used to get the data from component to the template(html).
       -  But If we want to share the data from template to the component we use "Event Binding".

    -   () - Event Binding:
        -  When user Interacts the application in the form of a keyboard, mouse over, mouse out, click, dbl click, then internally It is called an action and that is technically an Event.
        - An Event is an action performed by the user.
        - When an evnet is happen we have to handle it with the help of event handlers, those are nothing but functions.
        - Example: mouse,keyboard,click,change,form etc.
        - In Javascript all event are supported in angular
        - In angular event Binding is represented with "()"

    - In JS : <button onclick="f1()">Click Me</Button>
    - In Angular : <button (click)="F1()">Click Me</button>
    -   [(ngModel)]


# Two-way Data Binding:
- It is used to modify the data , when user modifies in HTML template to the component and vice versa.
 - Template         <=>    component
- It is the combination of Attribute - [] and Event Binding - ()
- So that we are implementing two way data binding by using "[(ngModel)]".
- [(ngModel)] is pre-defined type which is availabel in "FormsModule"
- We can apply the [(ngModel)] only for form elements.

# Directives:
- Angular directives are used to change the behaviour and also used to add/remove the html elements at runtime.
- Directive which is also a typescript class, we use @Directive() to create it.
- we have 3 types of directives
    - Structural Directives
        - It is used to change the appearence of the DOM by adding or removing the HTML elements.
        - *ngIf, *ngFor, and  ngSwitch
    - Behavioural Directives
        - It is used to change the appearence by adding or removing the css styles.
        - [ngStyle] and [ngClass]
    - Component Directives
        - These are directives which comes with templates.
        - <app-login></app-login>

# *ngIf:
    -   It is a structural directive which will be used to add/remove based on the boolean value.
    - syntax:
     <element *ngif="true/fase"></element>
- *ngIF then:
- It is an alternative code block, which is used to display the content when condition returns false.
- Here else block can be represented with "theb".
- Syntax:     true/false
 - <div *ngIf="expression" ; then thenBlock else elseBlock></div>
 -  <ng-template #thenBlock>
    ...HTML
    </ng-template>
    <ng-template #elseBlock>
    ...HTML
    </ng-template>

        # Run the project
        - ng s -o --project=DirectivesDemo

# Content-Projection:
- It is a technique where templates are configured explicitly and renders into the component according to the conditions.
- Issue is creating and rendering dynamically will take more time
- To overcome above issue we use "NgSwitch".

# NgSwitch:
- Here we can define more template in UI.
- And also content-projection is not required.
- NgSwitch can select the template that matches the given condition and also renders in UI.
 - ngSwitch
 - ngSwitchCase
 - ngSwitchDefault

- syntax:
 - <parent [ngSwitch] = "condition">
        <childcontainer *ngSwitchCase="case1">HTML</childContainer>
                <childcontainer *ngSwitchCase="case1">HTML<childContainer>
                        <childcontainer *ngSwitchCase="case2">HTML<childContainer>
                                <childcontainer *ngSwitchCase="case2">HTML</childContainer>
                <childcontainer *ngSwitchCase="case3">HTML</childContainer>                        
    <parent>


# *ngFor:
 
- It is a repeater, used to repeat any HTML element based on the collection.
- Internallay *ngFor directive is using for..of
- It will iterate the elements based on the collection items;
    - <div *ngFor="let item of collectin">{{item}}</div>


- var courses = ["c#.net","asp.net core","angular","reactjs"];
  - c#.Net        - courses[0]
  - ASP.Net core  - courses[1]
  - Angular       - courses[2]
  - ReactJS       - courses[3]

- for..of: It is uses to get the values
- for..in: It is used to get the key (index)

- for(var item of courses){
    <li>item</li>
}
- for(var item in courses){
    <li>courses[item]</li>
}


# Fetching the data from online API endpoints and display with *ngFor:
- Inorder to fetch the data from the API endpoint, we use a method i.e fetch() from Javascript.
- Syntax is:
 - fetch('url')  / api for the get request
  .then(response=>response.json())
  .then(data=>console.log(data))

# *ngFor Properties:
- *ngFor is used to generate the HTML dynamically based on the collection items
- Syntax:
 - <div *ngFor="let item of collection"></div>

# Property           type       Description
- Index              number     It returns the index of the repeting element.
- first              boolean    It true, if the repeating element is first element.
- last               boolean    it true, if the repeating element is last element
- even               boolean    it true , if the repeating element is an even element
- odd                boolean    it true , if the repeating elemnet is an odd element.

# - trackBy()          function    It tracks the changes for the collection and iterate only those changes

EmpID   Ename     Salary
101     Srikanth  12345
102     Raju      28394

[GetData] => Get the updated data

EmpID     Ename     Salary
101       Srikanth   12839
102       Raju       28398
103       Bhanu      78983