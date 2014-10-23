# gulp-wpstylecss
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> Plugin for [gulp](https://github.com/wearefractal/gulp) which generates WordPress theme style.css files from package.json.

## Usage

First, install `gulp-wpstylecss` as a development dependency:

```shell
npm install --save-dev gulp-wpstylecss
```

Then, add it to your `gulpfile.js`:

```javascript
var wpstylecss = require("gulp-wpstylecss");

wpstylecss()
  .pipe(gulp.dest('dist'));
```

## API

### wpstylecss(options)

`pkg` is the contents of the current project's `package.json`.

`_s` is `underscore.string`.

Falsy options will cause the corrosponding field to be omitted from the generated file, except `option.name` which is required.

#### options.name
Type: `String`
Default value: `_s.titleize(_s.humanize(pkg.name))`

The contents of the `Theme Name` field.

#### options.description
Type: `String`
Default value: `pkg.description`

The contents of the `Description` field.

#### options.version
Type: `String`
Default value: `pkg.version`

The contents of the `Version` field.

#### options.uri
Type: `String`
Default value: `pkg.homepage`

The contents of the `Theme URI` field.

#### options.tags
Type: `Array`
Default value: `pkg.keywords`

The contents of the `Tags` field.

#### options.author
Type: `String`
Default value: `pkg.author.name`

The contents of the `Author` field.

#### options.authorUri
Type: `String`
Default value: `pkg.author.url`

The contents of the `Author URI` field.

#### options.license
Type: `String`
Default value: `pkg.license`

The contents of the `License` field.

#### options.licenseUri
Type: `String`
Default value: `null`

The contents of the `License URI` field.

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
