'use strict';

describe('Login page', function() {
   var page; 

   beforeEach(function(){
       page = require('./login.po');
   });

   function logIn(email, password) {   
    page.emailFieldd.sendKeys(email);
    page.passwordField.sendKeys(password);
    page.loginBtn.click();
   }

   it('should display login page', function() { 
      browser.get('/login');
      expect(page.h1El.getText()).toMatch('Login');
      expect(page.emailFieldd.getText()).toBe('');
      expect(page.passwordField.getText()).toBe('');
      expect(page.loginBtn.getText()).toBe('Login');
      expect(page.registerBtn.getText()).toBe('Register');
   });

   it('should fail to log user in when proviided wrong credentials', function() {
      
      browser.get('/login');
      //error message should be empty at the beginning
      expect(page.otherErrors.getText()).toBeFalsy(); 
      
      page.emailFieldd.sendKeys('dump@email.com');
      page.passwordField.sendKeys('fakepswd');
      page.loginBtn.click();
      page.emailFieldd.sendKeys('');
      page.passwordField.sendKeys('');
      
      //an error message should be displayed
      expect(page.otherErrors.getText()).toBeTruthy();
      //no rediretion should happen
      expect(browser.getLocationAbsUrl()).toMatch('/login');

   });

   it('should log user in if the correct credentials are provided', function() {
       
        browser.get('/login');
        //error message should be empty at the beginning
        expect(page.otherErrors.getText()).toBeFalsy(); 
        
        page.emailFieldd.sendKeys('admin@admin.com');
        page.passwordField.sendKeys('admin');
        page.loginBtn.click();
        //console.log(page.otherErrors.getText());
        
        //no rediretion should happen
        expect(browser.getLocationAbsUrl()).toMatch('/');
   });
});
