Connectbtn.addEventListener( 'click', function (event) {

	leafony = new Leafony();
	leafony.onStateChange( function ( state ) {
		updateTable( state );
		colordown (temp_e);
		console.log('データ更新');
	} );

	if ( switchSleepMode.checked ) {
		leafony.enableSleep();
	} else {
		leafony.disableSleep();
	}

	leafony.connect();

	event.stopPropagation();

} );