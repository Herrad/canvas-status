window.onload = function () {
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')
    var request = $.ajax('/status');
    request.done(function (data) {
        console.log(data.status)
        var graphs = [];
        var currentNodePosition = {
            x: 10,
            y: 75
        }
        _.forEach(Object.keys(data.status), function (key) {
            var graph = data.status[key]
            var nodeGraph = createNodeGraph({
                x: 0,
                y: 10
            }, key, ctx)

            _.forEach(graph, function (node) {
                nodeGraph.addNode(createNode(node.Name, {
                    x: currentNodePosition.x,
                    y: currentNodePosition.y
                }, {
                    width: 120,
                    height: 75
                }, "rgb(0,200,0)"));
                currentNodePosition.x += 300
                if (currentNodePosition.x === 610) {
                    currentNodePosition.y += 125;
                    currentNodePosition.x = 160
                }
                if (currentNodePosition.x === 460) {
                    currentNodePosition.x = 10
                    currentNodePosition.y += 125
                }
            });
            graphs.push(nodeGraph)
        })

        _.forEach(graphs, function (graph) {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            graph.draw()
        });
    })
    request.fail(function (err) {
        $('#error').html('error getting /status: ' + err);
    })

}