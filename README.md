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

#An Overview of modern JavaScript
                                                    
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
    
    








