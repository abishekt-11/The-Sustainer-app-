class map{

get Active_session_button(){
 return $('//android.widget.TextView[@content-desc="home_active_session_btn"]');
}
get active_session_charger(){
    return $("//android.widget.TextView[@text='Charging']");
}
get favorite(){
    return $('//android.view.ViewGroup[@content-desc="home_favorite_btn"]');
}
get map_recenter_button(){
    return $('//android.view.ViewGroup[@content-desc="home_gps_btn"]');
}
get whats_app(){
    return $('//android.view.ViewGroup[@content-desc="home_whatsapp_btn"]');
}
get notification(){
    return $('//android.view.ViewGroup[@content-desc="home_notification_btn"]');
}
get amenities_no(){
    return $('//android.view.ViewGroup[@content-desc="Skip"]');
}
get search_text_bar(){
    return $('//android.view.ViewGroup[@content-desc="home_search_bar"]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.EditText');
}
get Filter_button(){
    return $('//android.view.ViewGroup[@content-desc="home_filter_btn"]');
}
get hamburger_menu(){
    return $('//android.view.ViewGroup[@content-desc="home_drawer_btn"]');
}
get charger_ev_card(){
    return $('//android.view.ViewGroup[@content-desc="home_listview_card_1"]');
}
get Testing_charger(){
    return $("//android.widget.TextView[@text='WM_07']");
}
get Fav_ev_card(){
    return $('//android.view.ViewGroup[@content-desc="favorite_charger_card_0"]');
}
get ev_cards_connectore(){
    return $('//android.view.ViewGroup[@content-desc="tariff_tab_connectors"]');
}
get ev_cards_reviews(){
    return $('//android.view.ViewGroup[@content-desc="tariff_tab_reviews"]');
}
get ev_card_favorite(){
    return $('//android.view.ViewGroup[@content-desc="tariff_fav_btn"]');
}
get ev_card_back_button(){
    return $('//android.view.ViewGroup[@content-desc=", Back"]');
}
get ev_card_write_review(){
    return $('//android.widget.Button[@content-desc="tariff_write_review_btn"]');
}

get list_view(){
    return $('//android.view.ViewGroup[@content-desc="home_listview_toggle"]/android.widget.TextView');
}
get Map_view(){
    return $("//android.widget.TextView[@text='Map View']");
}
get filter_type_7_plug_filter(){
    return $('//android.view.ViewGroup[@content-desc="filter_plug_type_type_7"]');
}
get apply_filter_button(){
    return $('//android.view.ViewGroup[@content-desc="filter_apply_btn"]');
}
get filter_reset_button(){
    return $('//android.view.ViewGroup[@content-desc="filter_reset_btn"]');
}
get ev_card_overview(){
    return $('//android.view.ViewGroup[@content-desc="tariff_tab_overview"]');
}
get ev_card_book_button(){
    return $('//android.widget.Button[@content-desc="tariff_book_btn"]');
}
get ev_card_start_charging_button(){
    return $('//android.widget.Button[@content-desc="tariff_start_charging_btn"]');
}
get fav_screen_back_buttton(){
    return $('//android.widget.TextView[@content-desc="favorite_back_button"]');
}
get map_screen_ev_card(){
    return $('//android.view.ViewGroup[@content-desc="home_mapview_card_1"]/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.ImageView');
}
get whats_app_er_message_ok(){
    return $("//android.widget.Button[@text='OK']");
}
get Active_session_back_button(){
    return $('//android.widget.TextView[@content-desc="activeSession_back_btn"]');
}
get Active_session_button_chag(){
    return $('//android.view.ViewGroup[@content-desc="home_active_session_btn"]');
}
get Notification(){
    return $('//android.view.ViewGroup[starts-with(@content-desc,"home_notification_btn")]');
}
get notiication_charger_details(){
    return $('//android.view.ViewGroup[@content-desc="notification_item_1"]');
}
get Notification_screen_back_button(){
    return $('//android.widget.TextView[@content-desc="notification_back_btn"]');
}
get Write_review_button(){
    return $('~tariff_review_btn');
}
get Review_5_star_button(){
    return $('(//android.view.ViewGroup[@content-desc="tariff_star_btn"])[5]');
}
get Write_review_text_box(){
    return $('//android.widget.EditText[@content-desc="tariff_text_ip"]');
}
get Submit_review_button(){
    return $('//android.widget.Button[@content-desc="tariff_submit_btn"]');
}
get Review_delete(){
    return $('//android.view.ViewGroup[@content-desc=", Delete"]');
}
get Review_edit(){
    return $('//android.view.ViewGroup[@content-desc=", Edit"]');
}
get Review_update_button(){
    return $('//android.widget.Button[@content-desc="Update Review"]');
}
get Review_4_star(){
    return $('(//android.view.ViewGroup[@content-desc="tariff_star_btn"])[4]');
}
get update_review_button(){
    return $('//android.widget.Button[@content-desc="tariff_edit_review_btn"]');
}
get Notification_1(){
    return $('//android.view.ViewGroup[@content-desc="notification_item_5"]/android.widget.TextView[2]');
}
get Notification_view_traiff(){
    return $('//android.view.ViewGroup[@content-desc="View Tariff Card"]/android.widget.TextView');
}
get Notification_view_traiff_back_button(){
    return $('//android.view.ViewGroup[@content-desc="󰅁"]/android.widget.TextView');
}
get Notification_view_recipt(){
    return $('//android.view.ViewGroup[@content-desc="View Receipt"]/android.widget.TextView');
}
get Notification_download_pdf(){
    return $('//android.view.ViewGroup[@content-desc="Download PDF, "]');
}
get Notification_download_pdf_open(){
    return $("//android.widget.Button[@text='OPEN']");
}
get Review_three_dot(){
    return $('//android.view.ViewGroup[@content-desc=""]');
}
get Review_delete_button(){
    return $('//android.view.ViewGroup[@content-desc=", Delete"]');
}
get Book_date(){
    return $('//android.view.ViewGroup[@content-desc="THU, 19"]');
}
get Book_connector(){
    return $('//android.view.ViewGroup[@content-desc="booking_connector_1"]');
}
get Book_Button(){
    return $('//android.view.ViewGroup[@content-desc="booking_book_session_btn"]');
}
get Book_confrimation_ok(){
    return $("//android.widget.Button[@text='OK']");
}
get Schedule_confrimation_ok(){
    return $("//android.widget.Button[@text='OK']");
}
get Scheduling_button(){
    return $('//android.view.ViewGroup[@content-desc="booking_tab_scheduling"]');
}
get Schedule_date_1(){
    return $('//android.view.ViewGroup[@content-desc="WED, 18"]');
}
get Schedule_connectors(){
    return $('//android.view.ViewGroup[@content-desc="booking_connector_1"]');
}
get Review_write_review(){
    return $('//android.widget.Button[@content-desc="tariff_write_review_btn"]');
}
get Book_schedule_button(){
    return $('//android.view.ViewGroup[@content-desc="booking_schedule_session_btn"]');
}

}
module.exports=new  map();