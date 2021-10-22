var libertyWallet = require('./lib/wallet');
var Wallet = new libertyWallet(hostname, port, user, pass);

// examples

/*Wallet.create_wallet('liberty_wallet', 'root', 'English').then(function(result) {
    console.log(result);
});*/

Wallet.open_wallet('liberty_wallet', 'root').then((result) => {
    console.log(result);
});

// Wallet.generate_from_keys(0, 'walletname', 'publickey', 'viewkey', 'spendkey', 'root', true).then((result) => {
//     console.log(result);
// });

/*Wallet.restore_deterministic_wallet('walletname', 'root', 'seeds', '', true).then((result) => {
    console.log(result);
});*/

// Wallet.address().then((result) => {
//     console.log(result);
// });

Wallet.balance().then((result) => {
    console.log(result);
});

Wallet.transfer({ amount: 1, address: 'address' }).then((result) => {
    console.log(result);
});

/*Wallet.get_spend_proof('txid').then((result) => {
    console.log(result);
});*/

// Wallet.check_spend_proof('txid', 'spendproof').then((result) => {
//     console.log(result);
// });

Wallet.close_wallet().then((result) => {
    console.log(result);
});