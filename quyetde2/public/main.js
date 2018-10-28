
function getRandomQuestion() {
    $.ajax({
        url: "http://localhost:6969/randomquestion",
        type: "GET",
        success: function(response) {
            if(response) {
                $("#questionContent").text(response.questionContent);
                $(".answer-btn").data("questionid", response._id);
                $("#viewDetail").attr("href", "/question/" + response._id);
            }
        },
        error: function(err) {
            console.log(err);
            
        }
    });
}

getRandomQuestion();

$("#otherQuestion").on("click", function() {
    getRandomQuestion();
});


$(".answer-btn").on("click", function() {
    $.ajax({
        url: "http://localhost:6969/answer",
        type: "POST",
        data: $(this).data(),
        success: function(response) {
            if(response.success) {
                window.location.href = "/";
            }
        },
        error: function(err) {
            console.log(err);
            
        }
    })
});

// $("#result").on("click", function() {
//     $.ajax({
//         url: "http://localhost:6969/result",
//         type: "POST",
//         data: $(this).data(),
//         success: function(response){
//             if(response.success){
//                 window.location.href="/result";
//             }
//         },
//         error: function(err){
//             console.log(err);
//         }
//     })

// });
