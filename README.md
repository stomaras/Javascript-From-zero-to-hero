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
