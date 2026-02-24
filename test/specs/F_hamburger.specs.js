const A_login_pageSpecs = require("../screenobjects/A_login_page.specs");
const B_map_pageSpecs = require("../screenobjects/B_map_page.specs");
const C_scan_charge_pageSpecs = require("../screenobjects/C_scan_charge_page.specs");
const D_Wallet_pageSpecs = require("../screenobjects/D_Wallet_page.specs");
const E_profile_pageSpecs = require("../screenobjects/E_profile_page.specs");
const F_hambuger_pageSpecs = require("../screenobjects/F_hambuger_page.specs");

describe('Hamburger Menu',()=>{
     it('Hamburger Menu',async()=>{
        await driver.pause(1000);

        console.log('Sucess');  
    });
 it('Click the Map Button',async()=>{
    await driver.pause(1000);
    await C_scan_charge_pageSpecs.Map_screen_button.click();
 })
 it('Click the Hamburger Menu button',async()=>{
    await driver.pause(1000);
    await F_hambuger_pageSpecs.hamburgermenu.click();
 })
 it('Click the Iam Host buttton',async()=>{
    await driver.pause(1000);
    await F_hambuger_pageSpecs.iam_host.click();
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
         await F_hambuger_pageSpecs.Host_get_started.click();
         await driver.pause(1000);
        //  await F_hambuger_pageSpecs.Host_get_start_pop_up.click();
     })
     it('Click the add charger scanner back button',async()=>{
         await driver.pause(2000);
         await E_profile_pageSpecs.profile_my_charger_add_charger_scanner_back_button.click();
     })
     it('Click the Host charger screen Back Button',async()=>{
         await driver.pause(1000);
         await E_profile_pageSpecs.Host_back_button.click();
         await driver.pause(1000);
         await E_profile_pageSpecs.profile_my_chargers_back_button.click();
     })

     //My Bookings
      
//      it('Click the My Bookings',async()=>{
//                  await driver.pause(1000);
//                  await F_hambuger_pageSpecs.Bookings.click();
//                  await driver.pause(1000);
//                  await F_hambuger_pageSpecs.bookings_back_button.click();
//                  await driver.pause(1000);
//                  await F_hambuger_pageSpecs.Bookings_delete_button_1.click();
//                  await F_hambuger_pageSpecs.Bookings_delete_no.click();
//                  await driver.pause(1000);
//                  await F_hambuger_pageSpecs.Bookings_delete_yes.click();
//                  await driver.pause(2000);
//                  async function verifyBookingDeleted() {
//     const element = await $("//android.widget.TextView[@text='CANCELLED']");
    
//     if (await element.isExisting() && await element.isDisplayed()) {
//         console.log("Booking is deleted successfully");
//     } else {
//         console.log("Booking is NOT deleted");
//     }
// }
//              })
//              it('Delete the My schedule charger',async()=>{
//                 await driver.pause(1000);
//                 await F_hambuger_pageSpecs.Bookingd_delete_button_2.click();
//                 await F_hambuger_pageSpecs.Bookings_delete_no.click();
//                  await driver.pause(1000);
//                  await F_hambuger_pageSpecs.Bookings_delete_yes.click();
//                  await driver.pause(2000);
//                  async function verifyBookingDeleted() {
//     const element = await $("//android.widget.TextView[@text='CANCELLED']");
    
//     if (await element.isExisting() && await element.isDisplayed()) {
//         console.log("Booking is deleted successfully");
//     } else {
//         console.log("Booking is NOT deleted");
//     }
// }
             
// })
    //Favorites

    it('Click the Favorites button',async()=>{
                await driver.pause(1000);
                await F_hambuger_pageSpecs.favorites.click();
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
                    await driver.pause(1000);
                    await E_profile_pageSpecs.fav_charger_back_button.click();
                })
                it('Click the Favorites Back button',async()=>{
                    await driver.pause(1000);
                    await E_profile_pageSpecs.Favorites_back_button.click();
                })

        //My Vehicles

        it('Click the my vehicle',async()=>{
                        await driver.pause(1000);
                        await F_hambuger_pageSpecs.my_vehicle.click();
                    })
                    it('Click the add vehicle button',async()=>{
                        await driver.pause(1000);
                        await E_profile_pageSpecs.profile_my_vehicle_add_vehicle_button.click();
                    })
                    it('Click the Brand Drop-down',async()=>{
                        await driver.pause(1000);
                        await E_profile_pageSpecs.Add_vehicle_brand_name.click();
                    })
                    it('Enter the Vehicle brand name',async()=>{
                        await driver.pause(1000);
                        await E_profile_pageSpecs.Add_vehicle_search_text_box.setValue("Range");
                        await driver.pause(1000);
                        await F_hambuger_pageSpecs.Range_rover.click();
                    })
                    it('Select Vehicle Model',async()=>{
                        await driver.pause(1000);
                        await E_profile_pageSpecs.My_vehicle_brand_drop_down.click();
                        await driver.pause(1000);
                        await F_hambuger_pageSpecs.Range_rover_model.click();
                    })
                    it('Enter Registration Number',async()=>{
                        const random4Digit = String(Math.floor(Math.random() * 10000)).padStart(4, '0');
const vehicleNumber = `TN05AB${random4Digit}`;
console.log('Vehicle Number:', vehicleNumber);

// Find the text box
const vehicleInput = await $('~add_vehicle_reg_no');

// Wait until the element is visible and clickable
await vehicleInput.waitForDisplayed({ timeout: 5000 });
await vehicleInput.click();          // focus on input
await vehicleInput.clearValue();     // clear any existing value

// Set the value
await vehicleInput.setValue(vehicleNumber);
                        // await E_profile_pageSpecs.Add_vehicle_Reg_no.setValue("TN05AB0013");
                    })
                    it('Click the Add vehicle submit button',async()=>{
                        await driver.pause(1000);
                        await E_profile_pageSpecs.Add_vehicle_submit_button.click();
                    })
                    it('Click the Vehicle',async()=>{
                        await driver.pause(2000);
                        await F_hambuger_pageSpecs.Vehicle_delete_car.click();
                    })
                    it('Click the Vehicle Delete button',async()=>{
                        await driver.pause(1000);
                        await F_hambuger_pageSpecs.Delete_vehicle_icon.click();
                        await driver.pause(1000);
                        await F_hambuger_pageSpecs.Delete_confrimation_message.click();
                    })
                    it('Click the My Vehicle back button',async()=>{
                        await driver.pause(1000);
                        await E_profile_pageSpecs.Add_vehicle_back_button.click();
                    })

                    //chargin History
                    
                        it('Click the Charging History',async()=>{
                            await driver.pause(1000);
                            await F_hambuger_pageSpecs.my_charging_history.click();
                        })
                        it('Click the completed charger session',async()=>{
                            const receipt = await $('//android.view.ViewGroup[@content-desc="Charging Receipt, #97303499, 06 June 2023, Charger ID - vgr776, Spent - ₹ 0.00 , Usage - 0.18 Wh"]');
                                    await receipt.click();
                            // await F_hambuger_pageSpecs.my_charging_history_charger.click();
                        })
                        it('Click the view Recipt button',async()=>{
                            await F_hambuger_pageSpecs.my_charging_history_charger_view_recipt.click();
                        })
                        it('Click the Download Recipt',async()=>{
                            await F_hambuger_pageSpecs.my_charging_history_charger_view_recipt_download.click();
                        })
                        it('Click the Downloaded invoice Open button',async()=>{
                            await F_hambuger_pageSpecs.my_charging_history_charger_view_recipt_download_open.click();
                            await driver.pause(2000);
                        })
                        it('Clcik the Invoice back button',async()=>{
                             for (let i = 0; i < 4; i++) {
                             await driver.back();
}
                        })

                    //whats app 

                    it('click the whats app option',async()=>{
                        await driver.pause(1000);
                        await F_hambuger_pageSpecs.Whats_app_support.click();
                        await driver.pause(1000);
                        await F_hambuger_pageSpecs.Whats_app_ok.click();
                    })

                    //log out

                    it('Click the Log-out button',async()=>{
                        await driver.pause(1000);
                        await F_hambuger_pageSpecs.Log_out_button.click();
                        await driver.pause(1000);
                        await F_hambuger_pageSpecs.Log_out_button_No.click();
                        await driver.pause(1000);
                        await F_hambuger_pageSpecs.Log_out_button.click();
                        await driver.pause(1000);
                        await F_hambuger_pageSpecs.Log_out_button_ok.click();
                    })
                    





    



});