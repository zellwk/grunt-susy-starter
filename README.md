
# Grunt Susy Starter w/ BrowserSync

A starter project template that uses LibSass to compile Sass, Susy 2 and  Breakpoint with Grunt.  Automatic refreshing in the browser is done through [BrowserSync](www.browsersync.io). 

This makes a super simple, reliable starter to compile blazing fast Sass and design in browser with the Susy 2 grid engine.  Feel free to build from here to create your own custom front end setup with additional [Grunt plugins](http://gruntjs.com/plugins)!

## Project Features:

* [Grunt](http://gruntjs.com/) task running
* [Susy 2](http://susy.oddbird.net/) grid engine
* [breakpoint-sass](http://breakpoint-sass.com/) breakpoint syntax
* Auto browser refresh with BrowserSync 

Detailed instructions on how this template is set up can be found at [http://www.zell-weekeat.com/grunt-sass-with-susy/](http://www.zell-weekeat.com/grunt-sass-with-susy/)

## Project Setup  

1. Clone the repo 

~~~
git clone https://github.com/zellwk/grunt-susy-starter.git
~~~

2. Install Node dependencies 

~~~
$ npm install
~~~

3. Install Bower dependencies

~~~
$ bower install
~~~

## Usage 

The gruntfile in this project is setup to run `grunt-sass`,  `grunt-browser-sync` and `grunt-contrib-watch`.

Use the `grunt` command to start the process. 

~~~
$ grunt
~~~

That's it!