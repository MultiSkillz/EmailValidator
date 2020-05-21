$(document).ready(function(){

	$('#validFrm').submit(function(e){
		e.preventDefault();

		let email = $('#email').val();

		$('#valid_btn').html("VALIDATING EMAIL...");
		$('#valid_btn').attr('disabled', true);

		$.post('function/validateEmail.php', {email:email}, function(data){

			$('#valid_btn').html("VALIDATE EMAIL");
			$('#valid_btn').attr('disabled', false);

			let res = $.parseJSON(data);

			// console.log(res.email_address);
			$('#email_res').html(res.email_address);

			(res.is_domain == 'True') ? $('#domain').html(res.domain) : $('#domain').html("<span class='text-danger'>Invalid Domain</span>");

			(res.is_syntax == 'True') ? $('#syntax').html('Correct Syntax') : $('#syntax').html('Incorrect Syntax');

			(res.status == 'True') ? $('#status').html("<span class='text-success'>Valid Email</span>") : $('#status').html("<span class='text-danger'>Invalid Email</span>");


		});

		// {"email_address":"dialawisdom@gmail.com","domain":"gmail.com","is_free":"True","is_syntax":"True","is_domain":"True","is_smtp":"True","is_verified":"True","is_server_down":"False","is_greylisted":"False","is_disposable":"False","is_suppressed":"False","is_role":"False","is_high_risk":"False","is_catchall":"False","mailboxvalidator_score":"0.6","time_taken":"0.1485","status":"True","credits_available":214,"error_code":"","error_message":""}

		// console.log('OK');
	})

});
