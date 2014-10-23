/*global describe, it*/
'use strict';

var fs = require('fs'),
should = require('should');

require('mocha');

delete require.cache[require.resolve('../')];

var gutil = require('gulp-util'),
wpstylecss = require('../');

describe('gulp-wpstylecss', function () {
  it('should produce expected file from package.json', function (done) {
    var expectedFile = new gutil.File({
      path: 'style.css',
      cwd: null,
      base: null,
      contents: fs.readFileSync('test/expected/default.style.css')
    });

    var stream = wpstylecss();

    stream.on('error', function (err) {
      should.exist(err);
      done(err);
    });

    stream.on('data', function (newFile) {
      should.exist(newFile);
      should.exist(newFile.contents);

      String(newFile.path).should.equal(String(expectedFile.path));
      String(newFile.cwd).should.equal(String(expectedFile.cwd));
      String(newFile.base).should.equal(String(expectedFile.base));
      String(newFile.contents).should.equal(String(expectedFile.contents));

      done();
    });
  });

  it('should produce expected file via stream', function (done) {
    var expectedFile = new gutil.File({
      path: 'PATH',
      cwd: null,
      base: null,
      contents: fs.readFileSync('test/expected/custom.style.css')
    });

    var stream = wpstylecss({
      path: 'PATH',
      name: 'THEME_NAME',
      description: 'DESCRIPTION',
      version: 'VERSION',
      uri: 'THEME_URI',
      tags: ['TAG1', 'TAG2', 'TAG3'],
      author: 'AUTHOR',
      authorUri: 'AUTHOR_URI',
      license: 'LICENSE',
      licenseUri: 'LICENSE_URI'
    });

    stream.on('error', function (err) {
      should.exist(err);
      done(err);
    });

    stream.on('data', function (newFile) {
      should.exist(newFile);
      should.exist(newFile.contents);

      String(newFile.path).should.equal(String(expectedFile.path));
      String(newFile.cwd).should.equal(String(expectedFile.cwd));
      String(newFile.base).should.equal(String(expectedFile.base));
      String(newFile.contents).should.equal(String(expectedFile.contents));

      done();
    });
  });

});
