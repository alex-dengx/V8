var SKIN_ON_CLICK_SEARCH = 1;
Window.AttachEvent("OnInit", OnInit);
Window.AttachEvent("OnSize", OnSize); 
btnMagnifier.AttachEvent("OnClick",OnSearch);

function OnSearch()
{ 
	Window.PostSkinMessage(SKIN_ON_CLICK_SEARCH, 0);
}

function OnInit()
{
	itemSearch.tabStop = false;
	OnSize(Window.width, Window.height);
}

function OnSize(cx, cy)
{
    imgSearchBarBk.left = 0;
	imgSearchBarBk.top = 0;
	imgSearchBarBk.width = cx;
	imgSearchBarBk.height = cy;
		

	// imgEditBackground.left = 2;
	// imgEditBackground.top = imgSearchBarBk.top + 5;
	// imgEditBackground.width = cx - 4;
	// imgEditBackground.height = 25;
	
	btnMagnifier.width = 25;
	btnMagnifier.height = 25; 
  btnMagnifier.left = imgSearchBarBk.left + imgSearchBarBk.width - btnMagnifier.width - 6;
	btnMagnifier.top = imgSearchBarBk.top + 9; 
	
	itemSearch.height = 18;
	itemSearch.left = imgSearchBarBk.left + 10;
	itemSearch.top = imgSearchBarBk.top + 14;
	itemSearch.width = btnMagnifier.left - itemSearch.left - 2;
	
}

