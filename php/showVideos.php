<?php

// Add db connection
require_once("config.php");

// Select videos from db
$query = mysqli_query($dbLink, "SELECT * FROM youtube ORDER BY id DESC");
while($row = mysqli_fetch_assoc($query)){
    $videos[] = $row;
}

// Echo so JS can get it with an ajax call
echo json_encode($videos);

