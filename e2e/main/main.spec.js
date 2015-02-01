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

  it('should should add a new comment', function() {
     var old = page.commentList.count();
     page.commentBox.sendKeys('Some text from protactor');
     page.submitBtn.click();

     var newcount = page.commentList.count();
     expect(old).toBeLessThan(newcount);
  });

  it('should edit previously added comment', function() {
      expect(page.editLink).toBeTruthy();
      page.editLink.click();

      expect(page.commentBox).not.toBe('');

      page.commentBox.sendKeys(page.commentBox.getText()+' some new edits');
      page.submitBtn.click();

      var old = page.commentList.count();
      expect(page.commentList.count()).toBe(old);
  });

});

