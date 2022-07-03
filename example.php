<?php
require_once(__DIR__ . '/Validator.php');

//req/required - specify that a variable must be set.
//num/numeric - validate using is_numeric()
//min/minimum - minimum value for an numeric value.
//max/maximum - maximum value for an numeric value.
//min_length - minimum length for a string
//max_length - maximum length for a string
//email - validate using filter_var($var, FILTER_VALIDATE_EMAIL)
//To set values for the min/max rules use the format "rule=value" like "min=5, max=15". A comma is used to separate each value.

class CustomValidator extends Validator{

}

$Validator = new CustomValidator($_POST);

$Validator->Expect("firstname", "required");
$Validator->Expect("lastname", "required");
$Validator->Expect("email", "required , email");
$Validator->Expect("bday", "required");
$Validator->Expect("phone", "required");
$Validator->Expect("city", "required");

if ($Validator->Validate()) {
    echo 'sdf';
} else {
    echo 'no';
}
