var args = arguments[0] || {};
Ti.API.info( "args = " + JSON.stringify( args ) );
var podcast_state = {
	playing: false,
	cursor: 0
};
// allowBackground: true on Android allows the 
// player to keep playing when the app is in the 
// background.
Titanium.Media.audioSessionMode = Titanium.Media.AUDIO_SESSION_MODE_PLAYBACK; 
var audioPlayer = Ti.Media.createAudioPlayer( { 
    url: args.podcast_data.url,
    allowBackground: true
} );  

function play_podcast( e ) {
	if ( podcast_state.playing ) {
		// pause audio!
		audioPlayer.pause();
		podcast_state.playing = false;
	}
	else {
		// start the music!
		audioPlayer.start();
		podcast_state.playing = true;
	}
	
}
$.bb1.addEventListener( 'click', function( e ) {
	Ti.API.info( "button clicked: " + JSON.stringify( e ));
	if ( e.index == 0 ) {
		if ( podcast_state.playing ) {
			audioPlayer.stop();
		}
		audioPlayer.start();
		podcast_state.playing = true;
	}
	else if ( e.index == 1 ) {
		play_podcast( e );
	}
} );
$.title.text = args.podcast_data.title;
$.description.text = args.podcast_data.description;
$.podcast_item_window.title = args.podcast_data.title;
audioPlayer.addEventListener('progress',function(e) {
    Ti.API.info('Time Played: ' + Math.round(e.progress) + ' milliseconds');
    // var total_progress = progress/1000/(args.podcast_data.duration+0)*100;
    // Ti.API.info( "Setting progress bar progress to " + total_progress );
    // $.pb.setValue( total_progress );
});

audioPlayer.addEventListener('change',function(e)
{
    Ti.API.info('State: ' + e.description + ' (' + e.state + ')');
});