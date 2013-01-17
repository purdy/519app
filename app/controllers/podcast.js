var xhr = Ti.Network.createHTTPClient();
xhr.open("GET","http://feeds.feedburner.com/519ChurchSermons");
xhr.onload = function() {
	try {
		var doc = this.responseXML.documentElement;
		var items = doc.getElementsByTagName("item");
		Ti.API.info( "retrieved " + items.length + " items in the podcast feed" );
		var data = [];
		for ( var c=0; c<items.length; c++ ) {
			var item = items.item(c);
			var title = item.getElementsByTagName("title").item(0).text;
			var item_date = "Jan 10, 2013";
			title += ' - ' + item_date;
			var description = item.getElementsByTagName("itunes:summary").item(0).text;
			var guid = item.getElementsByTagName("guid").item(0).text;
			var url = item.getElementsByTagName("enclosure").item(0).getAttribute("url");
			var table_row = Ti.UI.createTableViewRow( {
				title: title,
				hasDetail: true,
				podcastGuid: guid,
			} );
			data.push( table_row );
			// var podcast_item = Alloy.createModel( 'podcast', {
				// title: title,
				// description: description,
				// url: url,
				// guid: guid
			// } );
			// podcast_item.save();
		}
		$.podcast_table.data = data;
		$.podcast_table.addEventListener( 'click', open_podcast_item );
	}
	catch ( E ) {
		Ti.API.info( "exception caught: " + JSON.stringify( e ) );
	}
};
xhr.send();
function open_podcast_item( e ) {
	Ti.API.info( "You clicked row # " + e.index );
	Ti.API.info( "Row data: " + JSON.stringify( e.rowData ) );
	var controller = Alloy.createController( 'podcast_item' );
	Alloy.CFG.navgroup.open( controller.getView() );
}

