'use strict';

describe('Login page', function() {
   var page; 

   beforeEach(function(){
       browser.get('/login');
       page = require('./login.po');
   });
});
