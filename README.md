# Javascript-From-zero-to-hero

# What is Javascript?

- is a language,cross-platform,object-oriented computer programming language
- Javascript is one of the three core technologies of web development
- Today Javascript can be used in different places 
    - client side : Javascript was traditionally only used in the browser
    - server side : Thanks to NodeJS, we can use Javascript on the server as well
- Javascript is what made modern web-development possible:
    - Dynamic effects and interactivity
    - Modern web Applications that we can interact with 
- Frameworks/libraries like React and Angular are 100% based on Javascript: you need to master Javascript in order to use them 

# Primitive Javascript Data Types

- Number : Floating point numbers, for decimals and integers
- String : Sequence of characters, used for text
- Boolean : Logical Data Type that can only be true or false
- Undefined : Data Type of a variable that does not have a value yet
- Null : Also means 'non-existent'

Javascript has dynamic typing: data types are automatically assigned to variables 

# Javascript Engine

Javascript is always hosted in some environment and that is most typically a browser such as Google Chrome, Firefoc e.t.c
This is where javascript runs there can also be other hosts such as NodeJs Web server or even some applications that accept 
Javascript code input , we will , always just focus on the browser in this course.

So when we write the javascript code ther's a lot of stuff happening behind the scenes 
So what happens is that the host where JavaScript is hosted has some kind of JavaScript Engine  that takes our code and execute it 
So in very simple terms  a JavaScript Engine is a program that executes JavaScript code there are many different engines out there 
like Google V8 engine, that is used in google chrome 

The first thing that happens inside the engine is that our code is parsed by a parser which basically reads our code line by line 
and checks if the syntax of the code that we gave it, is correct so this means that the parser knows the js rules 
If everything is ok parser produce a Data Structure known as Abstract Syntax Tree which is then translated into machine code 
So the code is a set of instructions that can be executed directly by the computer's processor 

# Execution context

A box, a container, or a wrapper which stores variables and in which a piece of our code is executed
The deafult execution context is always the global context 
Global Execution Context is for variables and functions that are not inside of any function 
Code that is not inside any function associated with the global object 
In the browser, that's the window object 
So everything that we declare in the global context automatically gets attached to the window object in the browser
declaring a variable called lastname 

lastName === window.lastName
// True 

So the Global Execution Context is for code that is not inside of any function 
But what about code that is in functions ?

Function Declaration is also on global context 

Global Execution Context -> Execution Context

Execution Context Object
Variable Object (VO)
Scope chain
"This" variable


THE VARIABLE OBJECT

    -> The argument object is created, containing all the arguments that were passed into the function
    
    -> Code is scanned for function declarations: for each function, a property is created in the Variable Object, pointing to the func
    
    -> Code is scanned for variable declarations: for each variable, a property is created in the Varibale Object, and set to undefined
    
    the 2 above is called HOISTING 
    
the this keyword points at the global object,(the window object, in the browser)

- I create all my projects with help of the udemy instructor : Jonas Schmedtmann

# An Overview of modern JavaScript
                                                    
 - So the way that we write JavaScript has changed tremendously during the last couple of years. Today we compile ES6, and even newes
   JavaScript versions, down to ES5 we use module bundlers, task runners, external packages, and other dev tools.
   So, up until this point , we have always coded JavaScript in the old way. But this will change at this moment by using 
   JavaScript with the more modern, real world way.
   
 - Modern JavaScript is not so much about the language itself. But it's more about the whole JavaScript Ecosystem, and environment that 
   we use to write it in.So we still write the exact same JavaScript but we use it together with a set of tools that make it easier and 
   better to work with. And the foundation of all these tools is the Node Js ans NPM ecosystem.
   Where we can find all kind of third party open source tools and libraries and frameworks needed for modern web development 
   And with libraries and frameworks that means stuff like React, Angular, or libaries like Lodash, or even Jquery.
   Then we also have development tools, like for task automations, automatic browser reloading, or to compile JavaScript down to ES5.
   Now in order to use and share these packages, we need some kind of tool to install and to manage them. And that's where the node
   package manager, or NPM, comes in .
   So NPM is just a simple command line interface that allows us to do exactly that. Plus, NPM also allows us to write scripts to use 
   our development tools, but more on that a bit later.
   
- So the first tool that we use in modern Javascript is Babel. In order to convert cutting edge JavaScript like ES6, ES7, or even ES8,
  which together are simply called ESNext, back to ES5. So if all browsers are capable of understanding our code.
  In a couple of years, this might no longer be necessary, but for now, this is an important step in our development process
  
- Next up we want to use ES6 modules in order to make our code more modular and therefore, easier to maintain
  By seperating different parts of our app into different files and ES6 brought us exactly that possibility 
  by implementing modules.
  Problem with these modules is that browsers does not support this functionality yet.And so we have to bundle these modules together
  into a single file using something called a module bundler, and the most popular one out there is called WebPack.
  
- WebPack can do so much more than bundling modules like codesplitting, loading menu types of assets like sas or images, decreasing 
  our JS bundle size using an algorithm called treeshaking  and much much more.In this project we will use WebPack just to bundle
   all the modules together.
   
- WebPack and Babel is NPM packages and the easiest way to run these packages is by using something called NPM scripts

- Putting it all together with an automated development setup powered by NPM Scripts 

- We have two types of Node.js packages: 1) libraries and frameworks and stuff like that
                                         2) Development tools
                                         
- Libraries like React and Jquery for example are really dependencies because we use this code in our product, in our app
  
- Something like webpack, this is really just a development tool so it save in devDependencies in the .json file

- In order to install webpack : npm install webpack --save-dev

- In order to install jquery: npm install jquery --save

    this will save as dependencies in json file
    
- So .json file has all of these information listing all of the packages, so all of the dependencies that we use in our project.
  And that's very important because if you were to move this project to another computer or work with another person on the 
  same project, then everyone's on the same page. So everyone knows which dependency we're using in our app.
  it's also important because it allows us to install all of these dependencies here automatically 
  
- We can find the dependencies of jquery and webpack depedencies in node_modules.
  Now if we went to share our entire project here with someone else we wouldn't have to share this, this huge folder here
  node_modules which have thousands and thousands of files. We really wouldn't need to share. All we need to share is this package.json 
  file which has this information about our dependencies.
  
- Uninstall packages : npm uninstall jquery --save

- NOTE ! ! !
    
    The packages that we installed here with the "--save-dev" and "--save" options, they are locally installed 
    only for this project 
    
 - Note2 ! ! !
    
    But we can install packages globally, in order to make them accesible from everywhere on our computer.
    In order to make webpack accesible from everywhere, we could also do that.
    We can do that with another package which called "Live Server" which package allows us to create a very simple and local webserver
    to serve some statics websites.
    
- Install live Server : npm install live-server --global

- Run live Server with the follow command: live-server

- DevDependencies : tools that we use for development 

- Real Dependencies: code that is actually used in our app

- If we build a React App we need to use the React API, and so it's going to be a real dependency.

- Besides these two locally installed packages ( DevDependencies and Real Dependencies) we have the global packages 
  which installed using the "--global" flag here in the command line or "-g".
  
# Node JS

- Node is an open source and cross-platform runtime environment for executing Javascript code outside of a browser , quite often we use 
  node to build back-end services also called APIs or Application Programming Interfaces these are the services that power our client
  applications like a web app running inside of a web browser or mobile app running on a mobile device these client apps are simply 
  what the users sees and interacts with they are just the surface they need to talk to some services sitting on the server or in the 
  cloud to store data send emails or push notifications kick off workflows and so on.
  
- Node is ideal for bulding Highly - Scalable, Data - Intensive, and real time back-end services that power our client applications

- Advantages of NodeJS

    - Great for prototyping and agile development
    - Superfast and highly Scalable
    - Javascript everywhere
    - Cleaner and more consistent codebase
    - Large ecosystem of open-source libs 
    
# Node Architecture 

- Node is a runtime environment for executing Javascript code 
  Before node we use JS only to build applications that run inside of a browser so every browser out there has a JS Engine
  that takes our JS Code and converts to Machine Code ... For exampe FIrefox uses SpiderMonkey and GoogleChrome uses v8 engine
  because these different varieties of engines ...js code behave differently in one browser or another 
  Browser provides a runtime environment for JavaScript code 
  In a browser we have the window or the document object -> document.getElementById('');
  
  In 2009 Ryan Dahl takes google v8 Engine which is the fastest JS Engine and embedded it inside a C++ programm and called that programm   Node
  
  Node is a programm that includes the v8 JavaScript Engine plus some additional modules that give us capabilities not available inside
  browsers we can work with the file system or the network and so on both node and chrome share the same JS Engine but provide different 
  runtime environments for JS 
  
  Node is not a programming Language ! ! !
  Node is not a framework ! ! !
  Node it's a runtime environment for executing JavaScript code ! ! !
  
# How Node Works 

   Earlier i mentioned that node is Highly-Scalable, data-intensive and real time apps because of the non-blocking or asynchronous          nature of node what we mean by asynchronous? 
   
   Let me give a metaphor : Imagine you go to a restaurant a waiter comes to your table takes your order and gives it to the kitchen
   then move to serve another table while the sef is preparing your meal so the same person can serve many different tables they don't
   have to wait for the chef to cook one meal before they serve another table this is what we call : non - blocking or 
   ASYNCHRONOUS architecture and this how NODE Applications work . The Waiter is like a Thread allocated to handle a request 
   So a single thread is used to handle multiple requests in contrast to non-blocking we have blockin or sychronous architecture
   
   When we receive a request on the server a thread is allocated to handle that request as part of handling this requests it is likely 
   that we are querying a database and as you know sometimes it may take a little while until the result is ready when database is          executing the query , the thread is sitting there waiting it can't be used to serve another client so we need a new thread to 
   serve another client . Imagine what will happen if we have a large number of concurrent clients at some point we are going to 
   run out of threads to serve these clients . So new client have to wait until three threads are available or if we want not wait we 
   need to add more hardware so with this kind of architecture we are not utilize our resources efficiently this is the problem with 
   blocking architecture this is how applications work with frameworks like asp.net . With asp.net you can use asynchronous architecture
   but you must do extra work for that 
   
   In contrast node applications are asynchronous by default so you don't have to do anything extra. In Node we have a singkle thread to 
   handle all requests . While our database executing a query our thread is used to serve another client when the database prepares 
   the result it puts a message in what we call an Event Queue node is continously monitoring this queue in the background when if find 
   an events in this queue it will take it out and process it, this kind of architecture makes node ideal for building applications 
   that include a lot of disk and network access 
   
   Node do not use for CPU intensive apps ! ! !
   
   Node used for data intensive and real time appls ! ! !
   
   In Node we don't have windows or documents objects  ! ! !
   
# Node module system 

  - operating system 
  - file system
  - events
  - http
  
  Global Object : we use console.log(); function to log something on the console console object is what we call a gloabl object 
                  it's part of the global scope which means we can access it anywhere 
                  
                  We have setTimeout() function which is globally available we can use it inside of a browser or inside of node 
                  We have also clearTimeout() 
                  We also have setInterval() which use to repeatedly call a function after a given delay 
                  These is the global Objects In JS.
                  
                  In node we have a couple of other global objects 
                  
                  In browsers we have window object which represent our global scope 
                  
                  All the above functions belong to Window object 
                  
                  Window.setTimeout() = setTimeout()(Directly call) 
                  
                  var message = '';
                  window.message
                  
                  In node we don't have window object , we have global object , so all the above functions we can access through the 
                  global Object 
                  
                  global.setTimeout() and so on...
                  
                  NOTE ! ! !
                  
                    variables such as var message = ''; are not access by global
                                   so console.log(global.message) => result undefined...
                                   
                    the message variable are not added to the global object they are only scoped to the current file app.js for example
                    so not available outside of this file and this is because node modular system 
 
- When we define a functionn for exmaple when we define a function like say... var sayHello = function(){
                                                                                
                                                                                }
                                                                                
                                                                                is added to the global scope and it's available 
                                                                                via the window object 
                                                                                
                                                                                window.sayHello();
  
 
 - There is a problem with this behaviour in areal world application we often split our JS code into multiple files so it is 
   possible that we have two files and in both these files we define thsi function sayHello() with the exact same name because this 
   function is added to the global scope when we define this function in another file that new definition is going to ovrwrite the 
   previous definition so this is the problem with the global scope 
   
 - So in order to build reliable and maintainable applications we should avoid defining variables and functions in the globale scope
   instead we need modularity we nedd to create small building blocks or modules where we define our variables and functions 
   so two variables with the same function and the same name don't overwrite another variable or functin defined somewhere else
   that encapsulated inside of that module 
   
 - Now at the code of node we have this concept called module so every file in a node application is considered a module the variables 
   and functions would define in that file or that module are scoped to that file , in object-oriented programming terms we say there 
   are private key they are not available outside that container outside that module . If you want to use a function or variable that 
   defined in one module ... outside of this module you need to explicity export it and make it public 
   
   NOTE ! ! ! 
    Every Node Application has at least one file or one module which we call a main module 
    
    If we try to print the module on the screen which will be the result?
    
        console.log(module);
        
        cmd-> node app.js
        
        result -> Module {
                             id: '.',
                             path: 'C:\\Users\\sptom\\firstapp',
                             exports: {},
                             parent: null,
                             filename: 'C:\\Users\\sptom\\firstapp\\app.js',
                             loaded: false,
                             children: [],
                             paths: [
                                     'C:\\Users\\sptom\\firstapp\\node_modules',
                                     'C:\\Users\\sptom\\node_modules',
                                     'C:\\Users\\node_modules',
                                     'C:\\node_modules'
                            ]
                    }
                    
- We have an object MODULE is a json object with these key value : pairs so we have ID , every module has an id or a unique identifier
  we have exports , parent , filename which is the complete path to that file loaded, which determines if boolean is loaded or not 
  we have children and paths 
  
- In the NODE every file is a module and the variables and functins defined in that file are scoped to that module they are not
  available outside of that module 
  
 - There are tools like jshint that we can scan all our JavaScript code for errors like that 
 
 - Module Wrapper Function : Is the function that take arguments and run during the runtime of our programm
 
 # Install Globally 
    
   - npm install live-server --global
   
# Angular

- Angular is a JavaScript Framework which allows you to create reactive Single-Page-Applications (SPAs)

- A Single Page Application (SPA) is an application like the one shown here , you can navigate around and in the URL,
  you can see that are different pages but in the end our page never changes.It's only one html file and a bunch of 
  JavaScript code we got from the server and everything which you see here , every change, is rendered in the browser.
  So it's gives user a very reactive UX.Every click changes this one single page we're using this one HTML page.
  Well Javascript changes the DOM, changes whatever is displayed here(in the browser),by changing the HTML code during 
  runtime
  
- ng new = command to create a new project 
- Angular uses typescript as superset of javascript , so basically a language tha looks like a bit like JavaScript and is compiled down   to JavaScript in the end, but also have some extra features
- with the command ng-serve i create a development server ...for all the time i develop the project
- Angular is, of course , not a tool to allow us to write static HTML files, it allows us to mix static HTML code and dynamic things
  we want to output in that code and actually, and what we have in our project is all of these components which angular work with 
  app component , component has content which are html , has also styling which is in css file, also has a typescript file
  
- Basics of Angular : 1) What are components?
                      2) What we do with this two-way data binding and how does that all work
                      3) look at components and data binding
                      4) Angular apps are built up from components and data binding is actually how you output data in your DOM or react                          to user events.
                      5) Angular has another key feature Directives, ngModel , which we used with two-wat data binding,actually is such 
                         a directive.
                      6) Services and Dependency injection: Which makes it really easy for you to have your different pieces in tour app
                                                            communicate with each other, to centralize code and to manage the state of 
                                                            your application.
                      7) Routing : we are always on one page since it is a single page application, but to the user it really looked
                                   like one page.With routing, we introduce the management of different URLs so that, to the user,it
                                   looks like we are switching pages even though technically, we will still remain on that single page
                      8) Observables: something which will make more sense once you have been through to the routing section it is a
                                      concept allowing you to work with asynchronous code.
                      9) Forms: Then we will have a look at forms, because handling forms, handling user input is a key task of 
                                almost any application 
                      10) Pipes: Another nice feature which makes it easy for you to transform the output(So what you display on the 
                                 template at runtime).
                      11) Http: What if you need to run out to a web server? What if you want to store some data in a database?
                                Angular can not connect to a database directly, but it can connect to a server which is able to and 
                                the Http Section 
                      12) Authentication: 
                      13) Optimizations and Ng Modules
                      14) Deployment
                      15) Animation and Testing
                      
# TypeScript

- Is really a superset of javaScript it offers more features than vanilla JS like classes , interfaces, types
  TypeScript doesn't run in the browser, so it's compiled to JS in the end, this compilation is handled by the cli
  Angular is meant to used together with Typescript.

- We download a css framework bootstrap 3 with the command : npm install --save bootstrap@3

- We must do angular aware of this framework

- spec files used for testing

- with the command --ng generate component servers-- ... you generate another component

- you need to have at least one template in a component.

# What is DataBinding ?

-   You could basically translate data binding with communication. Communication between your Typescript code of your component, your
    business logic and the templates, so what the user sees because you might have some result in your TypeScript code because you 
    fetched something from a server or finished some calculation.
    
-   We get different ways of communication now, for example we want to output data from our TypeScript code in the HTML code in the
    template. We can use string interpolation for this, or property binding 
    
-   Sometimes though, the other direction is interesting too, if the user clicks a button, you can kind of think of the user 
    clicking the button on the template because again the template is the thing with which the user interacts, which he sees
    and where he is aldo able to click buttons. So if we click a button, we maybe want to trigger something in our TypeScript Code
    , so we need the other direction and we can get this other direction, we can react to user events with event binding. So we can bind 
    to for example a click event to execute some code whenever it occurs and we also have one additional form of data binding where we
    combine both directions, two-way data binding, where we are able to react events and output something at the same time.
    
- The signal that we use Event Binding is parenthesses ()

- input and click are default events provided by the DOM and they ship some data when they are fired, the click event gives us an 
  object which for example holds the coordinates where we clicked.Input event also gives us some data, some information about the
  event.Now we can capture this data with $event reserved word which gives us access to event data.
  
  
- Important ! ! !
                    - To be able to use 'ngModel', the FormsModule(from @angular/forms) needs to be added to your imports[] array
                      in the AppModule( should be there by default in a CLI Project)!
 



  









