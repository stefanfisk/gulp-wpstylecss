var fs = require('fs');
var Readable = require('stream').Readable;
var gutil = require('gulp-util');
var _ = require('lodash');
var _s = require('underscore.string');

var pkg = JSON.parse(fs.readFileSync('package.json', {encoding: 'utf8'}));

module.exports = function (options) {
  'use strict';

  options = _.defaults(options || {}, {
    path: 'style.css',
    name: _s.titleize(_s.humanize(pkg.name)),
    description: pkg.description,
    version: pkg.version,
    uri: pkg.homepage,
    tags: pkg.keywords,
    author: pkg.author.name,
    authorUri: pkg.author.url,
    license: pkg.license,
    licenseUri: null
  });

  if (!options.path) {
    throw new gutil.PluginError('gulp-wpstylecss', '`path` is required!');
  }

  if (!options.name) {
    throw new gutil.PluginError('gulp-wpstylecss', '`name` is required!');
  }

  /*
  Theme Name:     <%= options.name %>
  Description:    <%= options.description %>
  Version:        <%= options.version %>
  Theme URI:      <%= options.homepage %>
  Tags:           <%= options.keywords %>
  Author:         <%= options.author.name %>
  Author URI:     <%= options.author.url %>
  License:        <%= options.license %>
  License URI:    <%= options.licenseUri %>
  */
  var contents = '/*\n';

  contents += 'Theme Name:     ' + options.name + '\n';

  if (options.description) {
    contents += 'Description:    ' + options.description + '\n';
  }
  if (options.version) {
    contents += 'Version:        ' + options.version + '\n';
  }
  if (options.uri) {
    contents += 'Theme URI:      ' + options.uri + '\n';
  }
  if (options.tags) {
    contents += 'Tags:           ' + options.tags + '\n';
  }
  if (options.author) {
    contents += 'Author:         ' + options.author + '\n';
  }
  if (options.authorUri) {
    contents += 'Author URI:     ' + options.authorUri + '\n';
  }
  if (options.license) {
    contents += 'License:        ' + options.license + '\n';
  }
  if (options.licenseUri) {
    contents += 'License URI:    ' + options.licenseUri + '\n';
  }

  contents += '*/\n';

  var stream = new Readable({objectMode: true});

  stream.push(new gutil.File({
    path: options.path,
    contents: new Buffer(contents, 'utf8')
  }));

  stream.push(null);

  return stream;
};
