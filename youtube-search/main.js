$("#search").on("submit", function() {
    var searchContent = $("#keyword").val();
    console.log(searchContent);
    $.ajax({
        url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + searchContent + "&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw",
        type: "GET",
        success: function(response) {
            var newDiv = 
        },
        error: function(err) {
            console.log(err);
        }
    })
})

 