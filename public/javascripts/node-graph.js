function createNodeGraph(position, name, ctx) {
    var nodes = []

    function findNode(name) {
        var found = _.find(nodes, "name:" + name);
        if (found) {
            console.log(name, "existed")
        }
        return found;
    }

    function drawBorderAndHeading() {
        ctx.fillStyle = "rgb(0,0,0)"
        ctx.fillRect(position.x, position.y, 500, 500)
        ctx.fillStyle = "rgb(255,255,255)"
        ctx.fillRect(position.x + 1, position.y + 1, 498, 498)

        ctx.font = "36px sans-serif"
        ctx.fillStyle = "rgb(0,0,0)"
        ctx.fillText(name, position.x + 10, position.y + 40)

        ctx.beginPath();
        ctx.moveTo(position.x, position.y + 50);
        ctx.lineTo(position.x + 499, position.y + 50);
        ctx.stroke();
    }

    return {
        draw: function () {
            drawBorderAndHeading()
            _.forEach(nodes, function (node) {
                console.log('drawing', node.name, "at", node.position)
                var xpos = node.position.x + position.x;
                var ypos = node.position.y + position.y;
                ctx.fillStyle = node.fillStyle
                ctx.fillRect(xpos, ypos, node.dimensions.width, node.dimensions.height)
                ctx.fillStyle = "rgb(0,0,0)"
                ctx.font = "18px sans-serif";
                ctx.fillText(node.name, xpos + 5, ypos + 20)
            })

        },
        addNode: function (newNode) {
            console.log("adding", newNode.name, "at", newNode.position)
            if (findNode(newNode.name)) return;
            nodes.push(newNode);
        }
    }
}