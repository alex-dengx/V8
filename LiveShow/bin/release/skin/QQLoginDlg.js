
Window.AttachEvent("OnInit", OnInit);
Window.AttachEvent("OnSize", OnSize);
Window.AttachEvent("OnNotify", OnNotify);


function OnInit()
{
	textTitle.text = "";
    textTitle.visible=false;
	
	OnSize(Window.width, Window.height);
}

function OnSize(cx, cy)
{	
    imgFramgQQLoginDlg.visible = true;
	imgFramgQQLoginDlg.left = 0;
	imgFramgQQLoginDlg.top = 0;
	imgFramgQQLoginDlg.width = cx;
	imgFramgQQLoginDlg.height = cy;

	imgQQLoginBk.visible = true;
	imgQQLoginBk.left = 1;
	imgQQLoginBk.top = 1;
	imgQQLoginBk.width = cx - 2;
	imgQQLoginBk.height = cy - 2;
	
	itemHtmlQQLogin.visible = true;
	itemHtmlQQLogin.left = imgQQLoginBk.left;
	itemHtmlQQLogin.top = imgQQLoginBk.top;
	itemHtmlQQLogin.width = imgQQLoginBk.width;
	itemHtmlQQLogin.height = imgQQLoginBk.height;
}

function OnNotify(code, code1)
{
	
}
