const params = new URL(window.location.href).pathname.split("/");
const playerId = params[params.length - 1];
console.log(playerId);


$.ajax({
    url: "/gamesdetail/" + playerId,
    type: "GET",
    success: function(response) {
        if(response && response.success) {
            console.log(response.player);
            $("#addRound").data("playerid", playerId);
            var player = response.player;
            $("#name1").text(player.name[0]);
            $("#name2").text(player.name[1]);
            $("#name3").text(player.name[2]);
            $("#name4").text(player.name[3]);

            let score = player.score;
            let numberRound = score.length;
            if(numberRound != 0) {
                for(var i = 0; i<numberRound; i++) {
                    $("#addRow").append(`
                        <tr>
                        <td>Round ${i + 1}</td>
                        <td class="column1"><input type="text" value="${score[i][0]}"></td>
                        <td class="column2"><input type="text" value="${score[i][1]}"></td>
                        <td class="column3"><input type="text" value="${score[i][2]}"></td>
                        <td class="column4"><input type="text" value="${score[i][3]}"></td>
                        </tr>
                `)
                }
            };

            tableSum();
        }
    }
});

$("#addRound").on("click", function() {
    $.ajax({
        url: "/addround",
        type: "POST",
        data: $(this).data(),
        success: function(response) {
            if(response) {
                let score = response.score;
                let numberRound = score.length;
                $("#addRow").append(`
                    <tr>
                    <td>Round ${numberRound}</td>
                    <td class="column1"><input type="text" value="${score[numberRound - 1][0]}"></td>
                    <td class="column2"><input type="text" value="${score[numberRound - 1][1]}"></td>
                    <td class="column3"><input type="text" value="${score[numberRound - 1][2]}"></td>
                    <td class="column4"><input type="text" value="${score[numberRound - 1][3]}"></td>
                    </tr>
                `)
            }
        },
        error: function(err) {
            console.log(err);
        }
    });
});

$("#myTable").on("input", function() {
    tableSum();
})

function tableSum() {
    var player1Score = 0;
    var player2Score = 0;
    var player3Score = 0;
    var player4Score = 0;
    $(".column1").each(function(index) {
        let x = $(this).find("input").val();
        player1Score = player1Score + parseInt(x);
    });
    $(".column2").each(function(index) {
        let x = $(this).find("input").val();
        player2Score += parseInt(x);
    });
    $(".column3").each(function(index) {
        let x = $(this).find("input").val();
        player3Score += parseInt(x);
    });
    $(".column4").each(function(index) {
        let x = $(this).find("input").val();
        player4Score += parseInt(x);
    });

    $("#sop1s").text(player1Score);
    $("#sop2s").text(player2Score);
    $("#sop3s").text(player3Score);
    $("#sop4s").text(player4Score);
    
    $("#sos").text(player1Score + player2Score + player3Score + player4Score);
}

