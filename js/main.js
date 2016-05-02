// DOM ready
$(init);

// Variables for data
var videos = [];
var videoIndex, favoriteDiv;

/**
 * Initialize our application
 */
function init() {

    // Run function to create HTML
    createHtml();

    // When Find is clicked it runs getData
    $("#search").submit(getData);

    // Runs getFavorites
    getFavorites();
}


/**
 * Gets API data with ajax call
 * @param e
 */
function getData(e) {
    e.preventDefault();
    var searchValue = $("#q").val();

        // Ajax call to get the Youtube data from the php file
        $.ajax({
            dataType: "json",
            url: "php/youtube.php",
            method: "GET",
            data: {q: searchValue},
            success: getDataSuccessHandler,
            error: function(jqXHR, textStatus, errorThrown){
                console.log(jqXHR, textStatus, errorThrown);
            }
        });

}

/**
 * Handles the ajax success
 * @param response
 */
function getDataSuccessHandler(response) { //response = youtube data

    //console.log(response);

    emptyhtml();
    videos = [];

    // For each element, make an <img>
    $.each(response, function (index, element) {
        var thumbnailImg = $('<img>', {src: element.snippet.thumbnails.default.url});

        $(thumbnailImg).on("click", videoClickHandler);
        $("#videos").append(thumbnailImg);
        videos.push(element);
    });
    loadFirstVid(response[0]);
}

/**
 * Empties the HTML so there is no double HTML
 */
function emptyhtml() {
    $("#videos").html("");
    $("#currentVideo").html("");
}

/**
 * When you click another video this function runs, and adds the video you clicked on to the big display
 */
function videoClickHandler () {

    var clicked = this;
    videoIndex = $("#videos img").index(clicked);
    loadNewVideo(videos[videoIndex])

}

/**
 * First video in the list is a big display
 * @param video
 */
function loadFirstVid(video){
    //console.log("DEZE",video);
    videoIndex = 0;
    var currentVideoDiv = $("#currentVideo");
    var videocontainer = document.createElement("div");
    $(videocontainer).attr("class", "videocontainer");

    // Loads youtube iframe here
    var iframe = document.createElement("iframe");
    $(iframe).attr({
        src: "https://www.youtube.com/embed/"+video.id.videoId,
        class: "videoiframe",
        width: 560,
        height: 315,
        frameborder: 0,
        allowfullscreen: ""
    });

    $(videocontainer).append(iframe).appendTo(currentVideoDiv);

    var inputfield = document.createElement("input");
    $(inputfield).attr({
        placeholder: "Category",
        type: "text",
        class: "inputCategory"
    });

    var button = document.createElement("input");
    $(button).attr({
        type: "submit",
        value: "Add",
        id: "addToCategory"
    });

    $(currentVideoDiv).append(inputfield, button);
    $("#addToCategory").on("click", addToFavorites);
}

/**
 * Adds videos to favorite when you click "add"
 */
function addToFavorites () {
    //console.log("///VIDEO ADDED TO FAVORITES///",videos[videoIndex]);

    var title = videos[videoIndex].snippet.title ;
    var url = videos[videoIndex].id.videoId ;
    var thumbnail = videos[videoIndex].snippet.thumbnails.default.url ;
    var category = $(".inputCategory").val();

    //console.log(title,url,thumbnail,category);

    // Ajax call so you can give the data(video) back to php
    $.ajax({
        url: "php/addVideos.php",
        method: "GET",
        data: {
            title: title,
            url: url,
            thumbnail: thumbnail,
            category: category,
            function: "add"
        },
        success: getFavorites,
        error: function(jqXHR, textStatus, errorThrown){
            console.log(jqXHR, textStatus, errorThrown);
        }
    });

}

/**
 * In this function it actually adds the new link to the big player when you click on another video
 * @param video
 */
function loadNewVideo (video) {
    var iframe = $(".videoiframe");

    console.log("NEW VIDEO", video);

    $(iframe).attr("src", "https://www.youtube.com/embed/"+video.id.videoId);
}

/**
 * Gets favorite videos after you add them in "addToFavorite"
 */
function getFavorites () {
    $.ajax({
        dataType: "json",
        url: "php/addVideos.php",
        method: "GET",
        data: {
            function: "display"
        },
        success: displayFavorites,
        error: function(jqXHR, textStatus, errorThrown){
            console.log(jqXHR, textStatus, errorThrown);
        }
    });
}

/**
 * Handles the ajax success & adds the favorite videos to html
 * @param response
 */
function displayFavorites (response) {
    console.log(response);

    $(favoriteDiv).html("");

    $.each(response, function(index, element) {
        var thumbnailImg = $('<img>', {src: element.youtube_thumbnail_url});

        $(favoriteDiv).append(thumbnailImg);
    });

}
