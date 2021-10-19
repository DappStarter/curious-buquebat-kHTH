require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process olympic ten fire note mean purchase install climb obscure trial'; 
let testAccounts = [
"0x66c3caa85a0852a9ad6dcb725ea20620b59682bc95b51e63e1b446d4f639178b",
"0x348da9c211a2097ae2b2104351fee2092c7faded5278164886f691a541d13d12",
"0x66086f6f39efbd306c86afa160527bb342cd5ec42bcda0c7b8d0e0e49a073fa2",
"0x5af9848fb3be1778fa6379bc12ea858423d90295d6babae4741d862eb02d6bb5",
"0x1d7a9886a236ec0dcd600db19a824700b7b555164e96cdad005b65d0ef0bd3f2",
"0x500c344b5d04cb6aea2a334bec4532fde5cf70fdea076f3887d6e71ecf73230d",
"0x2dad9b2cfb96c3341cea4174974abf3a497026633543d7fb4befd6ec013f934a",
"0x89e4997c9cf9f023ab30453145ab0ed1dc7e4e1bb4a83c2fce44ee8396d63027",
"0x306e8fdff86f84b40bfc12ee37f9358113f2b6ac193746c0e1b64a56aadf49c0",
"0x92e8f03045957ad256d3cc843747c9503b8ca133967417f1d2486194f2b1c7ef"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

