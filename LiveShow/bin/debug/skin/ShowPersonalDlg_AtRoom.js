
Window.AttachEvent("OnInit", OnInit);
Window.AttachEvent("OnSize", OnSize);
Window.AttachEvent("OnNotify", OnNotify);


function OnInit()
{
	OnSize(Window.width, Window.height);
}


function OnSize(cx, cy)
{
	ShowPersonalDlgBk.visible = true;
	ShowPersonalDlgBk.left = 0;
	ShowPersonalDlgBk.top = 0;
	ShowPersonalDlgBk.width = cx;
	ShowPersonalDlgBk.height = cy;
	
	itemHtmlPersonalInfo.visible = true;
	itemHtmlPersonalInfo.left = 0;
	itemHtmlPersonalInfo.top = 0;
	itemHtmlPersonalInfo.width = cx;
	itemHtmlPersonalInfo.height = cy;
	
	imgApplyEffect.left = 0;
	imgApplyEffect.top = 0;
	imgApplyEffect.width = cx;
	imgApplyEffect.height = cy;
	
}

function OnNotify(code, code1)
{
  switch(code)
  {
  default:
    break;
  }
}
