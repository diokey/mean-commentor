'use strict';

describe('Main View', function() {
  var page;

  beforeEach(function() {
    browser.get('/');
    page = require('./main.po');
  });

  it('should have video iframe and empty comment form', function() {
    expect(page.iFrame.getAttribute('src')).toBe('http://www.youtube.com/embed/DcJFdCmN98s');
    expect(page.submitBtn.getText()).toBe('Post');
    expect((page.commentBox.getText())).toBe('');
  });
});

