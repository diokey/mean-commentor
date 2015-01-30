/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.iFrame = element(by.css('iframe'));
  this.commentBox = element(by.model('newComment'));
  this.submitBtn = element(by.css('button[type="submit"]'));
  this.commentList = element.all(by.repeater('comment in comments'));
};

module.exports = new MainPage();

