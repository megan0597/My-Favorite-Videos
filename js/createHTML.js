/**
 * Create HTML (wireframe 2)
 */
function createHtml() {

    // CREATE HTML (wireframe 2)
    // Create main-container
    var mainContainer = document.createElement("div");
    $(mainContainer).attr("id", "main-container");
    $(mainContainer).appendTo("body");

    // Create plus button
    var plusButton = document.createElement("input");
    $(plusButton).attr({
        type: "button",
        value: "+",
        id: "show"
    });
    $(plusButton).appendTo("#main-container");

    // Create container for youtube content
    var youtubeContainer = document.createElement('div');
    $(youtubeContainer).attr("class", "container");
    $(youtubeContainer).appendTo("#main-container");

    // Create title
    var title = document.createElement("h1");
    $(title).attr("id", "title");
    $(title).text("My favorite videos");

    $(title).appendTo(".container");

    // Create second title
    var secondTitle = document.createElement("h2");
    $(secondTitle).attr("id", "secondtitle");
    $(secondTitle).text("Add from Youtube");

    $(secondTitle).appendTo(".container");

    // Create div for youtube content
    var find = document.createElement('div');
    $(find).attr("id", "find");
    $(find).appendTo(".container");

    // Create form
    var form = document.createElement('form');
    $(form).attr("id", "search");
    $(form).appendTo("#find");

    // Input for form
    var youtubeInput = document.createElement('input');
    $(youtubeInput).attr({
        type: "search",
        id: "q",
        placeholder: "Enter search term"
    });
    $(youtubeInput).appendTo("#search");

    // Submit button for form
    var youtubeSubmit = document.createElement('input');
    $(youtubeSubmit).attr({
        type: "submit",
        id: "submit",
        value: "Find"
    });
    $(youtubeSubmit).appendTo("#search");

    // Create current video div
    var currentVideo = document.createElement("div");
    $(currentVideo).attr("id", "currentVideo");
    $(currentVideo).appendTo("#find");

    // Create videos div
    var videos = document.createElement("div");
    $(videos).attr("id", "videos");
    $(videos).appendTo("#find");

    // Create div for favorites
    favoriteDiv = document.createElement("div");
    $(favoriteDiv).attr("class", "favoriteDiv");
    $(favoriteDiv).appendTo(".container");
    // END CREATE HTML

    // Hides "wireframe1", shows "wireframe2)
    $("#show").on("click", function () {
        $(".container").toggle("slide", function () {
            if ($("#first-container").attr("class") == "show") {
                $("#first-container").addClass("hide").removeClass("show");

            } else {
                $("#first-container").addClass("show").removeClass("hide");
                location.reload();
            }
        });
    });

}
