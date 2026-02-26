class profile{
 
    get profile_button(){
        return $('//android.widget.Button[@content-desc=", Profile"]');
    }
    get personal_details(){
        return $('//android.view.ViewGroup[@content-desc=",  Personal Details , "]');
    }
    get user_name_text_box(){
        return $('//android.widget.EditText[@content-desc="personal_details_name"]');
    }
    get add_tax_button(){
        return $('//android.view.ViewGroup[@content-desc="personal_details_add_tax_btn"]');
    }
    get Personal_details_save(){
        return $('//android.view.ViewGroup[@content-desc="Save"]');
    }
    get tax_business_name(){
        return $('(//android.widget.SeekBar[@content-desc="Bottom Sheet"])[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.EditText[1]');
    }
    get tax_tax_number(){
        return $('(//android.widget.SeekBar[@content-desc="Bottom Sheet"])[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.EditText[2]');
    }
    get tax_address(){
        return $('(//android.widget.SeekBar[@content-desc="Bottom Sheet"])[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.EditText[3]');
    }
    get tax_save_button(){
        return $('//android.view.ViewGroup[@content-desc="Save"]');
    }
    get profile_charging_history(){
        return $('//android.view.ViewGroup[@content-desc=",  My Charging History , "]/android.widget.TextView[2]');
    }
    get profile_charging_history_back_button(){
        return $('//android.view.ViewGroup[@content-desc="󰅁"]/android.widget.TextView');
    }
    get Profile_charger_history_charger(){
        return $("(//android.widget.TextView[@text='Charger ID - 2bb4g4'])[1]");
    }
    get Profile_charger_history_view_recipt(){
        return $('//android.view.ViewGroup[@content-desc="View Receipt"]/android.widget.TextView');
    }
    get Profile_charger_history_view_recipt_back_button(){
        return $('//android.view.ViewGroup[@content-desc="󰅁"]/android.widget.TextView');
    }
    get profile_my_chargers(){
        return $('//android.view.ViewGroup[@content-desc=",  My Chargers , "]');
    }
    get profile_my_charger_host_station_button(){
        return $('//android.view.ViewGroup[@content-desc="myChargers_hostStation_btn"]');
    }
    get profile_my_chargers_back_button(){
        return $('//android.widget.TextView[@content-desc="myChargers_back_btn"]');
    } 
    get profile_my_charger_add_charger_scanner_back_button(){
        return $('//android.widget.TextView[@content-desc="qr_scanner_back"]');
    }
    get profile_my_charger_add_charger_get_started_back_button(){
        return $('//android.widget.TextView[@content-desc="qr_scanner_back"]');
    }
    get profile_wallet_button(){
        return $('//android.view.ViewGroup[@content-desc=",  Wallet , "]');
    }
    get profile_my_bookings(){
        return $('//android.view.ViewGroup[@content-desc=",  My Bookings , "]');
    }
    get profile_favorites(){
        return $('//android.view.ViewGroup[@content-desc=",  Favorites , "]');
    }
    get profile_my_vehicle(){
        return $('//android.view.ViewGroup[@content-desc=",  My Vehicles , "]');
    }
    get profile_language_button(){
        return $('//android.view.ViewGroup[@content-desc=",  Language , "]');
    }
    get profile_language_drop_down(){
        return $('//android.view.ViewGroup[@content-desc="English"]');
    }
    get profile_english_language(){
        return $('(//android.view.ViewGroup[@content-desc="English"])[2]');
    }
    get profile_language_done_button(){
        return $('//android.view.ViewGroup[@content-desc="profile_language_done_btn"]');
    }
    get Profile_delete_account(){
        return $('//android.view.ViewGroup[@content-desc=",  Delete Account , "]');
    }
    get Profile_delete_account_cancel_button(){
        return $('//android.view.ViewGroup[@content-desc="profile_delete_account_alert_cancel"]');
    }
    get profile_log_out(){
        return $('//android.view.ViewGroup[@content-desc=",  Log Out , "]');
    }
    get profile_log_out_yes(){
        return $("//android.widget.Button[@text='YES']");
    }
    get Log_out_button_No(){
        return $("//android.widget.Button[@text='NO']");
    }
    get profile_my_vehicle_add_vehicle_button(){
        return $('//android.view.ViewGroup[@content-desc="my_vehicle_add_btn"]');
    }
    get Add_vehicle_brand_name(){
        return $('//android.view.ViewGroup[@content-desc="Select Manufacturer"]');
    }
    get Add_vehicle_search_text_box(){
        return $("//android.widget.EditText[@text='Select Brand']");
    }
    get Add_vehicle_BMW(){
        return $('//android.view.ViewGroup[@content-desc="BMW"]/android.widget.TextView');
    }
    get Add_vehicle_select_model(){
        return $('//android.view.ViewGroup[@content-desc="Select Brand"]');
    }
    get Add_vehicle_BMW_model(){
        return $('//android.view.ViewGroup[@content-desc="530e"]');
    }
    get Add_vehicle_Reg_no(){
        return $('~add_vehicle_reg_no');
    }
    get Add_vehicle_submit_button(){
        return $('//android.widget.Button[@content-desc="add_vehicle_submit_btn"]');
    }
    get Add_vehicle_back_button(){
        return $('//android.widget.TextView[@content-desc="my_vehicle_back_btn"]');
    }
    get My_bookings_back_button(){
        return $('//android.widget.TextView[@content-desc="booking_back_button"]');
    }
    get fav_charger(){
        return $('//android.view.ViewGroup[@content-desc="favorite_charger_card_0"]');
    }
    get fav_charger_back_button(){
        return $("//android.widget.TextView[@text='Back']");
    }
    get Favorites_back_button(){
        return $('//android.widget.TextView[@content-desc="favorite_back_button"]');
    }
    get Host_charger_back_button(){
        return $('//android.widget.TextView[@content-desc="myChargers_back_btn"]');
    }
    get Host_charger_add_charger(){
        return $('//android.view.ViewGroup[@content-desc="myChargers_addCharger_btn"]');
    }
    get Host_get_started(){
        return $('//android.widget.Button[@content-desc="hostRegistration_getStarted_btn"]');
    }
    get Host_get_start_pop_up_mesaage(){
        return $("//android.widget.Button[@text='While using the app']");
    }
    get Host_back_button(){
        return $('//android.widget.TextView[@content-desc="hostRegistration_back_btn"]');
    }
    get My_vehicle_brand_drop_down(){
        return $('//android.view.ViewGroup[@content-desc="Select Brand"]');
    }
    get Fav_charger_connectors_option(){
        return $('//android.view.ViewGroup[@content-desc="tariff_tab_connectors"]/android.widget.TextView');
    }
    get Fav_charger_review(){
        return $('//android.view.ViewGroup[@content-desc="tariff_tab_reviews"]/android.widget.TextView');
    }
    get Profile_charging_history_download_recipt(){
        return $('//android.view.ViewGroup[@content-desc="Download PDF, "]');
    }
    get Profile_downloaded_invoice_open(){
        return $("//android.widget.Button[@text='OPEN']");
    }
    get profile_wallet_deposite_button(){
        return $('//android.view.ViewGroup[@content-desc="wallet_add_money_button"]');
    }
    get Wallet_add_money_button(){
        return $('//android.view.ViewGroup[@content-desc="wallet_add_money"]/android.widget.TextView');
    }
    get Charger_history_charger(){
        return $("(//android.widget.TextView[@text='Charger ID - 2bb4g4'])[1]");
    }

  








}
module.exports=new  profile();