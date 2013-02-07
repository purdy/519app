var news_collection = Alloy.createCollection( 'news_item' );
news_collection.fetch();
var data = [];
news_collection.map( function( item ) {
	var table_row = Ti.UI.createTableViewRow();
	var row_view = Ti.UI.createView();
	var date_label = Ti.UI.createLabel( {
		text: item.get( 'guid' ),
		width: 'auto',
		height: 40,
		top: 0,
		font: { fontSize: 12 } //20, fontWeight: 'bold' }
	} );
	row_view.add( date_label );
	var news_label = Ti.UI.createLabel( {
		text: item.get( 'body' ),
		width: 'auto',
		height: 80,
		top: 40,
		font: { fontSize: 14 }
	} );
	row_view.add( news_label );
	table_row.height = 120;
	table_row.add( row_view );
	data.push( table_row );
} );
$.twitter_table.data = data;

// var xhr = Ti.Network.createHTTPClient();
// xhr.open("GET","https://api.twitter.com/1/statuses/user_timeline.rss?screen_name=519church");
// xhr.onload = function() {
	// try {
		// var doc = this.responseXML.documentElement;
		// var items = doc.getElementsByTagName("item");
		// Ti.API.info( "retrieved " + items.length + " items in the podcast feed" );
		// var data = [];
		// for ( var c=0; c<items.length; c++ ) {
			// var item = items.item(c);
			// var date = item.getElementsByTagName("pubDate").item(0).text;
			// var title = item.getElementsByTagName("title").item(0).text;
			// var table_row = Ti.UI.createTableViewRow();
			// var row_view = Ti.UI.createView();
			// var date_label = Ti.UI.createLabel( {
				// text: date,
				// width: 'auto',
				// height: 40,
				// top: 0,
				// font: { fontSize: 20, fontWeight: 'bold' }
			// } );
			// row_view.add( date_label );
			// var news_label = Ti.UI.createLabel( {
				// text: title,
				// width: 'auto',
				// height: 80,
				// top: 40,
				// font: { fontSize: 14 }
			// } );
			// row_view.add( news_label );
			// table_row.height = 120;
			// table_row.add( row_view );
			// data.push( table_row );
		// }
// 
		// $.twitter_table.data = data;
	// }
	// catch ( E ) {
		// Ti.API.info( "exception caught: " + JSON.stringify( e ) );
	// }
// };
// xhr.send();
