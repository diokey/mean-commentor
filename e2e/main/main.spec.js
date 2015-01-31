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
      
    expect(page.commentList.count()).not.toBeLessThan(4);
  });

  it('should should redirect the user to login if not connected', function() {
     var old = page.commentList.count();
     page.commentBox.sendKeys('Some text from protactor');
     page.submitBtn.click();

     var newcount = page.commentList.count();
     expect(old).toBeLessThan(newcount);
  });

});

