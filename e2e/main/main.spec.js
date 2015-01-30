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

  it('should at leat have a comment placeholder', function() {
      
    expect(page.commentList.length).not.toBeLessThan(0);
  });

  it('should add a comment in the comment list', function() {
     var old = page.commentList.length;
     console.log(old);
     page.commentBox.sendKeys('Some text from protactor');
     page.submitBtn.click();
     console.log('new lenght');
     console.log(page.commentList.length);
     expect(page.commentList.length).not.toBeLessThan(old);
  });

});

