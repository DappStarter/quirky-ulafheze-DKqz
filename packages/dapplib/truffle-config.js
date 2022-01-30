require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name rival ranch coast half cloth off gasp'; 
let testAccounts = [
"0x4e64b511dc3a62ae0e616880c07ea934facdda81d355054b4d277e6715551436",
"0x097900fb041338878cebb1cad744f5a96bc889f07dc2f4317e4f595c85db7f5f",
"0xbfa90e599137f319ac5c025e13a73faadab5037dd15da88afe3f06bc1ee80f2b",
"0x55da4ca194583aa7218c491ae8e7f51d2fe232dfd31d45bcb8e0e8e776622d33",
"0x7ca7aeebe118f42b82d853b805a5725a9596b7ecfa213109f435224c5092a436",
"0xf93e6f48fa79b3d5f6b1568a07022097b18c25b591e082b9d06ba28a8371a2ab",
"0x5bbc25f54253f98f207ccabdfb19b9859eb61f15ef8da8c7aa484da39f8da031",
"0x72f897613d4bf6b2d17018ca2dea9d0ccdd4b71d44876ef9674033bd2cfe8d61",
"0xb8e9b0e417ae86f8361635cf89b370754d6c7c59d7d012971bb2933233da2364",
"0x62584bdbfd0c8b1d64f31cae75a8cee2aa50225ec813dc6ec764140c63330bc5"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

