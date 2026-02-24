const A_login_pageSpecs = require("../screenobjects/A_login_page.specs");
const B_map_pageSpecs = require("../screenobjects/B_map_page.specs");
const C_scan_charge_pageSpecs = require("../screenobjects/C_scan_charge_page.specs");
const D_Wallet_pageSpecs = require("../screenobjects/D_Wallet_page.specs");

describe('Wallet',()=>{
     it('Wallet',async()=>{
        await driver.pause(1000);

        console.log('Sucess');  
    });
    it('Click the Wallet button',async()=>{
        await driver.pause(1000);
        await D_Wallet_pageSpecs.wallet.click();
    })
    it('Clcik the Deposite money',async()=>{
        await driver.pause(1000);
        await D_Wallet_pageSpecs.deposite_money_button.click();
        await driver.pause(1000);
        await D_Wallet_pageSpecs.deopsite_money_er_message_ok.click();
    })
    it('Click the Refresh button',async()=>{
        await driver.pause(1000);
        await D_Wallet_pageSpecs.transaction_refresh.click();
    })
    it('Click the Transaction button',async()=>{
        await driver.pause(1000);
        await D_Wallet_pageSpecs.transaction_button.click();
    })
    


});