(PLUGIN AUTHOR: Please read [Plugin README conventions](https://github.com/wearefractal/gulp/wiki/Plugin-README-Conventions), then delete this line)

# gulp-wpstylecss
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> wpstylecss plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-wpstylecss` as a development dependency:

```shell
npm install --save-dev gulp-wpstylecss
```

Then, add it to your `gulpfile.js`:

```javascript
var wpstylecss = require("gulp-wpstylecss");

gulp.src("./src/*.ext")
	.pipe(wpstylecss({
		msg: "Hello Gulp!"
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### wpstylecss(options)

#### options.msg
Type: `String`  
Default: `Hello World`

The message you wish to attach to file.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-wpstylecss
[npm-image]: https://badge.fury.io/js/gulp-wpstylecss.png

[travis-url]: http://travis-ci.org/stefanfisk/gulp-wpstylecss
[travis-image]: https://secure.travis-ci.org/stefanfisk/gulp-wpstylecss.png?branch=master

[coveralls-url]: https://coveralls.io/r/stefanfisk/gulp-wpstylecss
[coveralls-image]: https://coveralls.io/repos/stefanfisk/gulp-wpstylecss/badge.png

[depstat-url]: https://david-dm.org/stefanfisk/gulp-wpstylecss
[depstat-image]: https://david-dm.org/stefanfisk/gulp-wpstylecss.png
