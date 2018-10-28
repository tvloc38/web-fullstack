const params = new URL(window.location.href).pathname.split("/");
const questionId = params[params.length - 1];

$.ajax({
    type:"GET",
    url: "/questiondetail/"+questionId,
    success: function(response) {
        if(response && response.success) {
            console.log(response.question);
            let question = response.question;
            let totalVote = question.yes + question.no;
            let voteYes = ((question.yes/totalVote)*100).toFixed(2);
            let voteNo = ((question.no/totalVote)*100).toFixed(2);

            $('#questionContent').text(question.questionContent);
            $('#totalVote span').text(question.yes + question.no);
            $('#voteYes span').text(totalVote!= 0 ? parseFloat(voteYes) : 0);
            $('#voteNo span').text(totalVote != 0 ? parseFloat(voteNo): 0);
        }
    }
})