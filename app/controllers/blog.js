var xhr = Ti.Network.createHTTPClient();
xhr.open("GET","http://feeds.feedburner.com/519blog");
xhr.onload = function() {
	try {
		var doc = this.responseXML.documentElement;
		var items = doc.getElementsByTagName("item");
		Ti.API.info( "retrieved " + items.length + " items in the podcast feed" );
		var data = [];
		for ( var c=0; c<items.length; c++ ) {
			var item = items.item(c);
			var title = item.getElementsByTagName("title").item(0).text;
			var table_row = Ti.UI.createTableViewRow( {
				title: title,
				hasDetail: true,
				rawHtml: item.getElementsByTagName("content:encoded").item(0).text
			} );
			data.push( table_row );
		}

		$.blog_table.data = data;
		$.blog_table.addEventListener( 'click', open_blog_item );
	}
	catch ( E ) {
		Ti.API.info( "exception caught: " + JSON.stringify( e ) );
	}
};
xhr.send();
function open_blog_item( e ) {
	Ti.API.info( "You clicked row # " + e.index );
	Ti.API.info( "Row data: " + JSON.stringify( e.rowData ) );
	var arg = { rawHtml: e.rowData.rawHtml, title: e.rowData.title };
	var controller = Alloy.createController( 'blog_item', arg );
	Alloy.CFG.navgroup.open( controller.getView() );
}
