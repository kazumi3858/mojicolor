#!/usr/bin/env node

const showColorCodeList = (maxIndex, addedIndex, num1, num2, num3, num4, num5, num6) => {
  for (let i = 0; i < maxIndex; i = i + addedIndex) {
    const red = i * num1 + num2
    const green = i * num3 + num4
    const blue = i * num5 + num6
    const colorCode = `[38;2;${red};${green};${blue}m`
    console.log(`\x1b${colorCode}%s\x1b[0m`, `\\033${colorCode}`)
  }
}

const getRandomColorCodes = () => {
  const randomNumber = () => Math.floor(Math.random() * 256)
  for (let i = 0; i < 14; i++) {
    const colorCode = `[38;2;${randomNumber()};${randomNumber()};${randomNumber()}m`
    console.log(`\x1b${colorCode}%s\x1b[0m`, `\\033${colorCode}`)
  }
}

switch (process.argv[2]) {
  case 'red':
    showColorCodeList(200, 15, 0, 255, 1, 0, 1, 0)
    break
  case 'yellow':
    showColorCodeList(200, 15, 0, 255, 0, 255, 1, 0)
    break
  case 'green':
    showColorCodeList(200, 15, 1, 0, 0, 255, 1, 0)
    break
  case 'blue':
    showColorCodeList(200, 15, 1, 0, 1, 0, 0, 255)
    break
  case 'pink':
    showColorCodeList(200, 15, 0, 255, 1, 0, 0, 255)
    break
  case 'sakura-pink':
    showColorCodeList(120, 9, 0, 255, 2, 0, 1, 100)
    break
  case 'orange':
    showColorCodeList(80, 6, 0, 255, 1, 150, 2, 0)
    break
  case 'sky-blue':
    showColorCodeList(40, 2, 5, 0, 1, 200, 0, 255)
    break
  case 'purple':
    showColorCodeList(55, 4, 1, 180, 4, 0, 0, 255)
    break
  case 'random':
    getRandomColorCodes()
    break
  default:
    console.log('Please type the corrent color name.')
    break
}
