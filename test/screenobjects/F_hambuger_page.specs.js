class hamburgermenu{

    get iam_host(){
        return $('//android.view.ViewGroup[@content-desc="drawer_host"]');
    }
    get Bookings(){
        return $('//android.view.ViewGroup[@content-desc="drawer_bookings"]');
    }
    get Bookings_delete_button_1(){
        return $('(//android.view.ViewGroup[@content-desc=""])[1]/android.widget.TextView');
    }
    get Bookingd_delete_button_2(){
        return $('//android.view.ViewGroup[@content-desc=""]/android.widget.TextView');
    }
    get Bookings_delete_no(){
        return $("//android.widget.Button[@text='NO']");
    }
    get Bookings_delete_yes(){
        return $("//android.widget.Button[@text='YES']");
    }
    get favorites(){
        return $('//android.view.ViewGroup[@content-desc="drawer_favorites"]');
    }
    get my_vehicle(){
        return $('//android.view.ViewGroup[@content-desc="drawer_vehicles"]');
    }
    get my_charging_history(){
        return $('//android.view.ViewGroup[@content-desc="drawer_charging_history"]');
    }
    get My_vehicle_view_vehicle(){
        return $('//android.view.ViewGroup[@content-desc="my_vehicle_card1"]/android.view.ViewGroup');
    }
    get My_vehicle_delete_button(){
        return $('//android.widget.TextView[@content-desc="edit_vehicle_delete_icon"]');
    }
    get My_vehicle_delete_ok(){
        return $('//android.view.ViewGroup[@content-desc="edit_vehicle_delete_alert"]');
    }
    get Whats_app_support(){
        return $('//android.view.ViewGroup[@content-desc="drawer_support_whatsapp"]');
    }
    get Whats_app_ok(){
        return $("//android.widget.Button[@text='OK']");
    }
    get Log_out_button(){
        return $('//android.view.ViewGroup[@content-desc=", Log Out"]');
    }
    get hamburgermenu(){
        return $('//android.widget.TextView[@content-desc="home_drawer_btn"]');
    }
    get Vehicle_delete_car(){
        return $('//android.view.ViewGroup[@content-desc="my_vehicle_card1"]/android.view.ViewGroup');
    }
    get Delete_vehicle_icon(){
        return $('//android.widget.TextView[@content-desc="edit_vehicle_delete_icon"]');
    }
    get Delete_confrimation_message(){
        return $('//android.view.ViewGroup[@content-desc="edit_vehicle_delete_alert"]');
    }
    get Log_out_button_ok(){
        return $("//android.widget.Button[@text='YES']");
    }
    get Log_out_button_No(){
        return $("//android.widget.Button[@text='NO']");
    }
    get Range_rover(){
        return $('//android.view.ViewGroup[@content-desc="Range Rover"]/android.widget.TextView');
    }
    get Range_rover_model(){
        return $('//android.view.ViewGroup[@content-desc="Evoque P300e"]/android.widget.TextView');
    }
    get Host_get_started(){
        return $('//android.widget.Button[@content-desc="hostRegistration_getStarted_btn"]');
    }
    get Host_get_start_pop_up(){
        return $("//android.widget.Button[@text='While using the app']");
    }
    get my_charging_history_charger(){
        return $("(//android.widget.TextView[@text='Charger ID - saun2d'])[1]");
    }
    get my_charging_history_charger_view_recipt(){
        return $('//android.view.ViewGroup[@content-desc="View Receipt"]/android.widget.TextView');
    }
    get my_charging_history_charger_view_recipt_download(){
        return $('//android.view.ViewGroup[@content-desc="Download PDF, "]');
    }
    get my_charging_history_charger_view_recipt_download_open(){
        return $("//android.widget.Button[@text='OPEN']");
    }
    get bookings_back_button(){
        return $('//android.widget.TextView[@content-desc="booking_back_button"]');
    }

    







}
module.exports=new  hamburgermenu();
