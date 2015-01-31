'use strict';

describe('Login page', function() {
   var page; 

   beforeEach(function(){
       browser.get('/login');
       page = require('./login.po');
   });

   function logIn(email, password) {   
    page.emailFieldd.sendKeys(email);
    page.passwordField.sendKeys(password);
    page.loginBtn.click();
   }

   it('should display login page', function() { 
      expect(page.h1El.getText()).toMatch('Login');
      expect(page.emailFieldd.getText()).toBe('');
      expect(page.passwordField.getText()).toBe('');
      expect(page.loginBtn.getText()).toBe('Login');
      expect(page.registerBtn.getText()).toBe('Register');
   });

   it('should fail to log user in when proviided wrong credentials', function() {
      
      //error message should be empty at the beginning
      expect(page.otherErrors.getText()).toBeFalsy(); 
     
      login('test@email.com','nopassword');
      
      //an error message should be displayed
      expect(page.otherErrors.getText()).toBeTruthy();
      //no rediretion should happen
      expect(browser.getLocationAbsUrl()).toMatch('/login');

   });

   it('should log user in if the correct credentials are provided', function() {
       
        //error message should be empty at the beginning
        expect(page.otherErrors.getText()).toBeFalsy(); 
       
        login('admin@admin.com','admin');
        
        //no rediretion should happen
        expect(browser.getLocationAbsUrl()).toMatch('/');
   });
});
