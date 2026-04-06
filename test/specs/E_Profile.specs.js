const A_login_pageSpecs = require("../screenobjects/A_login_page.specs");
const B_map_pageSpecs = require("../screenobjects/B_map_page.specs");
const C_scan_charge_pageSpecs = require("../screenobjects/C_scan_charge_page.specs");
const D_Wallet_pageSpecs = require("../screenobjects/D_Wallet_page.specs");
const E_profile_pageSpecs = require("../screenobjects/E_profile_page.specs");

describe('Profile',()=>{
     it('Profile',async()=>{
        //await driver.pause(1000);

        console.log('Sucess');  
    });
    it('Click the Profile button',async()=>{
        await driver.pause(2000);
        await E_profile_pageSpecs.profile_button.click();
        await driver.pause(1000);
        await E_profile_pageSpecs.personal_details.click();
    })
    it('Re-name the user name',async()=>{

    const oldName = "Testing";
    const newName = "Updated User name";

    // Get current name before update
    const nameField = await E_profile_pageSpecs.user_name_text_box;
    const beforeUpdate = await nameField.getText();

    // Update name
    await nameField.clearValue();
    await nameField.setValue(newName);
    await E_profile_pageSpecs.Personal_details_save.click();

    await driver.pause(2000);
    await E_profile_pageSpecs.personal_details.click();
    // Get name after update
    const afterUpdate = await nameField.getText();

    // Check changed or not
    const isUpdated = (beforeUpdate === oldName) && (afterUpdate === newName);

    console.log(isUpdated); 
     
    })

    // })
    it('Add Tax Details',async()=>{
        await driver.pause(1000);
        await E_profile_pageSpecs.personal_details.click();
        await E_profile_pageSpecs.add_tax_button.click();
        await driver.pause(3000);
        await E_profile_pageSpecs.tax_business_name.clearValue();
        await E_profile_pageSpecs.tax_business_name.setValue("Updated Tax");
        //await driver.pause(1000);
        await E_profile_pageSpecs.tax_tax_number.clearValue();
        await E_profile_pageSpecs.tax_tax_number.setValue("2311232446544323");
        //await driver.pause(1000);
        await E_profile_pageSpecs.tax_address.clearValue();
        await E_profile_pageSpecs.tax_address.setValue("Tamil Nadu India");
        //await driver.pause(1000);
        await E_profile_pageSpecs.tax_save_button.click();
        await E_profile_pageSpecs.Personal_details_save.click();
    })

    //chargin History

    it('Click the Charging History',async()=>{
        await driver.pause(1000);
        await E_profile_pageSpecs.profile_charging_history.click();
        
    })
    it('click the Charger present in the charger history',async()=>{
        await driver.pause(5000);
        const receiptXpath = `//android.view.ViewGroup[@content-desc="Charging Receipt, #97303499, 06 June 2023, Charger ID - vgr776, Spent - ₹ 0.00 , Usage - 0.18 Wh"]`;
        const receiptElement = await $(receiptXpath); 
        await receiptElement.click();
        //  const receiptXpath = "(//android.view.ViewGroup[contains(@content-desc,'Charger ID - 2bb4g4')])[1]";
        // const receiptElement = await $(receiptXpath); 
        // await receiptElement.click();
        // await E_profile_pageSpes.Charger_history_charger.click();  
    })
    it('Clcik the View Report button',async()=>{
        await E_profile_pageSpecs.Profile_charger_history_view_recipt.click();
        await driver.pause(3000);
        await E_profile_pageSpecs.Profile_charging_history_download_recipt.click();
        await driver.pause(1000);
        await E_profile_pageSpecs.Profile_downloaded_invoice_open.click();
        await driver.pause(2000);
        for (let i = 0; i < 4; i++) {
        await driver.back();
}
    })


    //my Chargers

    it('Click the My Charger option',async()=>{
        await driver.pause(1000);
        await E_profile_pageSpecs.profile_my_chargers.click();
    })
    it('click the Host a station',async()=>{
        await driver.pause(1000);
        await E_profile_pageSpecs.profile_my_charger_host_station_button.click();
        await driver.pause(1000);
        await  E_profile_pageSpecs.Host_charger_back_button.click();
    })
    it('Click the Add charger',async()=>{
        await driver.pause(1000);
        await E_profile_pageSpecs.Host_charger_add_charger.click();
    })
    it('Click the get started button',async()=>{
        await driver.pause(1000);
        await E_profile_pageSpecs.Host_get_started.click();
        await driver.pause(1000);
        await E_profile_pageSpecs.Host_get_start_pop_up_mesaage.click();
    })
    it('Click the add charger scanner back button',async()=>{
        await driver.pause(2000);
        await E_profile_pageSpecs.profile_my_charger_add_charger_scanner_back_button.click();
    })
    it('Click the Host charger screen Back Button',async()=>{
        await driver.pause(1000);
        await E_profile_pageSpecs.Host_back_button.click();
        //await driver.pause(1000);
        await E_profile_pageSpecs.profile_my_chargers_back_button.click();
    })

    //Wallet
    it('Click the Wallet button',async()=>{
            await driver.pause(1000);
            await D_Wallet_pageSpecs.wallet.click();
        })
        it('Clcik the Deposite money',async()=>{
            await driver.pause(2000);
            await E_profile_pageSpecs.Wallet_add_money_button.click();
            await E_profile_pageSpecs.profile_wallet_deposite_button.click();
            await driver.pause(1000);
            await D_Wallet_pageSpecs.deopsite_money_er_message_ok.click();
        })
        it('Click the Refresh button',async()=>{
            //await driver.pause(1000);
            await D_Wallet_pageSpecs.transaction_refresh.click();
        })
        it('Click the Transaction button',async()=>{
            await driver.pause(1000);
            await D_Wallet_pageSpecs.transaction_button.click();
            //await driver.pause(1000);
            await E_profile_pageSpecs.profile_button.click();
        }) 

        //My bookings
        it('Click the My Bookings',async()=>{
            await driver.pause(1000);
            await E_profile_pageSpecs.profile_my_bookings.click();
            //await driver.pause(1000);
            await E_profile_pageSpecs.My_bookings_back_button.click();
        })

        //favorites

        it('Click the Favorites button',async()=>{
            await driver.pause(1000);
            await E_profile_pageSpecs.profile_favorites.click();
        })
        it('Click the Favorite charger',async()=>{
            await driver.pause(1000);
            await E_profile_pageSpecs.fav_charger.click();
        })
        it('click the Connector button',async()=>{
                await driver.pause(2000);
                await E_profile_pageSpecs.Fav_charger_connectors_option.click();
            })
            it('Click the Review button',async()=>{
                await driver.pause(2000);
                await E_profile_pageSpecs.Fav_charger_review.click();
            })
            it('Click the ev card back button',async()=>{
                //await driver.pause(1000);
                await E_profile_pageSpecs.fav_charger_back_button.click();
            })
            it('Click the Favorites Back button',async()=>{
                //await driver.pause(1000);
                await E_profile_pageSpecs.Favorites_back_button.click();
            })

            //My Vehicles

            it('Click the my vehicle',async()=>{
                //await driver.pause(1000);
                await E_profile_pageSpecs.profile_my_vehicle.click();
            })
            it('Click the add vehicle button',async()=>{
                //await driver.pause(1000);
                await E_profile_pageSpecs.profile_my_vehicle_add_vehicle_button.click();
            })
            it('Click the Brand Drop-down',async()=>{
                //await driver.pause(1000);
                await E_profile_pageSpecs.Add_vehicle_brand_name.click();
            })
            it('Enter the Vehicle brand name',async()=>{
                //await driver.pause(1000);
                await E_profile_pageSpecs.Add_vehicle_search_text_box.setValue("BMW");
                //await driver.pause(1000);
                await E_profile_pageSpecs.Add_vehicle_BMW.click();
            })
            it('Select Vehicle Model',async()=>{
                //await driver.pause(1000);
                await E_profile_pageSpecs.My_vehicle_brand_drop_down.click();
                //await driver.pause(1000);
                await E_profile_pageSpecs.Add_vehicle_BMW_model.click();
            })
            it('Enter Registration Number',async()=>{
                //await driver.pause(1000);
                await E_profile_pageSpecs.Add_vehicle_Reg_no.setValue("TN05AB0011");
            })
            it('Click the Add vehicle submit button',async()=>{
                await driver.pause(1000);
                await E_profile_pageSpecs.Add_vehicle_submit_button.click();
            })
            it('Click the My Vehicle back button',async()=>{
                //await driver.pause(1000);
                await E_profile_pageSpecs.Add_vehicle_back_button.click();
            })

            //Language

            it('Click the Language button',async()=>{
                 //await driver.pause(1000);
                 await driver.pressKeyCode(66);

// Down Arrow
                for (let i = 0; i < 15; i++) {
  await driver.pressKeyCode(20);
  await driver.pause(300);
}
                await E_profile_pageSpecs.profile_language_button.click();
            })
            it('Click the language drop-down',async()=>{
                //await driver.pause(1000);
                await E_profile_pageSpecs.profile_language_drop_down.click();
                //await driver.pause(1000);
                await E_profile_pageSpecs.profile_english_language.click();
            })
            it('Click the Done Button',async()=>{
                //await driver.pause(1000);
                await E_profile_pageSpecs.profile_language_done_button.click();
            })

            //Delete Account
            it('Click the Delete Button',async()=>{
                await driver.pause(5000);
                await E_profile_pageSpecs.Profile_delete_account.click();
                await driver.pause(3000);
                await E_profile_pageSpecs.Profile_delete_account_cancel_button.click();
            })
            it('Click the Map button',async()=>{
                await C_scan_charge_pageSpecs.Map_screen_button.click();
            })

           













});