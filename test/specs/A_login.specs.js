const A_login_pageSpecs = require("../screenobjects/A_login_page.specs");
const B_map_pageSpecs = require("../screenobjects/B_map_page.specs");


describe('Login',()=>{
     it('Login Screen',async()=>{
        await driver.pause(5000);
        console.log('Sucess');  
    });
    //verify the Login functionality with In-vaild Mobile number

    it('Enter In-vaild Mobile number',async()=>{
        await driver.pause(2000);
        await A_login_pageSpecs.mobiletext.setValue("123456789");
        
    })
    it('Click the Get otp button',async()=>{
        await driver.pause(1000);
        await A_login_pageSpecs.getotpbutton.click();
        await driver.pause(1000);
        await A_login_pageSpecs.getotpbutton.click();
    })
    it('verify the Error message',async()=>{
       await driver.pause(2000);
        const errorMsg = await $('//android.widget.TextView[@text="Enter a valid phone number"]');
      const text = await errorMsg.getText();
      console.log('Error message:', text);
    })

    //Verify the Login functionality with Vaild mobile number and In-vaild OTP
 
    it('Enter Vaild Mobile number',async()=>{
        await driver.pause(1000);
        await A_login_pageSpecs.mobiletext.setValue("1234567890");
    })
    it('Click the Get otp button',async()=>{
        await driver.pause(1000);
        await A_login_pageSpecs.getotpbutton.click();
        await driver.pause(3000);
        
    })
    it("enter OTP",async()=>{
        const closeBtn = await $('//android.widget.ImageButton[@content-desc="Close tab"]');

try {
    await closeBtn.waitForDisplayed({ timeout: 3000 });
    console.log('Close tab appeared, clicking it');
    await closeBtn.click();
} catch (e) {
    console.log('Close tab did not appear, continuing test');
}
        await $('~auth_input_otp1').waitForDisplayed({ timeout: 10000 });
    await $('~auth_input_otp1').click();
    await $('~auth_input_otp1').click();
    await driver.keys('124457');
    await driver.pause(3000);
    await A_login_pageSpecs.verifyotpbutton.click();
    })
    it('verify the Otp Error message',async()=>{
       await driver.pause(3000);
        const errorMsg = await $("//android.widget.TextView[@text='[auth/invalid-verification-code] The verification code from SMS/TOTP is invalid. Please check and enter the correct verification code again.']");
      const text = await errorMsg.getText();
      console.log('Error message:', text);
      await driver.pause(2000);
    })

    //Verify the Login functionality with Vaild mobile number and vaild OTP
    
    it("enter OTP",async()=>{
    await driver.pause(3000);
    await $('~auth_input_otp1').click();
    await driver.keys('123456');
    await driver.pause(3000);
    await A_login_pageSpecs.verifyotpbutton.click();
    await driver.pause(5000);
    await A_login_pageSpecs.message1.click();
    await driver.pause(3000);
    await B_map_pageSpecs.amenities_no.click();
    })
    it('verify the user are sucessfully logged in',async()=>{
       await driver.pause(5000);
        const maplogo= await $('//android.widget.Button[@content-desc=", Map"]');
        const isVisible = await maplogo.isDisplayed();

if (isVisible) {
    console.log('User Logged in Sucessfully✅');
} else {
    console.log('User are unable to log in the app ❌');
}
    })




});