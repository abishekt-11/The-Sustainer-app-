class login{
    get mobiletext(){
        return $('//android.widget.EditText[@content-desc="auth_input_phone"]');
    }
    get getotpbutton(){
        return $('//android.view.ViewGroup[@content-desc="auth_btn_get_otp"]/android.view.View');
    }
    get goolelogin(){
        return $('//android.view.ViewGroup[@content-desc="Continue with Google"]');
    }
    get verifyotpbutton(){
        return $('//android.view.ViewGroup[@content-desc="auth_btn_verify_otp"]/android.view.View');
    }
    get message1(){
        return $("//android.widget.Button[@text='While using the app']");
    }
    get Sign_in_with_google(){
        return $('//android.view.ViewGroup[@content-desc="Continue with Google"]');
    }
    
}
module.exports=new  login();