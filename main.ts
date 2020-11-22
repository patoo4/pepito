enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const magiatopdown = SpriteKind.create()
    export const boss = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss, function (sprite, otherSprite) {
    statusbar.value += 5
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . 8 . . . . . . . . . 
        . . . . . 8 . . . . . . . . . . 
        . . . . 8 . 5 . . . . . . . . . 
        . . . 8 . 5 . . . . . . . . . . 
        . . 8 . 5 . . . . . . . . . . . 
        . 8 . 5 . . . . . . . . . . . . 
        8 . 5 . . . . . . . . . . . . . 
        8 . 5 . . . . . . . . . . . . . 
        8 . 5 . . . . . . . . . . . . . 
        8 . 5 . . . . . . . . . . . . . 
        . 8 . 5 . . . . . . . . . . . . 
        . . 8 . 5 . . . . . . . . . . . 
        . . . 8 . 5 . . . . . . . . . . 
        . . . . 8 . 5 . . . . . . . . . 
        . . . . . 8 . . . . . . . . . . 
        . . . . . . 8 . . . . . . . . . 
        `, jugador, -100, 0)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . 8 . . . . . . 
        . . . . . . . . . . 8 . . . . . 
        . . . . . . . . . 5 . 8 . . . . 
        . . . . . . . . . . 5 . 8 . . . 
        . . . . . . . . . . . 5 . 8 . . 
        . . . . . . . . . . . . 5 . 8 . 
        . . . . . . . . . . . . . 5 . 8 
        . . . . . . . . . . . . . 5 . 8 
        . . . . . . . . . . . . . 5 . 8 
        . . . . . . . . . . . . . 5 . 8 
        . . . . . . . . . . . . 5 . 8 . 
        . . . . . . . . . . . 5 . 8 . . 
        . . . . . . . . . . 5 . 8 . . . 
        . . . . . . . . . 5 . 8 . . . . 
        . . . . . . . . . . 8 . . . . . 
        . . . . . . . . . 8 . . . . . . 
        `, jugador, 100, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . 8 . . . . 8 . . . . . 
        . . . . 8 . 5 5 5 5 . 8 . . . . 
        . . . 8 . 5 . . . . 5 . 8 . . . 
        . . 8 . 5 . . . . . . 5 . 8 . . 
        . 8 . 5 . . . . . . . . 5 . 8 . 
        8 . 5 . . . . . . . . . . 5 . 8 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, jugador, 0, -100)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        8 . 5 . . . . . . . . . . 5 . 8 
        . 8 . 5 . . . . . . . . 5 . 8 . 
        . . 8 . 5 . . . . . . 5 . 8 . . 
        . . . 8 . 5 . . . . 5 . 8 . . . 
        . . . . 8 . 5 5 5 5 . 8 . . . . 
        . . . . . 8 . . . . 8 . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        `, jugador, 0, 100)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    jugador.destroy(effects.ashes, 500)
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(-5)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -0.1
})
let enemy_2: Sprite = null
let enemy_1: Sprite = null
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let jugador: Sprite = null
jugador = sprites.create(img`
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
statusbar = statusbars.create(100, 5, StatusBarKind.Health)
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
            `,img`
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
            . . . e f f f f f f f f 4 e . . 
            . . . 4 f 8 8 8 8 8 e d d 4 . . 
            . . . e f f f f f f e e 4 . . . 
            . . . . f f f . . . . . . . . . 
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
            . . . . 4 4 4 4 4 4 4 4 . . . . 
            . . . 4 4 4 4 4 4 4 4 4 4 . . . 
            . . . 4 4 4 e e e e 4 4 4 . . . 
            . . . e f b f 4 4 f b f e . . . 
            . . . e 4 1 f d d f 1 4 e . . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 8 8 8 8 f e f . . 
            . . . e d d e 8 8 8 8 f 4 e . . 
            . . . . e e f 5 5 e e f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f c c . . . . 
            `,img`
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
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 8 8 8 8 e d d 4 e . . 
            . . e 4 f 8 8 8 8 e d d e . . . 
            . . . . f e e 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . c c f . . . . . . . . . 
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
forever(function () {
    enemy_1 = sprites.create(img`
        ...................
        ...................
        ...................
        .........1.........
        .....1..1...11.....
        ......1..1.1.......
        ....1..4444..1.....
        .....142cc241......
        .....4c2cc2c4......
        ...111cccccc111....
        .....4cc55cc4......
        .....1c5cc5c1......
        ....1.4cccc4.1.....
        .......1cc1........
        ........11.........
        .......1..1........
        ...................
        ...................
        ...................
        `, SpriteKind.Enemy)
    enemy_1.setVelocity(30, 30)
    enemy_1.follow(jugador, 50)
    enemy_1.setPosition(randint(0, 1000), randint(0, 1000))
    enemy_1 = sprites.create(img`
        ...................
        ...................
        ...................
        ....2...2.2...2....
        .....2..2.2..2.....
        ...................
        .......55.55.......
        ....22..555..22....
        .......55555.......
        ....22..555..22....
        .......55.55.......
        ...................
        .....2..2.2..2.....
        ....2...2.2...2....
        ...................
        ...................
        ...................
        ...................
        ...................
        `, SpriteKind.Enemy)
    enemy_1.setVelocity(30, 30)
    enemy_1.setPosition(randint(0, 1000), randint(0, 1000))
    enemy_1.follow(jugador, 50)
    pause(500)
})
forever(function () {
    enemy_2 = sprites.create(img`
        f f 1 1 1 1 . . . . 1 1 1 1 f f 
        f 1 1 1 1 5 . . . . 5 1 1 1 1 f 
        1 1 1 1 f f 5 . . 5 f f 1 1 1 1 
        1 1 1 5 f f f 5 5 f f f 5 1 1 1 
        1 1 f f 5 f f 5 5 f f 5 f f 1 1 
        1 5 f f f 5 f 5 5 f 5 f f f 5 1 
        . . 5 f f f 5 5 5 5 f f f 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 f f f 5 5 5 5 f f f 5 . . 
        1 5 f f f 5 f 5 5 f 5 f f f 5 1 
        1 1 f f 5 f f 5 5 f f 5 f f 1 1 
        1 1 1 5 f f f 5 5 f f f 5 1 1 1 
        1 1 1 1 f f 5 . . 5 f f 1 1 1 1 
        f 1 1 1 1 5 . . . . 5 1 1 1 1 f 
        f f 1 1 1 1 . . . . 1 1 1 1 f f 
        `, SpriteKind.boss)
    enemy_2.setVelocity(30, 30)
    enemy_2.follow(jugador, 25)
    enemy_2.setPosition(randint(0, 1000), randint(0, 1000))
    pause(5000)
})
