function dashboard_click( e ) {
	Ti.API.info( "Event: " + JSON.stringify( e ) );
	Ti.API.info( "about to launch the " + e.item.id + " controller" );
	$.index.open( Alloy.createController( e.item.id ).getView() );
}
$.index.open();