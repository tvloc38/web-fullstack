function getRamdonQuestion() {
    $.ajax({
        url: "http://localhost:6969/randomquestion",
        type: "GET",
        success: function(response) {
            if(response) {
                $("#questionContent").text(response.questionContent);
                $(".answer-btn").data("questionid", response.id);
                $("#viewDetail").attr("href", "/question/" + response.id);
            }
        },
        error: function(err) {
            console.log(err);
        }
    })
};

getRamdonQuestion();

$("#otherQuestion").on("click", function() {
    getRamdonQuestion();
});

$(".answer-btn").on("click", function() {
    let questionId = $(this).data("questionid");
    $.ajax({
        url: "http://localhost:6969/answer",
        type: "POST",
        data: $(this).data(),
        success: function(response) {
            if(response.success) {
                window.location.href = "/questiondetail/" + questionId;
            }
        },
        error: function(err) {
            console.log(err);
        }

    })
})
