const B_map_pageSpecs = require("../screenobjects/B_map_page.specs");

describe('Map',()=>{
     it('Map Screen',async()=>{
        await driver.pause(2000);
        console.log('Sucess');  
    });
    
    it('Click the List view button',async()=>{
        await driver.pause(2000);
        await B_map_pageSpecs.list_view.click();
    })
    it('Click the Filter Option',async()=>{
        await driver.pause(2000);
        await B_map_pageSpecs.Filter_button.click();
    })
    it('Scroll and Click the type 7 option',async()=>{
        await driver.pause(3000);
        const plugTypeBtn = await $('//android.view.ViewGroup[@content-desc="filter_plug_type_type_7"]');

await plugTypeBtn.scrollIntoView();
await plugTypeBtn.click();
    })
    it('Scroll down and Click the apply filter button',async()=>{
     await driver.pause(1000);
const applyBtn = '~filter_apply_btn';

while (!(await driver.$(applyBtn).isDisplayed())) {
  const { width, height } = await driver.getWindowRect();

  await driver.execute('mobile: scrollGesture', {
    left: width * 0.1,
    top: height * 0.1,
    width: width * 0.8,
    height: height * 0.8,
    direction: 'down',
    percent: 0.6
  });
}
await driver.pause(2000);
await driver.$(applyBtn).click();
await driver.pause(1000);
    });
    it('Select the charger from the Filtered Result',async()=>{
        await driver.pause(3000);
        await B_map_pageSpecs.charger_ev_card.click();
    })
    it('Make the Charger as Favorite',async()=>{
        await driver.pause(2000);
        const favBtn = await driver.$('//android.view.ViewGroup[@content-desc="tariff_fav_btn"]');

const isSelected = await favBtn.getAttribute('selected');

if (isSelected !== 'true') {
    await favBtn.click();
    console.log('Button was un-fav, clicked now');
} else {
    console.log('Already favorited, no action taken');
}
        // await B_map_pageSpecs.ev_card_favorite.click();
        // await driver.pause(1000);
        // await B_map_pageSpecs.ev_card_favorite.click();
    })
    it('click the Connector button',async()=>{
        await driver.pause(2000);
        await B_map_pageSpecs.ev_cards_connectore.click();
    })
    it('Click the Review button',async()=>{
        await driver.pause(2000);
        await B_map_pageSpecs.ev_cards_reviews.click();
    })
    //reviews

    it('Click the Write Review Button',async()=>{
        await driver.pause(3000);
        const button = await $('~tariff_review_btn');  // ~ is shorthand for accessibility ID
await button.click();

    })
    it('Cick the 5 star option',async()=>{
        await driver.pause(1000);
        await B_map_pageSpecs.Review_5_star_button.click();
    })
    it('Write the review',async()=>{
        await driver.pause(1000);
        await B_map_pageSpecs.Write_review_text_box.setValue('Testing');
    })
    it('Click the Review Submit button',async()=>{
        await driver.pause(1000);
        await B_map_pageSpecs.Submit_review_button.click();
    })
    it('Click the Update review button',async()=>{
        await driver.pause(3000);
           const btn = await driver.$('//android.widget.Button[@content-desc="tariff_edit_review_btn"]');
        await btn.click();
    })
    it('Reduce the review star',async()=>{
        await driver.pause(1000);
        await B_map_pageSpecs.Review_4_star.click();
    })
    it('Update the Review',async()=>{
        await driver.pause(1000); 
        const btn = await driver.$("//android.widget.EditText[@text='Testing']")
       await btn.click();
        await btn.clearValue();
        await driver.pause(1000);
        await btn.setValue("Updated Review");
    })
    it('Click the update review button',async()=>{
        await driver.pause(1000);
        await B_map_pageSpecs.Review_update_button.click();
    })
    it('Click the Delete Review button',async()=>{
        await driver.pause(1000);
        await B_map_pageSpecs.Review_three_dot.click();
        await driver.pause(1000);
        await B_map_pageSpecs.Review_delete_button.click();
    })
    it('click the ev card back button',async()=>{
        await driver.pause(2000);
        await B_map_pageSpecs.ev_card_back_button.click();
    })
    it('Click the Map view button',async()=>{
        await driver.pause(2000);
        await B_map_pageSpecs.Map_view.click();
        await B_map_pageSpecs.Map_view.click();
    })
    

    //Verify the Favorite screen functionality

    it('click the favorite option',async()=>{
        await driver.pause(1000);
        await B_map_pageSpecs.favorite.click();
    })
    it('Click the Charger in the Favorite screen',async()=>{
        await driver.pause(1000);
        await B_map_pageSpecs.Fav_ev_card.click();
    })
    it('click the Connector button',async()=>{
        await driver.pause(2000);
        await B_map_pageSpecs.ev_cards_connectore.click();
    })
    it('Remove the Charger from Favorite',async()=>{
        await driver.pause(2000);
        await B_map_pageSpecs.ev_card_favorite.click();
        // await driver.pause(1000);
        // await B_map_pageSpecs.ev_card_favorite.click();
    })
    it('Click the Review button',async()=>{
        await driver.pause(1000);
        await B_map_pageSpecs.ev_cards_reviews.click();
    })
    it('click the ev card back button',async()=>{
        await driver.pause(1000);
        await B_map_pageSpecs.ev_card_back_button.click();
        await B_map_pageSpecs.fav_screen_back_buttton.click();
    })

    //verify the Map screen ev card functionality
    it('Click the Notification Button',async()=>{
        await driver.pause(1000);
        await B_map_pageSpecs.Notification.click();
        await driver.pause(1000);
        await B_map_pageSpecs.Notification_1.click();
         await B_map_pageSpecs.Notification_view_traiff.click();
          await driver.pause(1000);
        await B_map_pageSpecs.Notification_view_traiff_back_button.click();
        await driver.pause(1000);
        const sessionId = "80072073";
        // 1️⃣ Check Home Screen
        const homeElement = await driver.$(`//android.widget.TextView[contains(@text, '${sessionId}')]`);
    const isHomePresent = await homeElement.isDisplayed();
    console.log("Session ID on Home Screen:", isHomePresent);
    await driver.pause(1000);
     await B_map_pageSpecs.Notification_view_recipt.click();
     await driver.pause(3000);
       // 2️⃣ Check View More Screen
    const viewMoreElement = await driver.$(`//android.widget.TextView[@text='Session ID : ${sessionId}']`);
    const isViewMorePresent = await viewMoreElement.isDisplayed();
    console.log("Session ID on View More Screen:", isViewMorePresent);
        await driver.pause(1000);
        // 3️⃣ Overall Check
        await driver.pause(1000);
    const isPresentInBoth = isHomePresent && isViewMorePresent;
    console.log("Session ID present in both screens:", isPresentInBoth);
        await driver.pause(1000);
        await B_map_pageSpecs.Notification_download_pdf.click();
        await driver.pause(1000);
        await B_map_pageSpecs.Notification_download_pdf_open.click();
        await driver.pause(1000);
        for (let i = 0; i < 4; i++) {
        await driver.back();
        }
    })
    it('Click the Whats app option',async()=>{
      await driver.pause(1000);
      await B_map_pageSpecs.whats_app.click();
      await driver.pause(1000);
      await B_map_pageSpecs.whats_app_er_message_ok.click();
    })
    it('Click the Active Session option',async()=>{
      await driver.pause(1000);
      await B_map_pageSpecs.Active_session_button.click();
      await driver.pause(1000);
      await B_map_pageSpecs.Active_session_back_button.click();
    })
    it('Clcik the Ev card present in the Map screen',async()=>{
        await driver.pause(1000);
        await B_map_pageSpecs.map_screen_ev_card.click();
    })
    it('add the Charger as Favorite',async()=>{
        await driver.pause(1000);
        await B_map_pageSpecs.ev_card_favorite.click();
        await driver.pause(1000);
        await B_map_pageSpecs.ev_card_favorite.click();
    })
    // it('Click the Book button',async()=>{
    //     await B_map_pageSpecs.ev_card_book_button.click();
    //     await B_map_pageSpecs.Book_date.click();
    //     await B_map_pageSpecs.Book_connector.click();
    //     await B_map_pageSpecs.Book_Button.click();
    //     await driver.pause(1000);
    //     await B_map_pageSpecs.Book_confrimation_ok.click();
    // })
    // it('Click the Schedule Button',async()=>{
    //     await driver.pause(1000);
    //     await B_map_pageSpecs.ev_card_book_button.click();
    //     await B_map_pageSpecs.Scheduling_button.click();
    //     await B_map_pageSpecs.Schedule_date_1.click();
    //     await B_map_pageSpecs.Schedule_connectors.click();
    //     await B_map_pageSpecs.Book_schedule_button.click();
    //     await driver.pause(1000);
    //     await B_map_pageSpecs.Schedule_confrimation_ok.click();
    // })
    it('click the Connector button',async()=>{
        await driver.pause(1000);
        await B_map_pageSpecs.ev_cards_connectore.click();
    })
    it('Click the Review button',async()=>{
        await driver.pause(1000);
        await B_map_pageSpecs.ev_cards_reviews.click();
    })
    it('click the overview button',async()=>{
        await driver.pause(1000);
        await B_map_pageSpecs.ev_card_overview.click();
        await driver.pause(1000);
        await B_map_pageSpecs.ev_card_back_button.click();
    })

    //ev card contents verification
//    it('Verify EV card details match (view only)', async () => {
//     await driver.pause(2000);
//     // Get Outside Values
// const element = await $('//android.view.ViewGroup[@content-desc="home_mapview_card_1"]/android.widget.TextView[3]');
// const element2 = await $('//android.view.ViewGroup[@content-desc="home_mapview_card_1"]/android.widget.TextView[4]');
// const actualText = await element.getText();
// const actualText2 = await element2.getText();
//     // const outsideName = await $("//android.widget.TextView[@text='WM_07']").getText();
//     // const outsideKm = await $("//android.widget.TextView[@text='5.48 km']").getText();
//      await driver.pause(1000);
//         await B_map_pageSpecs.map_screen_ev_card.click();
//         await driver.pause(1000);
//         expect(actualText.trim()).toBe('3.3KW AC');
//         expect(actualText2.trim()).toBe('223.57 km');

//     // Get Inside Values
//     // const insideName = await $("(//android.widget.TextView[@text='WM_07'])[1]").getText();
//     // const insideKmFull = await $("//android.widget.TextView[@text='5.48 km • 4.5']").getText();

//     // Remove extra " • 0" from inside KM
//     // const insideKm = insideKmFull.split(" • ")[0];

//     // Compare
//     const isMatching =
//         outsideName === insideName &&
//         outsideKm === insideKm;
//     console.log(isMatching);  // true or false
//      await B_map_pageSpecs.ev_card_back_button.click();
// });



    
        
    



});