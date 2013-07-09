
var Browser = require('zombie');
var assert = require('assert');

var host = 'http://localhost';
var path = '/nf-searchbox/';
var action = '/';

describe('searchBox page', function () {
  before(function() {
    this.browser = new Browser({ site: host });
  });
  before(function (done) {
    this.browser.visit(path, done);
  });

  it('shoud exist url', function (done) {
    assert.ok(this.browser.success);
    done();
  });

  it('shoud have a searchbox form', function (done) {
    assert(this.browser.query('.nf-sbform'));
    assert(this.browser.query('.nf-sbform input[type="text"]'));
    assert(this.browser.query('.nf-sbform input[type="submit"]'));
    done();
  });
});

describe('searchBox form', function () {
  before(function() {
    this.browser = new Browser({ site: host });
  });
  before(function (done) {
    this.browser.visit(path, done);
  });

  it('should start closed', function (done) {
    assert(this.browser.query('.nf-sbform'));
    assert(!this.browser.query('.nf-sbform.nf-sbopen'));
    done();
  });

  it('should open when you click mag', function (done) {
    var browser = this.browser;
    browser.pressButton('.nf-sbform input[type="submit"]', function () {
      assert(browser.query('.nf-sbform.nf-sbopen'));
      done();
    });
  });

  it('should close when you click twice', function (done) {
    var browser = this.browser;
    browser.pressButton('.nf-sbform input[type="submit"]', function () {
      assert(browser.query('.nf-sbform'));
      assert(!browser.query('.nf-sbform.nf-sbopen'));
      done();
    });
  });

  it('close when it loses focus', function (done) {
    var browser = this.browser;
    browser.pressButton('.nf-sbform input[type="submit"]', function () {
      assert(browser.query('.nf-sbform.nf-sbopen'));
      browser
        .fill('.nf-sbform input[type="text"]', 'string to search')
        .pressButton('#extra_button', function () {
          assert(browser.query('.nf-sbform'));
          assert(!browser.query('.nf-sbform.nf-sbopen'));
          done();
        });
    });
  });

  it('should not submit the form if there isn\'t text', function (done) {
    var browser = this.browser;
    browser.pressButton('.nf-sbform input[type="submit"]', function () {
      assert(browser.query('.nf-sbform.nf-sbopen'));
      browser
        .fill('.nf-sbform input[type="text"]', '')
        .pressButton('.nf-sbform input[type="submit"]', function () {
          assert.equal(browser.location.pathname, path);
          assert(browser.query('.nf-sbform'));
          assert(!browser.query('.nf-sbform.nf-sbopen'));
          done();
        });
    });
  });

  it('should submit the form if there is text', function (done) {
    var browser = this.browser;
    browser.pressButton('.nf-sbform input[type="submit"]', function () {
      assert(browser.query('.nf-sbform.nf-sbopen'));
      browser
        .fill('.nf-sbform input[type="text"]', 'string to search')
        .pressButton('.nf-sbform input[type="submit"]', function () {
          assert.equal(browser.location.pathname, action);
          done();
        });
    });
  });

});
