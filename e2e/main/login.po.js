/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var LoginPage = function () {
   this.emailFieldd = element(by.model('user.email'));
   this.passwordField = element(by.model('user.password'));
   this.loginBtn = element(by.css('.btn-login'));
   this.registerBtn = element(by.css('.btn-register'));
   this.h1El = element(by.css('h1'));
   this.otherErrors = element(by.binding('errors.other'));
};

module.exports = new LoginPage();
