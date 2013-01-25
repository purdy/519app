var args = arguments[0] || {};
Ti.API.info( "args = " + JSON.stringify( args ) );
$.blog_view.setHtml( args.rawHtml, { baseURL: 'http://www.519church.org' } );
$.blog_view_window.title = args.title;