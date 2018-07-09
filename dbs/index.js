const MongoClient = require('mongodb').MongoClient

// Note: A production application should not expose database credentials in plain text.
// For strategies on handling credentials, visit 12factor: https://12factor.net/config.
const PROD_URI = 'mongodb://mikaelahensen:bkh13097@ds125031.mlab.com:25031/sandbox'

function connect(url) {
  return MongoClient.connect(url).then(client => client.db())
}

module.exports = async function() {
  let databases = await Promise.all([connect(PROD_URI)])

  return {
    sandbox: databases[0]
  }
}
