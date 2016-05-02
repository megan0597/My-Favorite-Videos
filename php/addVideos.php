<?php

// Add db connection
require_once("config.php");

if (isset($_GET['function'])) {

    // Insert videos in db
    if($_GET['function'] == 'add'){
        $title = htmlentities($_GET["title"], ENT_QUOTES, "UTF-8");
        $url = htmlentities($_GET["url"], ENT_QUOTES, "UTF-8");
        $thumbnail = htmlentities($_GET["thumbnail"], ENT_QUOTES, "UTF-8");
        $category = htmlentities($_GET["category"], ENT_QUOTES, "UTF-8");

        $query = mysqli_query($dbLink, "INSERT INTO youtube(
                          titel_video,
                          youtube_url,
                          youtube_thumbnail_url,
                          category)
                          VALUES ('$title', '$url', '$thumbnail', '$category')" );

        if(!$query){
            echo $title." ".$url." ".$thumbnail." ".$category." ";
            echo mysqli_errno($dbLink). mysqli_error($dbLink);
        }
    }

    // Select videos from db
    if($_GET['function'] == 'display'){

        $query = mysqli_query($dbLink, "SELECT * FROM youtube ORDER BY id DESC LIMIT 10");
        while($row = mysqli_fetch_assoc($query)){
            $videos[] = $row;
        }

        // Echo so JS can get it with an ajax call
        echo json_encode($videos);
    }
}
