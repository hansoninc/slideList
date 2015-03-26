# jQuery Boilerplate [![Build Status](https://secure.travis-ci.org/jquery-boilerplate/jquery-boilerplate.svg?branch=master)](https://travis-ci.org/jquery-boilerplate/jquery-boilerplate) ![Bower Version](https://badge.fury.io/bo/jquery-boilerplate.svg)

### A jQuery plugin for a sliding list module.

So, you've tried your hand at writing jQuery plugins and you're comfortable putting together something that probably works. Awesome! Thing is, you think there might be better ways you could be writing them - you've seen them done a number of different ways in the wild, but aren't really sure what the differences between these patterns are or how to get started with them.

This project won't seek to provide a perfect solution to every possible pattern, but will attempt to cover a simple template for beginners and above. By using a basic defaults object, simple constructor for assigning the element to work with and extending options with defaults and a lightweight wrapper around the constructor to avoid issues with multiple instantiations.

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.slideList.min.js"></script>
	```

3. Call the plugin:

	```javascript
	$("#element").slideList({
		// the following are defaults but can be modified
		showButton: '#filter',
		forwardButtonClass: '.list-group-item',
		backButtonClass: '.go-back',
		slideClass: '.slide'
	});
	```

## Structure

The basic structure of the project is given in the following way:

```
├── demo/
│   └── index.html
├── dist/
│   ├── jquery.slideList.js
│   └── jquery.slideList.min.js
├── src/
│   └── jquery.slideList.js
├── .editorconfig
├── .gitignore
├── .jshintrc
├── boilerplate.jquery.json
├── Gruntfile.js
└── package.json
```

#### [demo/](https://github.com/hansoninc/slideList/tree/master/demo)

Contains a simple HTML file to demonstrate your plugin.

#### [dist/](https://github.com/hansoninc/slideList/tree/master/dist)

This is where the generated files are stored once Grunt runs.

#### [src/](https://github.com/hansoninc/slideList/tree/master/src)

Contains the files responsible for your plugin, you can choose between JavaScript or CoffeeScript.

#### [.gitignore](https://github.com/hansoninc/slideList/tree/master/.gitignore)

List of files that we don't want Git to track.

> Check this [Git Ignoring Files Guide](https://help.github.com/articles/ignoring-files) for more details.

#### [.jshintrc](https://github.com/hansoninc/slideList/tree/master/.jshintrc)

List of rules used by JSHint to detect errors and potential problems in JavaScript.

> Check [jshint.com](http://jshint.com/about/) if you haven't heard about this project yet.

#### [boilerplate.jquery.json](https://github.com/hansoninc/slideList/tree/master/boilerplate.jquery.json)

Package manifest file used to publish plugins in jQuery Plugin Registry.

> Check this [Package Manifest Guide](http://plugins.jquery.com/docs/package-manifest/) for more details.

#### [Gruntfile.js](https://github.com/hansoninc/slideList/tree/master/Gruntfile.js)

Contains all automated tasks using Grunt.

> Check [gruntjs.com](http://gruntjs.com) if you haven't heard about this project yet.

#### [package.json](https://github.com/hansoninc/slideList/tree/master/package.json)

Specify all dependencies loaded via Node.JS.

> Check [NPM](https://npmjs.org/doc/json.html) for more details.

Check [CONTRIBUTING.md](https://github.com/hansoninc/slideList/blob/master/CONTRIBUTING.md) for more information.

## History

Check [Releases](https://github.com/hansoninc/slideList/releases) for detailed changelog.

## License

[MIT License](http://rickdmer.mit-license.org/) © Richard Carhart
