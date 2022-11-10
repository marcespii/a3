input.onButtonPressed(Button.A, function () {
    basic.showNumber(base * alçada / 2)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B" + "=" + base)
    basic.pause(500)
    basic.showString("H" + "=" + alçada)
})
let alçada = 0
let base = 0
base = randint(1, 10)
alçada = randint(1, 10)
