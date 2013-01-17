function dashboard_click( e ) {
	// attach navgroup to Alloy.CFG
	Alloy.CFG.navgroup = $.navgroup;
	
	Ti.API.info( "Event: " + JSON.stringify( e ) );
	Ti.API.info( "about to launch the " + e.item.id + " controller" );
	var controller = Alloy.createController( e.item.id );
	Ti.API.info( "controller created: " + JSON.stringify( controller ) );
	$.navgroup.open( controller.getView() );
}
$.index.open();
