'use strict';

describe('Login page', function() {
   var page; 

   beforeEach(function(){
       browser.get('/login');
       page = require('./login.po');
   });

   it('should display login page', function() {
      expect(page.h1El.getText()).toMatch('Login');
      expect(page.emailFieldd.getText()).toBe('');
      expect(page.passwordField.getText()).toBe('');
      expect(page.loginBtn.getText()).toBe('Login');
      expect(page.registerBtn.getText()).toBe('Register');
   });

   it('should fail to log user in when proviided wrong credentials', function() {
       
   });
});
