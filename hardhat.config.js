// https://eth-ropsten.alchemyapi.io/v2/S_BxSnFZ2Aejncw6L3ulSvTUamOFZCAV

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/S_BxSnFZ2Aejncw6L3ulSvTUamOFZCAV',
      accounts: ['79633febc1b3846e1b0e38c106e95f102ed10c66640eedb1ecf92695cff6f35a'],
    },
  },
};
