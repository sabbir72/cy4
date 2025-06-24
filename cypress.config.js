// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here

      
//     },
//   },
// });

const fs = require('fs')

const config = {
  e2e: {
    setupNodeEvents(on, config) {
      // Optional: Write to file
      on('task', {
        writeErrorLog(msg) {
          fs.appendFileSync('logs/soft-errors.txt', msg + '\n')
          return null
        }
      })
    },
    baseUrl: 'https://stagev15.inctl.net'
  }
}

module.exports = config
