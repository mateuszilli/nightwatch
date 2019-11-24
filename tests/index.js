var environment = require('../environment.json');

module.exports = {
  'Primeiro passo' : function (browser) {
    browser
      .url('https://github.com/login')
      .pause(5000);
  },
  'Segundo passo' : function (browser) {
    browser
      .setValue('input[type=text]', environment.username)
      .pause(250)
      .setValue('input[type=password]', environment.password)
      .pause(250)
      .click('input[type=submit]')
      .pause(5000);
  },
  'Terceiro passo' : function (browser) {
    browser
      .setValue('input[type=text][name=q]', ['nightwatchjs/nightwatch', browser.Keys.ENTER])
      .pause(250)
      .click('ul li div.mt-n1 a')
      .pause(5000);
  },
  'Quarto passo' : function (browser) {
    browser
      .click('details.get-repo-select-menu summary')
      .pause(250)
      .click('a.get-repo-btn')
      .pause(5000)
      .end();
  }
};
