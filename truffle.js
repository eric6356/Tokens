module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 9545,
      network_id: 5777,
    },
    rinkeby: {
      host: 'localhost',
      port: 8545,
      network_id: 4,
      from: '0x5Cc5eB1c6341480d303e3b74Aac3eE2260342F5d',
    },
  },
};
