let B = 0
basic.forever(function () {
    B = 255 - input.lightLevel()
    led.setBrightness(B)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
