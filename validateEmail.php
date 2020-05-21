<?php

include_once("../mailbox/src/SingleValidation.php");

$key = "YOUR API KEY";
use MailboxValidator\SingleValidation as Mail;

$mailbox = new Mail($key);

//checking if the data is sent

if (isset($_POST['email'])) {
	$email = $_POST['email'];

	//getting the API response
	$response = $mailbox->ValidateEmail($email);

	// var_dump($response);

	$jsonResponse = json_encode($response);

	echo "$jsonResponse";
}