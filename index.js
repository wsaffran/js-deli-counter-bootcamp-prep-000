/*function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
*/

var currentNumber = 0

function takeANumber(katzDeliLine) {
  currentNumber++
  katzDeliLine.push(currentNumber)
  reuturn `Welcome. You are number ${currentNumber}`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0)
    return `There is nobody waiting to be served!`
  else
    return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(line) {
  var currentLine = []
  var i = 0
  while (i < line.length) {
    currentLine.push(` ${i+1}. ${line[i]}`)
    i++
  }
  if (currentLine.length === 0)
    return `The line is currently empty.`
  else {
    return `The line is currently:${currentLine}`
  }
}









/*
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`)
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0)
    return "There is nobody waiting to be served!"
  else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  var newLine = []
  var i = 0
  while (i < katzDeliLine.length) {
    newLine.push(` ${i+1}. ${katzDeliLine[i]}`)
    i++
  }
  if (katzDeliLine.length === 0)
    return "The line is currently empty."
  else
    return `The line is currently:${newLine}`
}
*/
