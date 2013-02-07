var args = arguments[0] || {};
Ti.API.info( "args = " + JSON.stringify( args ) );
var podcast_state = {
	playing: false,
	cursor: 0
};
var isIOS = Titanium.Platform.name == 'iPhone OS';
//TIMOB-7502. TIme moved to ms but duration is still reported in seconds
var timob7502fix = ((Ti.version >= '3.0.0') && (Titanium.Platform.name == 'iPhone OS'));


// allowBackground: true on Android allows the 
// player to keep playing when the app is in the 
// background.
Titanium.Media.audioSessionMode = Titanium.Media.AUDIO_SESSION_MODE_PLAYBACK; 
// var audioPlayer = Ti.Media.createAudioPlayer( { 
    // url: args.podcast_data.url,
    // allowBackground: true
// } );  

// On iOS, loading remote url takes time and blocks window opening.
// Set the url after the window opens on iOS.
var sound = Titanium.Media.createSound();
if (isIOS) {
	// Show Actvity Indicator when loading the remote url.
	var actInd = Titanium.UI.createActivityIndicator({
		bottom : 10,
		style : Titanium.UI.iPhone.ActivityIndicatorStyle.DARK,
		message : "Loading Podcast ..."
	});
	$.podcast_item_window.add(actInd);
	actInd.show();
	Ti.API.info( "about to add event listener to window" );
	$.podcast_item_window.addEventListener('open', function() {
		Ti.API.info( "open event triggered" );
		sound.url = args.podcast_data.url;
		Ti.API.info( "done setting url to sound object" );
		actInd.hide();
		if ( timob7502fix ) {
			$.ps.max = sound.duration*1000;
		}
		else {
			$.ps.max = sound.duration;
		}
	});
} else {
	sound.url = url;
}


function play_podcast( e ) {
	if ( podcast_state.playing ) {
		// pause audio!
		// audioPlayer.pause();
		sound.pause();
		podcast_state.playing = false;
	}
	else {
		// start the music!
		// audioPlayer.start();
		sound.play();
		podcast_state.playing = true;
	}
}

$.bb1.addEventListener( 'click', function( e ) {
	Ti.API.info( "button clicked: " + JSON.stringify( e ));
	if ( e.index == 0 ) {
		if ( podcast_state.playing ) {
			sound.stop();
		}
		sound.play();
		podcast_state.playing = true;
	}
	else if ( e.index == 1 ) {
		play_podcast( e );
	}
} );
$.title.text = args.podcast_data.title;
$.description.text = args.podcast_data.description;
$.podcast_item_window.title = args.podcast_data.title;
// audioPlayer.addEventListener('progress',function(e) {
    // Ti.API.info('Time Played: ' + Math.round(e.progress) + ' milliseconds');
    // // var total_progress = progress/1000/(args.podcast_data.duration+0)*100;
    // // Ti.API.info( "Setting progress bar progress to " + total_progress );
    // // $.pb.setValue( total_progress );
// });
// 
// audioPlayer.addEventListener('change',function(e)
// {
    // Ti.API.info('State: ' + e.description + ' (' + e.state + ')');
// });

$.ps.addEventListener( 'change', function( e) {
	var value = e.value;
	Ti.API.info( 'slider changed to value = ' + value );
	sound.setTime( e.value );
} );

//
// INTERVAL TO UPDATE PB
//
var i = setInterval(function()
{
	if (sound.isPlaying())
	{
		Ti.API.info('time ' + sound.time);
		$.ps.value = sound.time;

	}
},500);

//
//  CLOSE EVENT - CANCEL INTERVAL
//
$.podcast_item_window.addEventListener('close', function()
{
	clearInterval(i);
});
