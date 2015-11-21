function createNode(name, position, dimensions, fillStyle) {
    return {
        name: name,
        position: position,
        dimensions: dimensions,
        fillStyle: fillStyle,
        linkTarget: {
            x: position.x + dimensions.width / 2,
            y: position.y + dimensions.height / 2
        }
    }
}