
class Wallet{

    get wallet(){
        return $('//android.widget.Button[@content-desc=", Wallet"]');
    }
    get deposite_money_button(){
        return $('//android.view.ViewGroup[@content-desc="wallet_add_money_button"]/android.widget.TextView');
    }
    get deopsite_money_er_message_ok(){
        return $("//android.widget.Button[@text='OK']");
    }
    get transaction_button(){
        return $('//android.view.ViewGroup[@content-desc="wallet_transaction_history"]');
    }
    get transaction_calender_filter(){
        return $('//android.widget.TextView[@content-desc="wallet_transaction_calendar_button"]');
    }
    get transaction_refresh(){
        return $('//android.widget.TextView[@content-desc="wallet_refresh_button"]');
    }

    

}
module.exports=new  Wallet();