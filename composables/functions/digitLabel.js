export function sensorLabel(digit) {
    const words = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]
    return `Sensor ${words[digit - 1]}`
}