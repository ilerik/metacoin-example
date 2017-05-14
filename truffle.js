require('babel-register')

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8546,
      network_id: 'testrpc' // Match any network id
    }
  }
}
