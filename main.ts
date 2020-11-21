let jugador = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . . 4 4 4 4 4 4 4 4 . . . . 
    . . . 4 4 4 4 4 4 4 4 4 4 . . . 
    . . . 4 4 4 e e e e 4 4 4 . . . 
    . . . e f b f 4 4 f b f e . . . 
    . . . e 4 1 f d d f 1 4 e . . . 
    . . . f e 4 d d d d 4 e f . . . 
    . . f e f 8 8 8 8 8 8 f e f . . 
    . . e 4 f 8 8 8 8 8 8 f 4 e . . 
    . . . . f e e 5 5 e e f . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . f f f . . f f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(jugador)
tiles.setTilemap(tilemap`level`)
tiles.placeOnRandomTile(jugador, myTiles.transparency16)
scene.cameraFollowSprite(jugador)
let statusbar = statusbars.create(100, 5, StatusBarKind.Health)
statusbar.positionDirection(CollisionDirection.Top)
forever(function () {
    if (controller.up.isPressed()) {
        animation.runImageAnimation(
        jugador,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f 4 4 4 4 f f . . . . 
            . . . f 4 4 4 4 4 4 4 4 f . . . 
            . . . f 4 4 4 4 4 4 4 4 f . . . 
            . . f f 4 4 4 4 4 4 4 4 f f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . f f 4 4 4 4 4 4 4 4 4 4 f f . 
            . f f 4 4 4 4 4 4 4 4 4 4 f f . 
            . . . f 4 4 4 4 4 4 4 4 f . . . 
            . . e 4 f f f f f f f f e . . . 
            . . 4 d d e 8 8 8 8 8 f 4 . . . 
            . . . 4 e e f f f f f f e . . . 
            . . . . . . . . . f f f . . . . 
            `],
        100,
        false
        )
    }
    if (controller.down.isPressed()) {
        animation.runImageAnimation(
        jugador,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 4 4 4 4 4 4 . . . . . 
            . . . . 4 4 4 4 4 4 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 4 4 4 . . . 
            . . . 4 4 4 e e e e 4 4 4 . . . 
            . . . e f b f 4 4 f b f e . . . 
            . . . e 4 1 f d d f 1 4 e . . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 8 8 8 8 e d d 4 e . . 
            . . e 4 f 8 8 8 8 e d d e . . . 
            . . . . f e e 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f c c . . . . . . . . . 
            `],
        100,
        false
        )
    }
    if (controller.right.isPressed()) {
        animation.runImageAnimation(
        jugador,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 4 4 4 4 4 . . . . . . 
            . . . . 4 4 4 4 4 4 4 . . . . . 
            . . . 4 4 4 4 4 4 4 4 4 . . . . 
            . . . 4 4 4 4 4 4 4 4 4 . . . . 
            . . . 4 4 4 4 4 e e e 4 . . . . 
            . . . e 4 4 e b f 4 4 e . . . . 
            . . . e 4 d 4 1 f d d e . . . . 
            . . . e e e e e d d d f . . . . 
            . . . . f 4 d d e 4 e f . . . . 
            . . . . f e d d e 8 8 f . . . . 
            . . . f f f e e f 5 5 f c . . . 
            . . . c f f f f f f f f c . . . 
            . . . . c c . . . f f c . . . . 
            `],
        100,
        false
        )
    }
    if (controller.left.isPressed()) {
        animation.runImageAnimation(
        jugador,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 4 4 4 4 . . . . . . . 
            . . . . 4 4 4 4 4 4 . . . . . . 
            . . . 4 4 4 4 4 4 4 4 . . . . . 
            . . . 4 4 4 4 4 4 4 4 4 . . . . 
            . . . 4 e e e 4 4 4 4 4 . . . . 
            . . . e 4 4 f b e 4 4 e . . . . 
            . . . e d d f 1 4 d 4 e . . . . 
            . . . f d d d e e e e e . . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 8 8 e d d e f . . . . . 
            . . c f 5 5 f e e f f f . . . . 
            . . c f f f f f f f f c . . . . 
            . . . c f f . . . c c . . . . . 
            `],
        100,
        false
        )
    }
})
