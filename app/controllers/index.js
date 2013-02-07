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
$.dashboard.editable = false;

var xhr = Ti.Network.createHTTPClient();
xhr.open("GET","https://api.twitter.com/1/statuses/user_timeline.rss?screen_name=519church");
xhr.onload = function() {
	try {
		var doc = this.responseXML.documentElement;
		var items = doc.getElementsByTagName("item");
		Ti.API.info( "retrieved " + items.length + " items in the podcast feed" );
		var data = [];
		var news_collection = Alloy.createCollection( 'news_item' );
		news_collection.fetch();
		for ( var c=0; c<items.length; c++ ) {
			var item = items.item(c);
			var guid = item.getElementsByTagName("guid").item(0).text;
			var preexisting = news_collection.where( { "guid": guid } );
			Ti.API.info( "queried collection and found " + preexisting.length + " entries matching guid = " + guid );
			// if ( preexisting.length == 0 ) {
				// Ti.API.info( "Saving news item to collection via alloy model" );
				// var date = item.getElementsByTagName("pubDate").item(0).text;
				// var title = item.getElementsByTagName("title").item(0).text;
				// var news_item = Alloy.createModel( 'news_item', { body: title, guid: guid } );
				// news_item.save();
				// Ti.API.info( news_item );
			// }
		}
	}
	catch ( E ) {
		Ti.API.info( "exception caught: " + JSON.stringify( e ) );
	}
};
xhr.send();
