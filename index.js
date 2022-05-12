#!/usr/bin/env node

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question('Type a color name from [blue, green, orange, pink, purple, red, sakura-pink, sky-blue, yellow, random] :', (answer) => {
  switch (answer) {
    case 'blue':
      showColorCodeList(200, 15, 1, 0, 1, 0, 0, 255)
      break
    case 'green':
      showColorCodeList(200, 15, 1, 0, 0, 255, 1, 0)
      break
    case 'orange':
      showColorCodeList(80, 6, 0, 255, 1, 150, 2, 0)
      break
    case 'pink':
      showColorCodeList(200, 15, 0, 255, 1, 0, 0, 255)
      break
    case 'purple':
      showColorCodeList(55, 4, 1, 180, 4, 0, 0, 255)
      break
    case 'red':
      showColorCodeList(200, 15, 0, 255, 1, 0, 1, 0)
      break
    case 'sakura-pink':
      showColorCodeList(120, 9, 0, 255, 2, 0, 1, 100)
      break
    case 'sky-blue':
      showColorCodeList(40, 3, 5, 0, 1, 200, 0, 255)
      break
    case 'yellow':
      showColorCodeList(200, 15, 0, 255, 0, 255, 1, 0)
      break
    case 'random':
      showRandomColorCodeList()
      break
    default:
      console.log('Please type a correct color name.')
      break
  }
  readline.close()
})

const showColorCodeList = (maxIndex, addedIndex, num1, num2, num3, num4, num5, num6) => {
  for (let i = 0; i < maxIndex; i = i + addedIndex) {
    const red = i * num1 + num2
    const green = i * num3 + num4
    const blue = i * num5 + num6
    const colorCode = `[38;2;${red};${green};${blue}m`
    console.log(`\x1b${colorCode}%s\x1b[0m`, `\\033${colorCode}`)
  }
}

const showRandomColorCodeList = () => {
  const randomNumber = () => Math.floor(Math.random() * 256)
  for (let i = 0; i < 14; i++) {
    const colorCode = `[38;2;${randomNumber()};${randomNumber()};${randomNumber()}m`
    console.log(`\x1b${colorCode}%s\x1b[0m`, `\\033${colorCode}`)
  }
}
