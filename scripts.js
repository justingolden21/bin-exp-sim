$(function() {

	$('#simulateButton').click(function() {
		// todo: error checking
		let p = $('#pInput').val();
		let n = $('#nInput').val();

		let numSuccess = 0, numFailure = 0;
		let boolArr = [];
		for(let i=0; i<n; i++) {
			let sample = Math.random();
			if(sample < p) { //failure
				numFailure++;
				boolArr.push('F');
			} else { //success
				numSuccess++;
				boolArr.push('S');
			}
		}

		$('#outputPara').html('Successes: ' + numSuccess + ' Failures: ' + numFailure + ' Success Percentage: ' + (numSuccess/(numSuccess+numFailure) ) );
		$('#outputTextarea').val(boolArr);
	});

});
