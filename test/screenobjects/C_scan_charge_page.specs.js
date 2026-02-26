class scanandcharge{
    get Permission(){
        return $("//android.widget.Button[@text='While using the app']");
    }
    get chagerid(){
        return $('//android.view.ViewGroup[@content-desc="device_id_chargerID_toggle_btn"]/android.widget.TextView');
    }
    get enter_device_id_textbox(){
        return $('//android.widget.EditText[@content-desc="device_id_input"]');
    }
    get contineu_button(){
        return $('//android.view.ViewGroup[@content-desc="device_id_continue_btn"]/android.view.View');
    }
    get message1(){
        return $("//android.widget.Button[@text='While using the app']");
    }
    get allow_button(){
        return $("//android.widget.Button[@text='Allow']");
    }
    get scan_charge(){
        return $('//android.widget.Button[@content-desc=", Scan to charge"]');
    }
    get charger_allow(){
        return $("//android.widget.Button[@text='Allow']");
    }
    get start_charging(){
        return $('//android.view.ViewGroup[@content-desc="charging_start_charging_btn"]/android.view.ViewGroup/android.view.View');
    }
    get charger_screen_back_button(){
        return $('//android.widget.TextView[@content-desc="charging_back_btn"]');
    }
    get wallet(){
        return $('//android.widget.TextView[@content-desc="charging_wallet_btn"]');
    }
    get scan_charge_view_traiff(){
        return $('//android.view.ViewGroup[@content-desc="View Tariff Card"]/android.widget.TextView');
    }
    get got_it(){
        return $('//android.view.ViewGroup[@content-desc="charging_start_charging_btn"]/android.view.ViewGroup/android.view.View');
    }
    get time_based_charger_session_reduce_button(){
        return $('(//android.view.ViewGroup[@content-desc=""]/android.widget.TextView)[1]');
    }
    get time_based_less_than_30_er_mss_ok(){
        return $("//android.widget.Button[@text='OK']");
    } 
    get time_based_charger_session_Increase_button(){
        return $('//android.view.ViewGroup[@content-desc=""]/android.widget.TextView');
    }
    get Start_charge_contineu_button(){
        return $('//android.view.ViewGroup[@content-desc="Continue"]/android.view.View');
    }
    get stop_charging(){
        return $('//android.view.ViewGroup[@content-desc="charging_stop_charging_btn"]/android.view.ViewGroup/android.view.View');
    }
    get charger_recipt_back_home_button(){
        return $('//android.widget.Button[@content-desc="chargerReceipt_home_btn"]');
    }
    get charger_recipt_back_button(){
        return $('//android.widget.TextView[@content-desc="chargerReceipt_back_btn"]');
    }
    get charger_recipt_view_button(){
        return $('///android.view.ViewGroup[@content-desc="󰅁"]/android.widget.TextView');
    }
    get download_pdf(){
        return $('//android.view.ViewGroup[@content-desc="Download PDF, "]');
    }
    get invoice_open(){
        return $("//android.widget.Button[@text='OPEN']");
    }
    get ivoice_back_button(){
        return $('//android.view.ViewGroup//android.widget.ImageButton');
    }
    get reicpt_back_button(){
        return $('//android.widget.Button[@content-desc="chargerReceipt_home_btn"]');
    }
    get active_session_screen_charger(){
        return $("//android.widget.TextView[@text='Charging']"); 
    }
    get scan_charger_wallet(){
        return $('//android.widget.TextView[@content-desc="charging_wallet_btn"]');
    }
    get Map_screen_button(){
        return $('//android.widget.Button[@content-desc=", Map"]');
    }
    get view_traiff_start_session_screen(){
        return $('//android.view.ViewGroup[@content-desc="View Tariff"]/android.widget.TextView');
    }
    get Unit_based_session_button(){
        return $('//android.view.ViewGroup[@content-desc="undefined_units"]/android.widget.TextView');
    }
    get Unit_based_session_text_box(){
        return $('(//android.widget.SeekBar[@content-desc="Bottom Sheet"])[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.EditText');
    }
    get Unit_based_session_contineu_button(){
        return $('//android.view.ViewGroup[@content-desc="Continue"]/android.view.View');
    }
    get Unit_based_session_view_traiff(){
        return $('//android.view.ViewGroup[@content-desc="View Tariff"]/android.widget.TextView');
    }
    get Unit_based_session_got_it_button(){
        return $('//android.view.ViewGroup[@content-desc="Got it"]');
    }
    get complete_screen_view_traiff(){
        return $('//android.view.ViewGroup[@content-desc="View Tariff Card"]/android.widget.TextView');
    }
    get View_reciept(){
        return $('//android.view.ViewGroup[@content-desc="View Receipt"]/android.widget.TextView');
    }
    get recipt_download(){
        return $('//android.view.ViewGroup[@content-desc="Download PDF, "]');
   }
   


    //Booking and Scheduling

    get Book_button(){
    return $('//android.widget.Button[@content-desc="tariff_book_btn"]');
    }
    get Book_scheduling(){
        return $('//android.view.ViewGroup[@content-desc="booking_tab_scheduling"]');
    }



     

}
module.exports=new  scanandcharge();