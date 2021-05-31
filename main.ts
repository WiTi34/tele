/**
 * alarme en cas de choque
 */
/**
 * les différentes inclinaisons
 */
/**
 * je fais un bouton 
 * 
 * on / off
 */
/**
 * la réception avec la deuxième carte
 */
radio.onReceivedNumber(function (receivedNumber) {
    if (true) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
})
input.onButtonPressed(Button.A, function () {
    onoff = 1
})
input.onButtonPressed(Button.B, function () {
    onoff = 0
})
let strip: neopixel.Strip = null
let onoff = 0
onoff = 1
basic.forever(function () {
    if (input.isGesture(Gesture.ThreeG)) {
        music.playMelody("C5 B C5 B C5 B C5 B ", 500)
    }
})
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
    if (onoff == 0 && input.isGesture(Gesture.ScreenUp)) {
        radio.sendNumber(1)
    }
    if (onoff == 0 && input.isGesture(Gesture.ScreenDown)) {
        radio.sendNumber(2)
    }
})
