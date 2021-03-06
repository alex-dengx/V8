
var SKIN_ON_CLICK_CLOSE = 1;
var SKIN_ON_CLICK_OK = 2;
var SKIN_ON_CLICK_TAB_PERSONAL_SETTING = 3;
var SKIN_ON_CLICK_TAB_SYSTEM_SETTING = 4;
var SKIN_NOTIFY_PERSONAL_DLG_HWND = 7;
var SKIN_NOTIFY_BASICSETTING_DLG_HWND = 9;
var SKIN_NOTIFY_AUDIOSETTING_DLG_HWND = 10;
var SKIN_NOTIFY_PWDSAFE_DLG_HWND = 12;
var SKIN_NOTIFY_MYROOM_DLG_HWND = 13;
var SKIN_ON_CLICK_BTN_CHANGE_HEAD = 14;
var SKIN_ON_CLICK_APPLY = 15;
var SKIN_NOTIFY_MYACCOUNT_DLG_HWND = 16;
var SKIN_NOTIFY_SOUND_SETTIND_DLG_HWND = 17;
var SKIN_NOTIFY_MESSAGE_SETTING_DLG_HWND = 18;
var SKIN_ON_CLICK_MINIMIZE = 19;
var SKIN_NOTIFY_SHOW_PERSONAL_ONLY = 20;
var SKIN_NOTIFY_SHOW_SYS_ONLY = 21;
var SKIN_NOTIFY_FANS_DLG_HWND = 22;
var SKIN_NOTIFY_FANS_DLG_SHOW = 23;
var SKIN_NOTIFY_BANKACCOUNT_DLG_HWND = 24;
var SKIN_NOTIFY_BANKACCOUNT_DLG_SHOW = 25;
var FansDlgIsShow = 0; //我的粉丝是否显示  0为不显示 1为显示  默认为0不显示
var BankAccountDlgIsShow = 0; //银行账号是否显示  0为不显示 1为显示  默认为0不显示


var last_imgItsBk_left = 0;
var last_imgItsBk_top = 0;
var last_imgItsBk_height = 0;
var last_imgItsBk_width = 0;
var last_iconIts_left = 0;

Window.AttachEvent("OnInit", OnInit);
Window.AttachEvent("OnSize", OnSize);
Window.AttachEvent("OnNotify", OnNotify);

btnSysClose.AttachEvent("OnClick", btnCloseOnClick);
btnSysMinimize.AttachEvent("OnClick",btnMinimizeOnClick);

op_ok.AttachEvent("OnClick", btnOKOnClick);
op_cancel.AttachEvent("OnClick", btnCloseOnClick);
op_apply.AttachEvent("OnClick",btnApplyOnClick);

btnChangeHead.AttachEvent("OnClick",OnClickBtnChangeHead);

var m_bPersonalOnly = false;
var m_bSysOnly = false;

//个人设置
iconBasicInfo.AttachEvent("OnClick", OnClickBasicInfo);
textItemBasicInfo.AttachEvent("OnClick", OnClickBasicInfo);
iconMyRoom.AttachEvent("OnClick", OnClickMyRoom);
textItemMyRoom.AttachEvent("OnClick", OnClickMyRoom);
iconBankAccount.AttachEvent("OnClick", OnClickBankAccount);
textItemBankAccount.AttachEvent("OnClick", OnClickBankAccount);
iconMyAccount.AttachEvent("OnClick", OnClickMyAccount);
textItemMyAccount.AttachEvent("OnClick", OnClickMyAccount);
iconPwdSafe.AttachEvent("OnClick", OnClickPwdSafe);
textItemPwdSafe.AttachEvent("OnClick", OnClickPwdSafe);
iconFans.AttachEvent("OnClick", OnClickFans);
textItemFans.AttachEvent("OnClick", OnClickFans);
function OnClickBasicInfo(){ Window.PostSkinMessage(SKIN_ON_CLICK_TAB_PERSONAL_SETTING, 0); }
function OnClickMyRoom(){ Window.PostSkinMessage(SKIN_ON_CLICK_TAB_PERSONAL_SETTING, 1); }
function OnClickMyAccount(){ Window.PostSkinMessage(SKIN_ON_CLICK_TAB_PERSONAL_SETTING, 2); }
function OnClickPwdSafe(){ Window.PostSkinMessage(SKIN_ON_CLICK_TAB_PERSONAL_SETTING, 3); }
function OnClickFans(){ Window.PostSkinMessage(SKIN_ON_CLICK_TAB_PERSONAL_SETTING, 4); }
function OnClickBankAccount(){ Window.PostSkinMessage(SKIN_ON_CLICK_TAB_PERSONAL_SETTING, 5); }

//系统设置
iconBasicSet.AttachEvent("OnClick", OnClickBasicSet);
textItemBasicSet.AttachEvent("OnClick", OnClickBasicSet);
iconVideoSet.AttachEvent("OnClick", OnClickVideoSet);
textItemVideoSet.AttachEvent("OnClick", OnClickVideoSet);
iconAudioSet.AttachEvent("OnClick", OnClickAudioSet);
textItemAudioSet.AttachEvent("OnClick", OnClickAudioSet);
iconMsgSet.AttachEvent("OnClick", OnClickMsgSet);
textItemMsgSet.AttachEvent("OnClick", OnClickMsgSet);
function OnClickBasicSet(){ Window.PostSkinMessage(SKIN_ON_CLICK_TAB_SYSTEM_SETTING, 0); }
function OnClickVideoSet(){ Window.PostSkinMessage(SKIN_ON_CLICK_TAB_SYSTEM_SETTING, 1); }
function OnClickAudioSet(){ Window.PostSkinMessage(SKIN_ON_CLICK_TAB_SYSTEM_SETTING, 2); }
function OnClickMsgSet(){ Window.PostSkinMessage(SKIN_ON_CLICK_TAB_SYSTEM_SETTING, 3); }

function OnClickBtnChangeHead()
{
	Window.PostSkinMessage(SKIN_ON_CLICK_BTN_CHANGE_HEAD, 0);
}

function btnCloseOnClick()
{
	Window.PostSkinMessage(SKIN_ON_CLICK_CLOSE, 0);
}

function btnMinimizeOnClick()
{
	Window.PostSkinMessage(SKIN_ON_CLICK_MINIMIZE, 0);
}

function btnOKOnClick()
{
	Window.PostSkinMessage(SKIN_ON_CLICK_OK, 0);
}
function btnApplyOnClick()
{
	Window.PostSkinMessage(SKIN_ON_CLICK_APPLY, 0);
}


function OnInit()
{
    textTitle.visible = false;
    FansDlgIsShow = 0;
	BankAccountDlgIsShow = 0;
	btnSysClose.left -= 3;
	OnSize(Window.width, Window.height);
}

function OnSize(cx, cy)
{	
	op_apply.width = 111;
	op_apply.height = 45;
	op_apply.left = cx - op_apply.width - 8;
	op_apply.top = cy - op_apply.height - 8;
	
	op_cancel.width = op_apply.width;
	op_cancel.height = op_apply.height;
	op_cancel.left = op_apply.left - op_cancel.width - 2;
	op_cancel.top = op_apply.top;
	
	op_ok.width = op_cancel.width;
	op_ok.height = op_cancel.height;
	op_ok.left = op_cancel.left - op_ok.width - 2;
	op_ok.top = op_cancel.top;
	
	imgSettingDlgTopBk.left = 2;
	imgSettingDlgTopBk.top = 2;
	
	imgSettingDlgLeftBk.left = imgSettingDlgTopBk.left;
	imgSettingDlgLeftBk.top = imgSettingDlgTopBk.top + imgSettingDlgTopBk.height;
	
	imgSettingDlgBottomBk.left = imgSettingDlgLeftBk.left + imgSettingDlgLeftBk.width;
	imgSettingDlgBottomBk.top = cy - 2 - imgSettingDlgBottomBk.height;
	
	textTheTitle.left = 35;
	textTheTitle.top = 16;
	textTheTitle.width = textTheTitle.textWidth;
	textTheTitle.height = textTheTitle.textHeight;

	UserHead.left = imgSettingDlgLeftBk.left + (imgSettingDlgLeftBk.width - headBorder.width)/2;
	UserHead.top = imgSettingDlgLeftBk.top + 5;
	UserHead.width = 100;
	UserHead.height = 100;
	
	headBorder.width = 111;
	headBorder.height = 111;
	headBorder.left = UserHead.left -5;
	headBorder.top = UserHead.top - 5;	
	
	btnChangeHead.left = UserHead.left + (UserHead.width - btnChangeHead.width)/2;
	btnChangeHead.top = UserHead.top + UserHead.height + 5;
	
	//个人设置
	tabListItemBk1.visible = !m_bSysOnly;
	tabListItemBk1.left = imgSettingDlgLeftBk.left;
	tabListItemBk1.top = btnChangeHead.top + btnChangeHead.height + 5;
	tabListItemBk1.width = 145;
	tabListItemBk1.height = 39;
	textPersonal.visible = tabListItemBk1.visible;
	textPersonal.width = textPersonal.textWidth;
	textPersonal.height = textPersonal.textHeight;
	textPersonal.left = tabListItemBk1.left + (tabListItemBk1.width - textPersonal.width)/2;
	textPersonal.top = tabListItemBk1.top + (tabListItemBk1.height - textPersonal.height)/2 - 3;
	
	//imgBasicInfoBk.visible = tabListItemBk1.visible;
	imgBasicInfoBk.left = tabListItemBk1.left;
	imgBasicInfoBk.top = tabListItemBk1.top + tabListItemBk1.height + 1;
	imgBasicInfoBk.width = tabListItemBk1.width;
	imgBasicInfoBk.height = 19;
	iconBasicInfo.visible = tabListItemBk1.visible;
	iconBasicInfo.left = textPersonal.left - 4;
	iconBasicInfo.top = imgBasicInfoBk.top + 2;
	textItemBasicInfo.visible = tabListItemBk1.visible;
	textItemBasicInfo.width = textItemBasicInfo.textWidth;
	textItemBasicInfo.height = textItemBasicInfo.textHeight;
	textItemBasicInfo.left = iconBasicInfo.left + iconBasicInfo.width + 1;
	textItemBasicInfo.top = imgBasicInfoBk.top + (imgBasicInfoBk.height - textItemBasicInfo.height)/2;
	
	//imgMyRoomBk.visible = tabListItemBk1.visible;
	imgMyRoomBk.left = imgBasicInfoBk.left;
	imgMyRoomBk.top = imgBasicInfoBk.top + imgBasicInfoBk.height;
	imgMyRoomBk.width = imgBasicInfoBk.width;
	imgMyRoomBk.height = imgBasicInfoBk.height;
	iconMyRoom.visible = tabListItemBk1.visible;
	iconMyRoom.left = iconBasicInfo.left;
	iconMyRoom.top = imgMyRoomBk.top + 2;
	textItemMyRoom.visible = tabListItemBk1.visible;
	textItemMyRoom.width = textItemMyRoom.textWidth;
	textItemMyRoom.height = textItemMyRoom.textHeight;
	textItemMyRoom.left = iconMyRoom.left + iconMyRoom.width + 1;
	textItemMyRoom.top = imgMyRoomBk.top + (imgMyRoomBk.height - textItemMyRoom.height)/2;
	
	
	last_imgItsBk_left = imgMyRoomBk.left;
	last_imgItsBk_top = imgMyRoomBk.top;
	last_imgItsBk_height = imgMyRoomBk.height;
	last_imgItsBk_width = imgMyRoomBk.width;
	last_iconIts_left = iconMyRoom.left;	
	
	if(BankAccountDlgIsShow)
	{
		//显示 银行账号
		//imgBankAccountBk.visible = tabListItemBk1.visible;
		imgBankAccountBk.left = last_imgItsBk_left;
		imgBankAccountBk.top = last_imgItsBk_top + last_imgItsBk_height;
		imgBankAccountBk.width = last_imgItsBk_width;
		imgBankAccountBk.height = last_imgItsBk_height;
		iconBankAccount.visible = tabListItemBk1.visible;
		iconBankAccount.left = last_iconIts_left;
		iconBankAccount.top = imgBankAccountBk.top + 2;
		textItemBankAccount.visible = tabListItemBk1.visible;
		textItemBankAccount.width = textItemBankAccount.textWidth;
		textItemBankAccount.height = textItemBankAccount.textHeight;
		textItemBankAccount.left = iconBankAccount.left + iconBankAccount.width + 1;
		textItemBankAccount.top = imgBankAccountBk.top + (imgBankAccountBk.height - textItemBankAccount.height)/2;

		last_imgItsBk_left = imgBankAccountBk.left;
		last_imgItsBk_top = imgBankAccountBk.top;
		last_imgItsBk_height = imgBankAccountBk.height;
		last_imgItsBk_width = imgBankAccountBk.width;
		last_iconIts_left = iconBankAccount.left;			
	}
	else
	{
		//不显示 银行账号
		iconBankAccount.visible = false;
	    textItemBankAccount.visible = false;    
	}		
		
	if(FansDlgIsShow)
	{
	   //显示 我的粉丝		   
	    iconFans.visible = true;
	    textItemFans.visible = true;   
	    //显示 我的粉丝
	    //imgFansBk.visible = tabListItemBk1.visible;
	    imgFansBk.left = last_imgItsBk_left;
	    imgFansBk.top = last_imgItsBk_top + last_imgItsBk_height;
	    imgFansBk.width = last_imgItsBk_width;
	    imgFansBk.height = last_imgItsBk_height;
	    iconFans.visible = tabListItemBk1.visible;
	    iconFans.left = last_iconIts_left;
	    iconFans.top = imgFansBk.top + 2;
	    textItemFans.visible = tabListItemBk1.visible;
	    textItemFans.width = textItemFans.textWidth;
	    textItemFans.height = textItemFans.textHeight;
	    textItemFans.left = iconFans.left + iconFans.width + 1;
	    textItemFans.top = imgFansBk.top + (imgFansBk.height - textItemFans.height)/2;	  

		last_imgItsBk_left = imgFansBk.left;
		last_imgItsBk_top = imgFansBk.top;
		last_imgItsBk_height = imgFansBk.height;
		last_imgItsBk_width = imgFansBk.width;
		last_iconIts_left = iconFans.left;	
	   
	}
	else
	{
	    //不显示 我的粉丝		    
	    iconFans.visible = false;
	    textItemFans.visible = false;    
	}
	
	//imgMyAccountBk.visible = tabListItemBk1.visible;
	imgMyAccountBk.left = last_imgItsBk_left;
	imgMyAccountBk.top = last_imgItsBk_top + last_imgItsBk_height;
	imgMyAccountBk.width = last_imgItsBk_width;
	imgMyAccountBk.height = last_imgItsBk_height;
	iconMyAccount.visible = tabListItemBk1.visible;
	iconMyAccount.left = last_iconIts_left;
	iconMyAccount.top = imgMyAccountBk.top + 2;
	textItemMyAccount.visible = tabListItemBk1.visible;
	textItemMyAccount.width = textItemMyAccount.textWidth;
	textItemMyAccount.height = textItemMyAccount.textHeight;
	textItemMyAccount.left = iconMyAccount.left + iconMyAccount.width + 1;
	textItemMyAccount.top = imgMyAccountBk.top + (imgMyAccountBk.height - textItemMyAccount.height)/2;
	    
	
	//imgPwdSafeBk.visible = tabListItemBk1.visible;
	imgPwdSafeBk.left = imgMyAccountBk.left;
	imgPwdSafeBk.top = imgMyAccountBk.top + imgMyAccountBk.height;
	imgPwdSafeBk.width = imgMyAccountBk.width;
	imgPwdSafeBk.height = imgMyAccountBk.height;
	iconPwdSafe.visible = tabListItemBk1.visible;
	iconPwdSafe.left = iconMyAccount.left;
	iconPwdSafe.top = imgPwdSafeBk.top + 2;
	textItemPwdSafe.visible = tabListItemBk1.visible;
	textItemPwdSafe.width = textItemPwdSafe.textWidth;
	textItemPwdSafe.height = textItemPwdSafe.textHeight;
	textItemPwdSafe.left = iconPwdSafe.left + iconPwdSafe.width + 1;
	textItemPwdSafe.top = imgPwdSafeBk.top + (imgPwdSafeBk.height - textItemPwdSafe.height)/2;	
	
	
	//系统设置
	tabListItemBk2.visible = !m_bPersonalOnly;
	tabListItemBk2.left = tabListItemBk1.left ;
	if(!m_bSysOnly)
	{
	   tabListItemBk2.top = imgPwdSafeBk.top + imgPwdSafeBk.height + 2;
	}else
	{
		tabListItemBk2.top = imgSettingDlgLeftBk.top + 40;
	}
	tabListItemBk2.width = tabListItemBk1.width;
	tabListItemBk2.height = tabListItemBk1.height;
	textSys.visible = tabListItemBk2.visible;
	textSys.width = textSys.textWidth;
	textSys.height = textSys.textHeight;
	textSys.left = tabListItemBk2.left + (tabListItemBk2.width - textSys.width)/2;
	textSys.top = tabListItemBk2.top + (tabListItemBk2.height - textSys.height)/2 - 3;
	
	//imgBasicSetBk.visible = tabListItemBk2.visible;
    imgBasicSetBk.left = imgPwdSafeBk.left;
	imgBasicSetBk.top = tabListItemBk2.top + tabListItemBk2.height + 1;
	imgBasicSetBk.width = imgPwdSafeBk.width;
	imgBasicSetBk.height = imgPwdSafeBk.height;
	iconBasicSet.visible = tabListItemBk2.visible;
	iconBasicSet.left = iconPwdSafe.left;
	iconBasicSet.top = imgBasicSetBk.top + 2;
	textItemBasicSet.visible = tabListItemBk2.visible;
	textItemBasicSet.width = textItemBasicSet.textWidth;
	textItemBasicSet.height = textItemBasicSet.textHeight;
	textItemBasicSet.left = iconBasicSet.left + iconBasicSet.width + 1;
	textItemBasicSet.top = imgBasicSetBk.top + (imgBasicSetBk.height - textItemBasicSet.height)/2;
	
	//imgVideoSetBk.visible = tabListItemBk2.visible;
	imgVideoSetBk.left = imgBasicSetBk.left;
	imgVideoSetBk.top = imgBasicSetBk.top + imgBasicSetBk.height;
	imgVideoSetBk.width = imgBasicSetBk.width;
	imgVideoSetBk.height = imgBasicSetBk.height;
	iconVideoSet.visible = tabListItemBk2.visible;
	iconVideoSet.left = iconBasicSet.left;
	iconVideoSet.top = imgVideoSetBk.top + 2;
	textItemVideoSet.visible = tabListItemBk2.visible;
	textItemVideoSet.width = textItemVideoSet.textWidth;
	textItemVideoSet.height = textItemVideoSet.textHeight;
	textItemVideoSet.left = iconVideoSet.left + iconVideoSet.width + 1;
	textItemVideoSet.top = imgVideoSetBk.top + (imgVideoSetBk.height - textItemVideoSet.height)/2; 
	
	//imgAudioSetBk.visible = tabListItemBk2.visible;
	imgAudioSetBk.left = imgVideoSetBk.left;
	imgAudioSetBk.top = imgVideoSetBk.top + imgVideoSetBk.height;
	imgAudioSetBk.width = imgVideoSetBk.width;
	imgAudioSetBk.height = imgVideoSetBk.height;
	iconAudioSet.visible = tabListItemBk2.visible;
	iconAudioSet.left = iconVideoSet.left;
	iconAudioSet.top = imgAudioSetBk.top + 2;
	textItemAudioSet.visible = tabListItemBk2.visible;
	textItemAudioSet.width = textItemAudioSet.textWidth;
	textItemAudioSet.height = textItemAudioSet.textHeight;
	textItemAudioSet.left = iconAudioSet.left + iconAudioSet.width + 1;
	textItemAudioSet.top = imgAudioSetBk.top + (imgAudioSetBk.height - textItemAudioSet.height)/2; 
	
	//imgMsgSetBk.visible = tabListItemBk2.visible;
	imgMsgSetBk.left = imgAudioSetBk.left;
	imgMsgSetBk.top = imgAudioSetBk.top + imgAudioSetBk.height;
	imgMsgSetBk.width = imgAudioSetBk.width;
	imgMsgSetBk.height = imgAudioSetBk.height;
	iconMsgSet.visible = tabListItemBk2.visible;
	iconMsgSet.left = iconAudioSet.left;
	iconMsgSet.top = imgMsgSetBk.top + 2;
	textItemMsgSet.visible = tabListItemBk2.visible;
	textItemMsgSet.width = textItemMsgSet.textWidth;
	textItemMsgSet.height = textItemMsgSet.textHeight;
	textItemMsgSet.left = iconMsgSet.left + iconMsgSet.width + 1; 
	textItemMsgSet.top = imgMsgSetBk.top + (imgMsgSetBk.height - textItemMsgSet.height)/2; 
	
		
	/*右边的子窗口*/
	//////个人资料//////
	itemShowPersonalDlg.visible = true;
	itemShowPersonalDlg.left = imgSettingDlgLeftBk.left + imgSettingDlgLeftBk.width;;
	itemShowPersonalDlg.top = imgSettingDlgTopBk.top + imgSettingDlgTopBk.height;
	itemShowPersonalDlg.width = cx - itemShowPersonalDlg.left;
	itemShowPersonalDlg.height = imgSettingDlgBottomBk.top - itemShowPersonalDlg.top;
    //////基本设置 /////////
	itemShowBasicSettingDlg.visible = false;
	itemShowBasicSettingDlg.left = itemShowPersonalDlg.left;
	itemShowBasicSettingDlg.top = itemShowPersonalDlg.top;
	itemShowBasicSettingDlg.width = itemShowPersonalDlg.width;
	itemShowBasicSettingDlg.height = itemShowPersonalDlg.height;
	/////// 视频设置 /////////
	itemShowAudioSettingDlg.visible = false;
	itemShowAudioSettingDlg.left = itemShowPersonalDlg.left;
	itemShowAudioSettingDlg.top = itemShowPersonalDlg.top;
	itemShowAudioSettingDlg.width = itemShowPersonalDlg.width;
	itemShowAudioSettingDlg.height = itemShowPersonalDlg.height;
	////////密码安全//////////
	itemShowPwdSafeDlg.visible = false;
	itemShowPwdSafeDlg.left = itemShowPersonalDlg.left;
	itemShowPwdSafeDlg.top = itemShowPersonalDlg.top;
	itemShowPwdSafeDlg.width = itemShowPersonalDlg.width;
	itemShowPwdSafeDlg.height = itemShowPersonalDlg.height;
	////////我的房间////////////
	itemShowMyRoomDlg.visible = false;
	itemShowMyRoomDlg.left = itemShowPersonalDlg.left;
	itemShowMyRoomDlg.top = itemShowPersonalDlg.top;
	itemShowMyRoomDlg.width = itemShowPersonalDlg.width;
	itemShowMyRoomDlg.height = itemShowPersonalDlg.height;
	////////我的账号////////////
	itemShowMyAccountDlg.visible = false;
	itemShowMyAccountDlg.left = itemShowPersonalDlg.left ;
	itemShowMyAccountDlg.top = itemShowPersonalDlg.top;
	itemShowMyAccountDlg.width = itemShowPersonalDlg.width;
	itemShowMyAccountDlg.height = itemShowPersonalDlg.height;	
	////////粉丝排行////////////
	if(FansDlgIsShow)
	{
	    itemShowFansDlg.visible = true;
	   
	}
	else
	{
	    itemShowFansDlg.visible = false;	
	}
	itemShowFansDlg.left = itemShowPersonalDlg.left ;
	itemShowFansDlg.top = itemShowPersonalDlg.top;
	itemShowFansDlg.width = itemShowPersonalDlg.width;
	itemShowFansDlg.height = itemShowPersonalDlg.height;	
	
	////////银行账号////////////
	itemBankAccountDlg.visible = false;
	itemBankAccountDlg.left = itemShowPersonalDlg.left ;
	itemBankAccountDlg.top = itemShowPersonalDlg.top;
	itemBankAccountDlg.width = itemShowPersonalDlg.width;
	itemBankAccountDlg.height = itemShowPersonalDlg.height;	
	
	////////音频设置////////////
	itemShowSoundSettingDlg.visible = false;
	itemShowSoundSettingDlg.left = itemShowPersonalDlg.left;
	itemShowSoundSettingDlg.top = itemShowPersonalDlg.top;
	itemShowSoundSettingDlg.width = itemShowPersonalDlg.width;
	itemShowSoundSettingDlg.height = itemShowPersonalDlg.height;
	////////消息设置////////////
	itemShowMessageSettingDlg.visible = false;
	itemShowMessageSettingDlg.left = itemShowPersonalDlg.left;
	itemShowMessageSettingDlg.top = itemShowPersonalDlg.top;
	itemShowMessageSettingDlg.width = itemShowPersonalDlg.width;
	itemShowMessageSettingDlg.height = itemShowPersonalDlg.height;
	
	// imgApplyEffect.left = 2;
	// imgApplyEffect.top = 2;
	// imgApplyEffect.width = cx - 4;
	// imgApplyEffect.height = cy - 4;
}

function OnNotify(code, code1)
{
	switch(code)
	{ 
		case SKIN_NOTIFY_PERSONAL_DLG_HWND:
		    itemShowPersonalDlg.SetClient(code1);
			break;

		case SKIN_NOTIFY_BASICSETTING_DLG_HWND:
		    itemShowBasicSettingDlg.SetClient(code1);
			break;

		case SKIN_NOTIFY_PWDSAFE_DLG_HWND:
		    itemShowPwdSafeDlg.SetClient(code1);
			break;
		case SKIN_NOTIFY_MYROOM_DLG_HWND:
		    itemShowMyRoomDlg.SetClient(code1);
			break;
		case SKIN_NOTIFY_MYACCOUNT_DLG_HWND:
		    itemShowMyAccountDlg.SetClient(code1);
			break;
		case SKIN_NOTIFY_BANKACCOUNT_DLG_HWND:
		    itemBankAccountDlg.SetClient(code1);
			break;
		case SKIN_NOTIFY_FANS_DLG_HWND:
		    itemShowFansDlg.SetClient(code1);
			break;
		case SKIN_NOTIFY_SOUND_SETTIND_DLG_HWND:
		    itemShowSoundSettingDlg.SetClient(code1);
		    break;
		case SKIN_NOTIFY_MESSAGE_SETTING_DLG_HWND:
		    itemShowMessageSettingDlg.SetClient(code1);
			break;
		case SKIN_NOTIFY_SHOW_PERSONAL_ONLY:
		     {
			     m_bPersonalOnly = true;
				 m_bSysOnly = false;
				 OnSize(Window.width, Window.height);
			 }
			break;
		case SKIN_NOTIFY_SHOW_SYS_ONLY:
		    {
				 m_bPersonalOnly = false;
				 m_bSysOnly = true;
				 OnSize(Window.width, Window.height);
			}
            break;	
        case SKIN_NOTIFY_FANS_DLG_SHOW:
		    {
				FansDlgIsShow = code1;
				OnSize(Window.width, Window.height);
			}
            break;		
		case SKIN_NOTIFY_BANKACCOUNT_DLG_SHOW:
		    {
				BankAccountDlgIsShow = code1;
				OnSize(Window.width, Window.height);
			}
            break;					
		default:
			break;
	}
}
