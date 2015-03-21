# generator-owin-static [![Build Status](https://secure.travis-ci.org/olohmann/generator-owin-static.png?branch=master)](https://travis-ci.org/olohmann/generator-owin-static)

> A [Yeoman](http://yeoman.io) generator to create a minimal [OWIN](http://owin.org/)-based .NET Web application with its NuGet dependencies, project and solution files.

The server uses the OWIN host package and the static file handler middleware instead of IIS Express. The purpose of this tiny project template is to have a quick start for doing demos and samples of static web applications in Visual Studio. 

## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

### Yeoman Generators

To install generator-owin-static from npm, run:

```bash
npm install -g generator-owin-static
```

Finally, initiate the generator:

```bash
yo owin-static
```

### Getting To Know Yeoman

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

## License

MIT
