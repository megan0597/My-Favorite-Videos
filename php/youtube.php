<?php

// Only runs if the form was filled in
if (isset($_GET['q'])) {

// Including database connection & API key
    require_once("config.php");

// Basis url
    $youtubeApiUrl = "https://www.googleapis.com/youtube/v3/search?";

// Query string with default parameter
    $queryString = array(
        "part" => "snippet",
        "q" => $_GET['q'],
//    "q" => "love",
        "maxResults" => "4",
        "type" => "video",
        "key" => YOUTUBE_API_KEY,
    );

// Array with data
    $myData = [];

    // Moet ik toevoegen anders werkt het niet bij mij
    $arrContextOptions = array(
        "ssl" => array(
            "verify_peer" => false,
            "verify_peer_name" => false,
        ),
    );

    $data = json_decode(file_get_contents($youtubeApiUrl . http_build_query($queryString), false, stream_context_create($arrContextOptions)));
                                                                                       //Dit stuk hoort bij het stuk hierboven
// Browser now knows it is Json
    header('Content-Type: application/json');
    echo json_encode($data->items);
}







