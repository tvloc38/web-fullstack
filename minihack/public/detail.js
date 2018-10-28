const params = new URL(window.location.href).pathname.split("/");
const playerId = params[params.length - 1];

$.ajax({
    url: "/gamesdetail/" + playerId;
    type: "GET",
    success: function(response) {
        if(response && response.success) {
            console.log(response.player);
        }
    }
})