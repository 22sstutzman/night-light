basic.forever(function () {
    serial.writeValue("light", input.lightLevel())
    if (input.lightLevel() < 15) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    } else {
        basic.clearScreen()
    }
})
