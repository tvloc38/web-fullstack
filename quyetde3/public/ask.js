const maxLength = 200;

$("#questionContent").on("input", function() {
    let remainChar = maxLength - $("#questionContent").val().length;
    $("#remainChar").text(remainChar);
})