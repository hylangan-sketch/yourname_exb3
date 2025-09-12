function Countdown () {
    basic.showString("3")
    basic.pause(500)
    basic.showString("2")
    basic.pause(500)
    basic.showString("1")
    basic.pause(500)
    basic.showString("")
    basic.pause(randint(500, 1500))
    basic.showIcon(IconNames.Heart)
}
Countdown()
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(500)
        Countdown()
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(500)
        Countdown()
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        Countdown()
        basic.pause(500)
    }
})
