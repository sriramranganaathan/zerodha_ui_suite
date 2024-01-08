const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        generateOtp: require("totp-generator")
      })
    },
    baseUrl: 'https://kite.zerodha.com'
  },
  video: true
});
