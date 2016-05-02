// DOM ready
$(init);

// Variable for data
var videos = [];

function init() {

    getVideos();
}

/**
 * Get videos from database
 */
function getVideos() {

    $.ajax({
        dataType: "json",
        url: "php/showVideos.php",
        method: "GET",
        data: videos,
        success: displayVideos,
        error: function(jqXHR, textStatus, errorThrown){
            console.log(jqXHR, textStatus, errorThrown);
        }
    });
}

/**
 * Display the videos in HTML
 * @param response
 */
function displayVideos(response) {
    //console.log("DEZE",response);

    firstEmptyhtml();
    videos = [];

    $.each(response, function (index, element) {
        var thumbnailImg = $('<img>', {src: element.youtube_thumbnail_url});

        $(thumbnailImg).on("click", firstVideoClickHandler);
        $("#first-videos").append(thumbnailImg);
        videos.push(element);
    });
    firstLoadFirstVid(response[0]);
}

/**
 * Empties the HTML so there is no double HTML
 */
function firstEmptyhtml() {
    $("#first-videos").html("");
    $("#first-currentVideo").html("");
}

/**
 * First video in the list is a big display
 * @param video
 */
function firstLoadFirstVid(video) {
    //console.log("DEZE",video);
    videoIndex = 0;
    var currentVideoDiv = $("#first-currentVideo");
    var videocontainer = document.createElement("div");
    $(videocontainer).attr("class", "first-videocontainer");
    var iframe = document.createElement("iframe");
    $(iframe).attr({
        src: "https://www.youtube.com/embed/" + video.youtube_url,
        class: "first-videoiframe",
        width: 560,
        height: 315,
        frameborder: 0,
        allowfullscreen: ""
    });

    $(videocontainer).append(iframe).appendTo(currentVideoDiv);
}

/**
 * When you click another video this function runs, and adds the video you clicked on to the big display
 */
function firstVideoClickHandler () {

    var clicked = this;
    videoIndex = $("img").index(clicked);
    firstLoadNewVideo(videos[videoIndex])

}

/**
 * In this function it actually adds the new link to the big player when you click on another video
 * @param video
 */
function firstLoadNewVideo (video) {
    var iframe = $(".first-videoiframe");

    console.log("NEW VIDEO", video);

    $(iframe).attr("src", "https://www.youtube.com/embed/"+video.youtube_url);
}