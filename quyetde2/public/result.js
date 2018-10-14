$.ajax({
    url: "http://localhost:6969/current",
    type: "GET",
    success: function(response){
        if(response){
            $("#question").text(response.questionContent);
            $("#yes").text("Dung: " + response.yes);
            $("#no").text("Sai: " + response.no);
        }
    },
    error: function(){
        console.log(error);
    }
})

$("#other").on("click", function() {
    window.location.href = "/";
})