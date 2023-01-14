input.onButtonPressed(Button.A, function () {
    basic.showNumber(Pasos)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    Pasos = Pasos + 1
    basic.pause(500)
})
input.onButtonPressed(Button.AB, function () {
    Pasos = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showString("M:" + Math.round(Pasos * 0.7) + "Metros")
})
let Pasos = 0
Pasos = 0
basic.forever(function () {
    basic.showIcon(IconNames.StickFigure)
})
