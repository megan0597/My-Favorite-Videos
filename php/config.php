<?php

////LOCAL HOST
//// DB settings
//$user = 'root';
//$password = '';
//$db = 'herkansingimp03';
//
//$dbLink = mysqli_connect('localhost', $user, $password, $db); //connection to database

//STUDENTEN SPACE
//settings
$host = 'localhost';
$user = '0892322';
$password = '1f18d59e';
$db = '0892322';


$dbLink = mysqli_connect($host, $user, $password, $db); //connection to database

// API settings
define("YOUTUBE_API_KEY", "AIzaSyDH_BGx70ypPGdnnD7Rvnitc1LrmgB1Euk");


