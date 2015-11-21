window.onload = function () {
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')
    var request = $.ajax('/status');
    request.done(function (data) {
        console.log(data)
        ctx.fillStyle = "rgb(100,0,0)"
        ctx.fillRect(50, 50, 200, 200);
    })
    request.fail(function (err) {
        $('#error').html('error getting /status: ' + err);
    })
}