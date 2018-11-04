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

function tableSum() {
    var elements = document.getElementsByClassName("column1");
    for (var i = 0, len = elements.length; i < len; i++) {
        // elements[i].style ...
        // let valueCell = elements[i].text();
        elements[i].input.value; 
        
    }
    
}

