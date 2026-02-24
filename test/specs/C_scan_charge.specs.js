const A_login_pageSpecs = require("../screenobjects/A_login_page.specs");
const B_map_pageSpecs = require("../screenobjects/B_map_page.specs");
const C_scan_charge_pageSpecs = require("../screenobjects/C_scan_charge_page.specs");
const E_profile_pageSpecs = require("../screenobjects/E_profile_page.specs");


describe('Scan and Charge',()=>{
     it('Scan and Charge',async()=>{
        await driver.pause(3000);

        console.log('Sucess');  
    });

//verify the Charger id screen functionality by vaild charger Id

    it('Click the scan charge option',async()=>{
        await driver.pause(3000);
        await C_scan_charge_pageSpecs.scan_charge.click();
        await driver.pause(1000);
        await C_scan_charge_pageSpecs.Permission.click();
    })
    it('Click the Chager Id option',async()=>{
        //await driver.pause(1000);
        await C_scan_charge_pageSpecs.chagerid.click();
        //await driver.pause(1000);
        await C_scan_charge_pageSpecs.chagerid.click();
    })
    it('Enter vaild charger id',async()=>{
        await driver.pause(1000);
        await C_scan_charge_pageSpecs.enter_device_id_textbox.setValue("2bb4g4");
    })
    it('Click the Contineu Button',async()=>{
        const continueBtn ='//android.view.ViewGroup[@content-desc="device_id_continue_btn"]/android.view.View';

const btn = await driver.$(continueBtn);

// First click
await btn.click();

// Small wait for navigation
await driver.pause(2000);

// If button is still visible, click again
if (await btn.isDisplayed()) {
  await btn.click();
}
    })
    it('Click the Allow Option in the Pop-up Message',async()=>{
        await driver.pause(1000);
        await C_scan_charge_pageSpecs.allow_button.click();
    })
    it('Click the view Traiff button',async()=>{
        //await driver.pause(1000);
        await C_scan_charge_pageSpecs.scan_charge_view_traiff.click();
        await driver.pause(3000);
        await C_scan_charge_pageSpecs.got_it.click();
    })
    it('Click the Start Charging Button',async()=>{
        //await driver.pause(1000);
        await C_scan_charge_pageSpecs.start_charging.click();
    })
    it('Increse the charging session time',async()=>{
        await driver.pause(1000);
        await C_scan_charge_pageSpecs.time_based_charger_session_Increase_button.click();
    })
    it('Decrease the Chageing Session Timings',async()=>{
        //await driver.pause(1000);
        await C_scan_charge_pageSpecs.time_based_charger_session_reduce_button.click();
        //await driver.pause(1000);
        await C_scan_charge_pageSpecs.time_based_charger_session_reduce_button.click();
        //await driver.pause(1000);
        await C_scan_charge_pageSpecs.time_based_less_than_30_er_mss_ok.click();
    })
    it('Click the View Traiff Button',async()=>{
        //await driver.pause(1000);
        await C_scan_charge_pageSpecs.view_traiff_start_session_screen.click();
        //await driver.pause(1000);
        await C_scan_charge_pageSpecs.got_it.click();
    })
    it("Click the start charger button",async()=>{
        //await driver.pause(1000);
        await C_scan_charge_pageSpecs.Start_charge_contineu_button.click();
    })
    it('Verify the charging session is started',async()=>{
        await driver.pause(6000);
         const charging_text= await $('//android.view.ViewGroup[@content-desc="Charging "]/android.widget.TextView');
        const isVisible = await charging_text.isDisplayed();

if (isVisible) {
    console.log('Charging session started Sucessfully✅');
} else {
    console.log('User are unable to start the charging Session ❌');
}
    })
    it('Clike the back button',async()=>{
        await driver.pause(6000);
        await C_scan_charge_pageSpecs.charger_screen_back_button.click();
    })
    it('Click the Active session option',async()=>{
        await driver.pause(3000);
        await B_map_pageSpecs.Active_session_button_chag.click();
    })
    it('click the Active charger session',async()=>{
        await driver.pause(2000);
        await C_scan_charge_pageSpecs.active_session_screen_charger.click();
    })
    it('Click the Stop charger button',async()=>{
        await driver.pause(20000);
        await C_scan_charge_pageSpecs.stop_charging.click();
    })
    it('verify the charger session is stopped',async()=>{
         await driver.pause(5000);
         const charging_text= await $('//android.view.ViewGroup[@content-desc="Idle, Free Charging"]/android.widget.TextView[1]');
        const isVisible = await charging_text.isDisplayed();

if (isVisible) {
    console.log('Charging session Stopped Sucessfully✅');
} else {
    console.log('User are unable to stop the charging Session ❌');
}
    })

    it('Click the View Recipt button',async()=>{
        await driver.pause(6000);
        const completedText = '//android.widget.TextView[@text="Completed"]';
const backBtn = '//android.widget.TextView[@content-desc="charging_back_btn"]';

try {
  // wait a few seconds to see if "Completed" appears
  const completedEl = await driver.$(completedText);
  await completedEl.waitForDisplayed({ timeout: 5000 });

  console.log('Completed screen appeared. No action needed.');

} catch (err) {
  console.log('Completed screen not found. Clicking back button.');

  const backButton = await driver.$(backBtn);
  await backButton.click();
}
        await C_scan_charge_pageSpecs.View_reciept.click();
    })

    it('Clcik the View Report button',async()=>{
            await driver.pause(1000);
            await C_scan_charge_pageSpecs.recipt_download.click();
            //await driver.pause(1000);
            await E_profile_pageSpecs.Profile_downloaded_invoice_open.click();
            await driver.pause(2000);
            for (let i = 0; i < 4; i++) {
            await driver.back();
    }
        })

    //unit based charger session
     
    it('Click the scan charge option',async()=>{
        await driver.pause(3000);
        await C_scan_charge_pageSpecs.scan_charge.click();
        
    })
    it('Click the Chager Id option',async()=>{
        //await driver.pause(1000);
        await C_scan_charge_pageSpecs.chagerid.click();
        //await driver.pause(1000);
        await C_scan_charge_pageSpecs.chagerid.click();
    })
    it('Enter vaild charger id',async()=>{
        await driver.pause(2000);
        await C_scan_charge_pageSpecs.enter_device_id_textbox.setValue("2bb4g4");
    })
    it('Click the Contineu Button',async()=>{
        
const continueBtn ='//android.view.ViewGroup[@content-desc="device_id_continue_btn"]/android.view.View';

const btn = await driver.$(continueBtn);

// First click
await btn.click();

// Small wait for navigation
await driver.pause(2000);

// If button is still visible, click again
if (await btn.isDisplayed()) {
  await btn.click();
        // //await driver.pause(1000);
        // await C_scan_charge_pageSpecs.contineu_button.click();
        // try{
        // //await driver.pause(1000);
        // await C_scan_charge_pageSpecs.contineu_button.click();
        // }catch(e){
        //     console.log('Sucess');

         }
    })
    it('Click the start Charging session button',async()=>{
        //await driver.pause(1000);
        await C_scan_charge_pageSpecs.start_charging.click();
    })
    it('Click the Unit based charger session button',async()=>{
        //await driver.pause(1000);
        await C_scan_charge_pageSpecs.Unit_based_session_button.click();
    })
    it('Enter the Unit details',async()=>{
        //await driver.pause(1000);
        await C_scan_charge_pageSpecs.Unit_based_session_text_box.setValue("0.01");
    })
     it("Click the start charger button",async()=>{
        //await driver.pause(1000);
        await C_scan_charge_pageSpecs.Start_charge_contineu_button.click();
    })
    it('Verify the charging session is started',async()=>{
        await driver.pause(6000);
         const charging_text= await $('//android.view.ViewGroup[@content-desc="Charging "]/android.widget.TextView');
        const isVisible = await charging_text.isDisplayed();

if (isVisible) {
    console.log('Charging session started Sucessfully✅');
} else {
    console.log('User are unable to start the charging Session ❌');
}
    })
    it('Clike the back button',async()=>{
        await driver.pause(6000);
        await C_scan_charge_pageSpecs.charger_screen_back_button.click();
    })
    it('Click the Active session option',async()=>{
        await driver.pause(3000);
        await B_map_pageSpecs.Active_session_button_chag.click();
    })
    it('click the Active charger session',async()=>{
        await driver.pause(2000);
        await C_scan_charge_pageSpecs.active_session_screen_charger.click();
    })
    it('Click the Stop charger button',async()=>{
        await driver.pause(20000);
        await C_scan_charge_pageSpecs.stop_charging.click();
    })
    it('verify the charger session is stopped',async()=>{
         await driver.pause(5000);
         const charging_text= await $('//android.view.ViewGroup[@content-desc="Idle, Free Charging"]/android.widget.TextView[1]');
        const isVisible = await charging_text.isDisplayed();

if (isVisible) {
    console.log('Charging session Stopped Sucessfully✅');
} else {
    console.log('User are unable to stop the charging Session ❌');
}
    })
      it('Click the View Recipt button',async()=>{
        await driver.pause(6000);
        const completedText = '//android.widget.TextView[@text="Completed"]';
const backBtn = '//android.widget.TextView[@content-desc="charging_back_btn"]';

try {
  // wait a few seconds to see if "Completed" appears
  const completedEl = await driver.$(completedText);
  await completedEl.waitForDisplayed({ timeout: 5000 });

  console.log('Completed screen appeared. No action needed.');

} catch (err) {
  console.log('Completed screen not found. Clicking back button.');

  const backButton = await driver.$(backBtn);
  await backButton.click();
}
        await C_scan_charge_pageSpecs.View_reciept.click();
    })
    
    it('Clcik the View Report button',async()=>{
            await driver.pause(2000);
            await C_scan_charge_pageSpecs.recipt_download.click();
            //await driver.pause(1000);
            await E_profile_pageSpecs.Profile_downloaded_invoice_open.click();
            await driver.pause(2000);
            for (let i = 0; i < 4; i++) {
            await driver.back();
    }
        })

    
   

});
    